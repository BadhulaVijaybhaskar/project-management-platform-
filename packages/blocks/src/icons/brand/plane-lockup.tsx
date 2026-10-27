/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

export type PlaneLockupProps = React.ComponentPropsWithoutRef<"img"> & {
  width?: string | number;
  height?: string | number;
  color?: string;
};

/**
 * Astra Flow wordmark lockup (replaces the Astra Flow SVG lockup in this fork).
 * Light-background asset by default; dark-background reversed variant via CSS.
 */
export function PlaneLockup({
  width = "253",
  height = "53",
  className,
  alt = "Astra Flow",
  ...rest
}: PlaneLockupProps) {
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    objectFit: "contain",
  };

  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", lineHeight: 0 }}>
      <img
        src="/brand/astra-flow-lockup.png"
        alt={alt}
        style={style}
        className="astra-lockup-light"
        {...rest}
      />
      <img
        src="/brand/astra-flow-lockup-dark.png"
        alt=""
        aria-hidden
        style={style}
        className="astra-lockup-dark"
      />
    </span>
  );
}
