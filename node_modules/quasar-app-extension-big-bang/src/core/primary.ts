export type TPrimaryEntry = {
  reference: string;
  p50: string;
  p100: string;
  p200: string;
  p300: string;
  p400: string;
  p500: string;
  p600: string;
  p700: string;
  p800: string;
  p900: string;
  p950: string;
};
export type TPrimaryLabel =
  | "Contrast"
  | "Emerald"
  | "Green"
  | "Lime"
  | "Orange"
  | "Amber"
  | "Yellow"
  | "Teal"
  | "Cyan"
  | "Sky"
  | "Blue"
  | "Indigo"
  | "Violet"
  | "Purple"
  | "Fushia"
  | "Pink"
  | "Rose";

const entries: Record<TPrimaryLabel, TPrimaryEntry> = Object.freeze({
  Contrast: {
    reference: "light-dark(var(--surface-800), var(--surface-200))",
    p50: "light-dark(var(--surface-950), var(--surface-50))",
    p100: "light-dark(var(--surface-900), var(--surface-100))",
    p200: "light-dark(var(--surface-800), var(--surface-200))",
    p300: "light-dark(var(--surface-700), var(--surface-200))",
    p400: "light-dark(var(--surface-800), var(--surface-50))",
    p500: "light-dark(var(--surface-800), var(--surface-200))",
    p600: "light-dark(var(--surface-800), var(--surface-600))",
    p700: "light-dark(var(--surface-300), var(--surface-700))",
    p800: "light-dark(var(--surface-200), var(--surface-800))",
    p900: "light-dark(var(--surface-100), var(--surface-900))",
    p950: "light-dark(var(--surface-50), var(--surface-950))",
  },
  Emerald: {
    reference: "#10b981",
    p50: "#ecfdf5",
    p100: "#d1fae5",
    p200: "#a7f3d0",
    p300: "#6ee7b7",
    p400: "#34d399",
    p500: "#10b981",
    p600: "#059669",
    p700: "#047857",
    p800: "#065f46",
    p900: "#064e3b",
    p950: "#022c22",
  },
  Green: {
    reference: "#22c55e",
    p50: "#f0fdf4",
    p100: "#dcfce7",
    p200: "#bbf7d0",
    p300: "#86efac",
    p400: "#4ade80",
    p500: "#22c55e",
    p600: "#16a34a",
    p700: "#15803d",
    p800: "#166534",
    p900: "#14532d",
    p950: "#052e16",
  },
  Lime: {
    reference: "#84cc16",
    p50: "#f7fee7",
    p100: "#ecfccb",
    p200: "#d9f99d",
    p300: "#bef264",
    p400: "#a3e635",
    p500: "#84cc16",
    p600: "#65a30d",
    p700: "#4d7c0f",
    p800: "#3f6212",
    p900: "#365314",
    p950: "#1a2e05",
  },
  Orange: {
    reference: "#f97316",
    p50: "#fff7ed",
    p100: "#ffedd5",
    p200: "#fed7aa",
    p300: "#fdba74",
    p400: "#fb923c",
    p500: "#f97316",
    p600: "#ea580c",
    p700: "#c2410c",
    p800: "#9a3412",
    p900: "#7c2d12",
    p950: "#431407",
  },
  Amber: {
    reference: "#f59e0b",
    p50: "#fffbeb",
    p100: "#fef3c7",
    p200: "#fde68a",
    p300: "#fcd34d",
    p400: "#fbbf24",
    p500: "#f59e0b",
    p600: "#d97706",
    p700: "#b45309",
    p800: "#92400e",
    p900: "#78350f",
    p950: "#451a03",
  },
  Yellow: {
    reference: "#eab308",
    p50: "#fefce8",
    p100: "#fef9c3",
    p200: "#fef08a",
    p300: "#fde047",
    p400: "#facc15",
    p500: "#eab308",
    p600: "#ca8a04",
    p700: "#a16207",
    p800: "#854d0e",
    p900: "#713f12",
    p950: "#422006",
  },
  Teal: {
    reference: "#14b8a6",
    p50: "#f0fdfa",
    p100: "#ccfbf1",
    p200: "#99f6e4",
    p300: "#5eead4",
    p400: "#2dd4bf",
    p500: "#14b8a6",
    p600: "#0d9488",
    p700: "#0f766e",
    p800: "#115e59",
    p900: "#134e4a",
    p950: "#042f2e",
  },
  Cyan: {
    reference: "#06b6d4",
    p50: "#ecfeff",
    p100: "#cffafe",
    p200: "#a5f3fc",
    p300: "#67e8f9",
    p400: "#22d3ee",
    p500: "#06b6d4",
    p600: "#0891b2",
    p700: "#0e7490",
    p800: "#155e75",
    p900: "#164e63",
    p950: "#083344",
  },
  Sky: {
    reference: "#0ea5e9",
    p50: "#f0f9ff",
    p100: "#e0f2fe",
    p200: "#bae6fd",
    p300: "#7dd3fc",
    p400: "#38bdf8",
    p500: "#0ea5e9",
    p600: "#0284c7",
    p700: "#0369a1",
    p800: "#075985",
    p900: "#0c4a6e",
    p950: "#082f49",
  },
  Blue: {
    reference: "#3b82f6",
    p50: "#eff6ff",
    p100: "#dbeafe",
    p200: "#bfdbfe",
    p300: "#93c5fd",
    p400: "#60a5fa",
    p500: "#3b82f6",
    p600: "#2563eb",
    p700: "#1d4ed8",
    p800: "#1e40af",
    p900: "#1e3a8a",
    p950: "#172554",
  },
  Indigo: {
    reference: "#6366f1",
    p50: "#eef2ff",
    p100: "#e0e7ff",
    p200: "#c7d2fe",
    p300: "#a5b4fc",
    p400: "#818cf8",
    p500: "#6366f1",
    p600: "#4f46e5",
    p700: "#4338ca",
    p800: "#3730a3",
    p900: "#312e81",
    p950: "#1e1b4b",
  },
  Violet: {
    reference: "#8b5cf6",
    p50: "#f5f3ff",
    p100: "#ede9fe",
    p200: "#ddd6fe",
    p300: "#c4b5fd",
    p400: "#a78bfa",
    p500: "#8b5cf6",
    p600: "#7c3aed",
    p700: "#6d28d9",
    p800: "#5b21b6",
    p900: "#4c1d95",
    p950: "#2e1065",
  },
  Purple: {
    reference: "#a855f7",
    p50: "#faf5ff",
    p100: "#f3e8ff",
    p200: "#e9d5ff",
    p300: "#d8b4fe",
    p400: "#c084fc",
    p500: "#a855f7",
    p600: "#9333ea",
    p700: "#7e22ce",
    p800: "#6b21a8",
    p900: "#581c87",
    p950: "#3b0764",
  },
  Fushia: {
    reference: "#d946ef",
    p50: "#fdf4ff",
    p100: "#fae8ff",
    p200: "#f5d0fe",
    p300: "#f0abfc",
    p400: "#e879f9",
    p500: "#d946ef",
    p600: "#c026d3",
    p700: "#a21caf",
    p800: "#86198f",
    p900: "#701a75",
    p950: "#4a044e",
  },
  Pink: {
    reference: "#ec4899",
    p50: "#fdf2f8",
    p100: "#fce7f3",
    p200: "#fbcfe8",
    p300: "#f9a8d4",
    p400: "#f472b6",
    p500: "#ec4899",
    p600: "#db2777",
    p700: "#be185d",
    p800: "#9d174d",
    p900: "#831843",
    p950: "#500724",
  },
  Rose: {
    reference: "#f43f5e",
    p50: "#fff1f2",
    p100: "#ffe4e6",
    p200: "#fecdd3",
    p300: "#fda4af",
    p400: "#fb7185",
    p500: "#f43f5e",
    p600: "#e11d48",
    p700: "#be123c",
    p800: "#9f1239",
    p900: "#881337",
    p950: "#4c0519",
  },
});

export const primaries: Map<TPrimaryLabel, TPrimaryEntry> = Object.freeze(
  new Map(Object.entries(entries) as [TPrimaryLabel, TPrimaryEntry][]),
);
