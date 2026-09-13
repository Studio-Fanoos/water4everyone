export type WaterLocation = {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  installedAt?: string;
  peopleReached?: number;
  status?: "planned" | "active" | "maintenance";
};

export const locations: WaterLocation[] = [];

export const focusRegion = {
  id: "morocco",
  name: "Marokko",
  label: "Eerste focusregio",
  lat: 31.7917,
  lng: -7.0926,
  bounds: {
    north: 35.9,
    south: 27.6,
    west: -13.2,
    east: -1.0,
  },
} as const;
