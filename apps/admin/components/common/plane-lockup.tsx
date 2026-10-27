/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

// Astra Flow logo lockup for admin auth chrome.

type PlaneLockupProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
  color?: string;
};

export function PlaneLockup({ width = "253", height = "53", className }: PlaneLockupProps) {
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    objectFit: "contain",
  };

  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", lineHeight: 0 }}>
      <img src="/brand/astra-flow-lockup.png" alt="Astra Flow" style={style} className="astra-lockup-light" />
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
