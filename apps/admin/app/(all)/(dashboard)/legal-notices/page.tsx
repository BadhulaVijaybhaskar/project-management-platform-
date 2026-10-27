/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export default function AdminLegalNoticesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-8 text-13 leading-6 text-secondary">
      <h1 className="mb-4 text-20 font-semibold tracking-tight text-primary">Legal notices</h1>
      <p className="mb-4">
        This service is offered over a network. Corresponding source code for the network-facing
        application is available to users of this instance upon request, consistent with the Affero
        General Public License version 3 (AGPL-3.0).
      </p>
      <p className="mb-4">
        To obtain the corresponding source code for the version running on this instance, contact
        your instance administrator, or email{" "}
        <a className="underline text-accent-primary" href="mailto:support@astraconnect.io">
          support@astraconnect.io
        </a>
        .
      </p>
      <h2 className="mt-8 mb-3 text-15 font-semibold text-primary">Third-party licences</h2>
      <p className="mb-3">
        This product incorporates open-source components distributed under licences including
        (without limitation):
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5">
        <li>GNU Affero General Public License v3.0 (AGPL-3.0)</li>
        <li>MIT License</li>
        <li>Apache License 2.0</li>
        <li>BSD licences (2-Clause and 3-Clause)</li>
        <li>ISC License</li>
        <li>Creative Commons Zero / CC0 (where applicable for assets)</li>
      </ul>
      <p>
        Full licence texts for redistributed components are retained in the source tree (including{" "}
        <code className="text-12">LICENSE.txt</code> and package metadata).
      </p>
    </div>
  );
}
