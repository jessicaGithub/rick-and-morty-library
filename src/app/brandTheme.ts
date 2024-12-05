"use client";

import {theme as chakraTheme, extendTheme } from "@chakra-ui/react";

export const brandTheme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    heading: 'getSchwifty, sans-serif',
  },
});
