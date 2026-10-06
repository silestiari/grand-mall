import { stores } from "@/data/stores";
import { diningVenues } from "@/data/dining";
import { entertainmentVenues } from "@/data/entertainment";
import { verifiedMapPositions, type MapPosition } from "@/lib/map-data";

export type PlaceType = "store" | "dining" | "entertainment";
export type DirectoryGroup = "Stores" | "Dining" | "Entertainment" | "Services";
export type DirectoryPlace = { id: string; name: string; slug: string; type: PlaceType; group: DirectoryGroup; category: string; floor?: string; detailUrl: string; coordinates?: MapPosition };

const mapPlace = (place: { name: string; slug: string; category: string; floor?: string }, type: PlaceType, group: DirectoryGroup): DirectoryPlace => {
  const id = `${type}:${place.slug}`;
  return { id, name: place.name, slug: place.slug, type, group, category: place.category, floor: place.floor, detailUrl: `/${type === "store" ? "stores" : type}/${place.slug}`, coordinates: verifiedMapPositions[id] };
};
export const directoryPlaces: DirectoryPlace[] = [
  ...stores.map(place => mapPlace(place, "store", place.categories.includes("Services") ? "Services" : "Stores")),
  ...diningVenues.map(place => mapPlace(place, "dining", "Dining")),
  ...entertainmentVenues.map(place => mapPlace(place, "entertainment", "Entertainment")),
].sort((a, b) => a.name.localeCompare(b.name, "en"));
export const directoryGroups = (["Stores", "Dining", "Entertainment", "Services"] as const).filter(group => directoryPlaces.some(place => place.group === group));
export const directoryFloors = [...new Set(directoryPlaces.flatMap(place => place.floor ? [place.floor] : []))].sort((a, b) => Number(a) - Number(b));
export const normaliseDirectoryText = (value: string) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
export function searchDirectory(query: string, translate: (source: string) => string = value => value) {
  const term = normaliseDirectoryText(query.trim());
  return directoryPlaces.filter(place => normaliseDirectoryText(`${place.name} ${place.group} ${place.category} ${translate(place.group)} ${translate(place.category)}`).includes(term));
}
export function getDirectoryPlace(type: string | null, slug: string | null) { return directoryPlaces.find(place => place.type === type && place.slug === (type === "entertainment" && slug === "oktopus" ? "oktopus-fitness" : slug)); }
export function mapHref(type: PlaceType, slug: string) { return `/map?${new URLSearchParams({ type, slug }).toString()}`; }
