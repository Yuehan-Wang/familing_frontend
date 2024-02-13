import { createMedia } from "@tamagui/react-native-media-driver";
import { createFont, createTamagui, createTokens } from "tamagui";

const size = {
  1: 12,
  2: 14,
  3: 15,
  4: 16,
};
const interFont = createFont({
  size,
  family: "Inter, Helvetica, Arial, sans-serif",

  lineHeight: {
    2: 22,
  },
  weight: {
    1: "300",
    3: "600",
  },
  letterSpacing: {
    1: 0,
    2: -1,
  },
  face: {
    300: { normal: "InterLight", italic: "InterItalic" },
    600: { normal: "InterBold" },
  },
});

const tokens = createTokens({
  size: {
    0: 0,
    1: 5,
    2: 10,
    true: 10,
  },
  space: {
    ...size,
    "-1": -5,
    "-2": -10,
    true: 10,
  },
  radius: {
    0: 0,
    1: 3,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
  },
  color: {
    teal: "#008080",
    tealLight: "#66b2b2",
    tealDark: "#006666",
    tealLighter: "#b2d8d8",
    white: "#fff",
    black: "#000",
  },
});

const config = createTamagui({
  fonts: {
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {
    light: {
      bg: tokens.color.tealLighter,
      color: tokens.color.black,
    },
    dark: {
      bg: tokens.color.tealDark,
      color: tokens.color.white,
    },
  },
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 861 },
    short: { maxHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
  shorthands: {
    px: "paddingHorizontal",
    f: "flex",
    m: "margin",
    w: "width",
  },
  defaultProps: {
    Text: {
      color: "green",
    },
  },
});

export { tokens };
export default config;
