# Astra Flow staging rollback (draft)

Status: **draft** — not a runbook for production. Staging host/port are TBD pending Vijay’s review. Do not deploy from a cloud agent session.

## Intent

Revert a staging preview that was started with the community prebuilt compose plus this overlay back to a known-good prebuilt release (or tear the stack down) without rebuilding images from source.

## Preconditions

- You have shell access on the staging host (once chosen).
- You know which `APP_RELEASE` / image tags were running before the change.
- `FLOW_PROXY_PORT` for the current staging bind is known (required by the overlay).
- Named volumes in use (if data must be preserved or explicitly discarded):
  - `astra_flow_staging_pgdata` (Postgres)
  - `astra_flow_staging_uploads` (MinIO/object storage)

## Rollback options (draft)

### A. Roll image tags back (preferred when data stays)

1. Set `APP_RELEASE` (or pin image tags) in `deployments/cli/community/variables.env` to the last known-good release.
2. Keep this overlay for caps/logging/port bind unless those settings were the failure.
3. Pull prebuilt images for that release, then recreate containers (example only — run on the staging host after review):

```bash
export FLOW_PROXY_PORT=<reviewed-port>
docker compose \
  -f deployments/cli/community/docker-compose.yml \
  -f deploy/astra-flow-staging/docker-compose.override.yml \
  --env-file deployments/cli/community/variables.env \
  --env-file deploy/astra-flow-staging/variables.env \
  pull
# then up -d / recreate as appropriate on the staging host
```

4. Confirm migrator/api health before pointing anyone at the proxy URL.

### B. Tear down containers, keep volumes

Use when the process graph is bad but DB/object data should remain for a later good release.

```bash
export FLOW_PROXY_PORT=<reviewed-port>
docker compose \
  -f deployments/cli/community/docker-compose.yml \
  -f deploy/astra-flow-staging/docker-compose.override.yml \
  --env-file deployments/cli/community/variables.env \
  --env-file deploy/astra-flow-staging/variables.env \
  down
# volumes astra_flow_staging_pgdata / astra_flow_staging_uploads retained unless -v
```

### C. Full reset (destructive)

Only if staging data may be discarded:

```bash
# same compose files as above
docker compose ... down -v
```

This deletes `astra_flow_staging_pgdata` and `astra_flow_staging_uploads`.

## Open questions (fill in after review)

- [ ] Staging hostname / DNS (TBD)
- [ ] `FLOW_PROXY_PORT` value (TBD)
- [ ] Last known-good `APP_RELEASE`
- [ ] Whether branding image rebuilds are published under a different registry/tag than `makeplane/*`
- [ ] Who approves destructive volume delete

## Notes

- Overlay does not change application code; branding lives in the app images/git branch separately.
- RabbitMQ watermark (`0.6`) and Gunicorn workers (`2`) are staging caps — rolling back tags without this overlay restores community defaults unless env still overrides them.
