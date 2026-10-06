import { getMessages, getLocale } from "next-intl/server";
import { createCopy, type CopyMessages } from "./translate";
export async function getCopy(locale?: string) { return createCopy(locale ?? await getLocale(), await getMessages(locale ? { locale } : undefined) as CopyMessages); }
