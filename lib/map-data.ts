// Future adapter for approved official floor plans and reconciled venue coordinates.
// The legacy official map uses different IDs and names; do not infer matches or positions.
export type MapPosition = { floor: string; x: number; y: number; source: string };
export type FloorPlan = { src: string; viewBox: [number, number, number, number]; source: string };
export const verifiedMapPositions: Record<string, MapPosition> = {};
export const verifiedFloorPlans: Record<string, FloorPlan> = {};
