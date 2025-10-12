"use client";

import React from "react";

type WistiaProps = React.HTMLAttributes<HTMLElement> & {
  "media-id"?: string;
  aspect?: string;
};

export default function WistiaPlayer(props: WistiaProps) {
  // Render the custom element name via createElement to avoid JSX intrinsic typing issues
  // Props are forwarded as-is; the custom element will be attached to the DOM on the client
  // Suppress hydration warning since Wistia adds unique-id on the client side
  return React.createElement(
    "wistia-player",
    {
      ...props,
      suppressHydrationWarning: true,
    } as unknown as Record<string, unknown>
  );
}
