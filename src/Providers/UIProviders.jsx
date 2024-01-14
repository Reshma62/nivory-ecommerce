"use client";

import { NextUIProvider } from "@nextui-org/react";

const UIProviders = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UIProviders;
