/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { cn } from "@plane/utils";

type AstraFlowMarkProps = {
  className?: string;
  /** Prefer lockup (mark + wordmark) in wider chrome; mark-only in compact chrome. */
  variant?: "mark" | "lockup";
};

/**
 * Astra Flow brand asset for app chrome (sidebar / top nav).
 * Uses public brand assets so light and dark lockups can switch with data-theme.
 */
export function AstraFlowMark({ className, variant = "mark" }: AstraFlowMarkProps) {
  if (variant === "lockup") {
    return (
      <span className={cn("inline-flex items-center", className)} aria-label="Astra Flow">
        <img src="/brand/astra-flow-lockup.png" alt="Astra Flow" className="astra-lockup-light h-full w-auto" />
        <img
          src="/brand/astra-flow-lockup-dark.png"
          alt=""
          aria-hidden
          className="astra-lockup-dark h-full w-auto"
        />
      </span>
    );
  }

  return (
    <img
      src="/brand/astra-flow-mark.png"
      alt="Astra Flow"
      className={cn("h-full w-auto object-contain", className)}
    />
  );
}
