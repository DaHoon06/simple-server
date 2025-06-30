export const CORS_OPTIONS = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://dahoon06.github.io",
  ],
  credentials: true,
};

type EndPointType = "playground";

export const END_POINTS: Record<EndPointType, string> = {
  playground: "playground",
};

export type { EndPointType };
