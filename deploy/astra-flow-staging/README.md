# Astra Flow staging compose overlay

Files-only staging overlay for the **prebuilt-image** community stack (`deployments/cli/community/docker-compose.yml`). Do not treat this directory as an instruction to deploy from a cloud agent session.

## What it does

- Applies per-service `mem_limit` / `cpus` caps and `restart: unless-stopped`
- Sets `json-file` logging (`max-size: 10m`, `max-file: 3`) on every service
- Sets `GUNICORN_WORKERS=2` on `api`
- Sets RabbitMQ `vm_memory_high_watermark` to `0.6` on `plane-mq`
- Keeps Postgres (`pgdata` → `astra_flow_staging_pgdata`) and MinIO (`uploads` → `astra_flow_staging_uploads`) on named volumes
- Publishes the proxy on loopback only: `127.0.0.1:${FLOW_PROXY_PORT}` → container `:80`

## Host and port (TBD)

The staging **host** and **published proxy port** are not decided yet. They are pending Vijay’s review.

Until then:

1. Export or set `FLOW_PROXY_PORT` in `deploy/astra-flow-staging/variables.env` (required; compose fails closed if unset).
2. Do not assume `8810`, `8822`, or any other port.
3. Keep the bind on `127.0.0.1` unless a reviewed change says otherwise.

## Validate (no deploy)

From the repo root:

`FLOW_PROXY_PORT` is required (`${FLOW_PROXY_PORT:?set FLOW_PROXY_PORT}`). An empty value in `variables.env` fails closed. The overlay uses Compose `ports: !override` so community `:80`/`:443` publishes are replaced by the loopback bind only.

```bash
# Use any temporary value for config validation; real port is TBD pending review.
FLOW_PROXY_PORT=18080 docker compose \
  -f deployments/cli/community/docker-compose.yml \
  -f deploy/astra-flow-staging/docker-compose.override.yml \
  --env-file deployments/cli/community/variables.env \
  config
```

## Images

Prebuilt only — no local image builds. Image names/tags come from the community compose (`makeplane/plane-*`, `postgres`, `valkey`, `rabbitmq`, `pgsty/silo`).

## Related

- Caps and logging: `docker-compose.override.yml`
- Rollback notes (draft): `ROLLBACK.md`
