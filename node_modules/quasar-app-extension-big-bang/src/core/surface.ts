export type TSurfaceEntry = {
  reference: string;
  s0: string;
  s50: string;
  s100: string;
  s200: string;
  s300: string;
  s400: string;
  s500: string;
  s600: string;
  s700: string;
  s800: string;
  s900: string;
  s950: string;
};
export type TSurfaceLabel =
  | "Slate"
  | "Gray"
  | "Zinc"
  | "Neutral"
  | "Stone"
  | "Soho"
  | "Viva"
  | "Ocean"
  | "Taupe"
  | "Mauve"
  | "Mist"
  | "Olive";

const entries: Record<TSurfaceLabel, TSurfaceEntry> = Object.freeze({
  Slate: {
    reference: "#46748b",
    s0: "#ffffff",
    s50: "#f8fafc",
    s100: "#f1f5f9",
    s200: "#e2e8f0",
    s300: "#cbd5e1",
    s400: "#94a3b8",
    s500: "#64748b",
    s600: "#475569",
    s700: "#334155",
    s800: "#1e293b",
    s900: "#0f172a",
    s950: "#020617",
  },
  Gray: {
    reference: "#6b7280",
    s0: "#ffffff",
    s50: "#f9fafb",
    s100: "#f3f4f6",
    s200: "#e5e7eb",
    s300: "#d1d5db",
    s400: "#9ca3af",
    s500: "#6b7280",
    s600: "#4b5563",
    s700: "#374151",
    s800: "#1f2937",
    s900: "#111827",
    s950: "#030712",
  },
  Zinc: {
    reference: "#71717a",
    s0: "#ffffff",
    s50: "#fafafa",
    s100: "#f4f4f5",
    s200: "#e4e4e7",
    s300: "#d4d4d8",
    s400: "#a1a1aa",
    s500: "#71717a",
    s600: "#52525b",
    s700: "#3f3f46",
    s800: "#27272a",
    s900: "#18181b",
    s950: "#09090b",
  },
  Neutral: {
    reference: "#737373",
    s0: "#ffffff",
    s50: "#fafafa",
    s100: "#f5f5f5",
    s200: "#e5e5e5",
    s300: "#d4d4d4",
    s400: "#a3a3a3",
    s500: "#737373",
    s600: "#525252",
    s700: "#404040",
    s800: "#262626",
    s900: "#171717",
    s950: "#0a0a0a",
  },
  Stone: {
    reference: "#78716c",
    s0: "#ffffff",
    s50: "#fafaf9",
    s100: "#f5f5f4",
    s200: "#e7e5e4",
    s300: "#d6d3d1",
    s400: "#a8a29e",
    s500: "#78716c",
    s600: "#57534e",
    s700: "#44403c",
    s800: "#292524",
    s900: "#1c1917",
    s950: "#0c0a09",
  },
  Soho: {
    reference: "#7f8084",
    s0: "#ffffff",
    s50: "#ececec",
    s100: "#dedfdf",
    s200: "#c4c4c6",
    s300: "#adaeb0",
    s400: "#97979b",
    s500: "#7f8084",
    s600: "#6a6b70",
    s700: "#55565b",
    s800: "#3f4046",
    s900: "#2c2c34",
    s950: "#16161d",
  },
  Viva: {
    reference: "#666769",
    s0: "#ffffff",
    s50: "#f3f3f3",
    s100: "#e7e7e8",
    s200: "#cfd0d0",
    s300: "#b7b8b9",
    s400: "#9fa1a1",
    s500: "#87898a",
    s600: "#6e7173",
    s700: "#565a5b",
    s800: "#3e4244",
    s900: "#262b2c",
    s950: "#0e1315",
  },
  Ocean: {
    reference: "#828787",
    s0: "#ffffff",
    s50: "#fbfcfc",
    s100: "#F7F9F8",
    s200: "#EFF3F2",
    s300: "#DADEDD",
    s400: "#B1B7B6",
    s500: "#828787",
    s600: "#5F7274",
    s700: "#415B61",
    s800: "#29444E",
    s900: "#183240",
    s950: "#0c1920",
  },
  Taupe: {
    reference: "#7d7468",
    s0: "#ffffff",
    s50: "#faf8f6",
    s100: "#f2eeea",
    s200: "#e4ddd6",
    s300: "#d0c6bc",
    s400: "#a89e94",
    s500: "#7d7468",
    s600: "#5e564c",
    s700: "#4a433b",
    s800: "#322d28",
    s900: "#211d19",
    s950: "#110f0c",
  },
  Mauve: {
    reference: "#7e7082",
    s0: "#ffffff",
    s50: "#faf8fa",
    s100: "#f4f0f5",
    s200: "#e8dfe9",
    s300: "#d5c9d7",
    s400: "#ad9db0",
    s500: "#7e7082",
    s600: "#5d5261",
    s700: "#483f4c",
    s800: "#312a34",
    s900: "#201c22",
    s950: "#100e11",
  },
  Mist: {
    reference: "#6b7a94",
    s0: "#ffffff",
    s50: "#f8fafe",
    s100: "#eef2fa",
    s200: "#dde4f0",
    s300: "#c5cfe0",
    s400: "#97a4bb",
    s500: "#6b7a94",
    s600: "#4e5b72",
    s700: "#3c475a",
    s800: "#283142",
    s900: "#1a2130",
    s950: "#0c1018",
  },
  Olive: {
    reference: "#767e6c",
    s0: "#ffffff",
    s50: "#fafbf8",
    s100: "#f2f4ee",
    s200: "#e3e7dc",
    s300: "#cfd5c4",
    s400: "#a3ab96",
    s500: "#767e6c",
    s600: "#575e4f",
    s700: "#43493c",
    s800: "#2e3228",
    s900: "#1e211a",
    s950: "#0f100c",
  },
});

export const surfaces: Map<TSurfaceLabel, TSurfaceEntry> = Object.freeze(
  new Map(Object.entries(entries) as [TSurfaceLabel, TSurfaceEntry][]),
);
