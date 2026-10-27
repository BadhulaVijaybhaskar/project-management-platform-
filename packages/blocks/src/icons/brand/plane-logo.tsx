/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

export type PlaneLogoProps = React.ComponentPropsWithoutRef<"img"> & {
  width?: string | number;
  height?: string | number;
  color?: string;
};

/**
 * Astra Flow mark (square icon cropped from the official lockup).
 * Replaces the Astra Flow SVG logo in this fork.
 */
export function PlaneLogo({
  width = "85",
  height = "52",
  className,
  alt = "Astra Flow",
  color: _color,
  ...rest
}: PlaneLogoProps) {
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    objectFit: "contain",
  };

  return (
    <img
      src="/brand/astra-flow-mark.png"
      alt={alt}
      className={className}
      style={style}
      {...rest}
    />
  );
}
