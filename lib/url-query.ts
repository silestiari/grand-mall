"use client";
import { useSyncExternalStore } from "react";

// Directory filters live in the URL, so Back, shared links and language switching restore them.
// useSearchParams would make these statically rendered pages bail out to client rendering,
// so the query is read from window.location and written with the native History API.
const QUERY_EVENT = "grandmall:query";

export function subscribeToUrl(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  window.addEventListener(QUERY_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
    window.removeEventListener(QUERY_EVENT, callback);
  };
}

/** Sets or (with "") removes query parameters, keeping the path and hash. */
export function setQueryParams(updates: Record<string, string>) {
  const params = new URLSearchParams(window.location.search);
  for (const [name, value] of Object.entries(updates)) {
    if (value) params.set(name, value);
    else params.delete(name);
  }
  const query = params.toString();
  window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  window.dispatchEvent(new Event(QUERY_EVENT));
}

/** Reads one query parameter; values outside `allowed` fall back to "". Server render sees "". */
export function useQueryParam(name: string, allowed?: readonly string[]) {
  const value = useSyncExternalStore(subscribeToUrl, () => new URLSearchParams(window.location.search).get(name) ?? "", () => "");
  return allowed && !allowed.includes(value) ? "" : value;
}
