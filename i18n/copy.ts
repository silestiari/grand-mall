import { useLocale, useMessages } from "next-intl";
import { createCopy, type CopyMessages } from "./translate";
export function useCopy() { return createCopy(useLocale(), useMessages() as CopyMessages); }
