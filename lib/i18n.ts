/** Single-language site: British English, written for Polish viewers living in the UK. */
export type Lang = "en";
export const LANGS: Lang[] = ["en"];
export const DEFAULT_LANG: Lang = "en";

export const locales: Record<Lang, { html: string; og: string; intl: string; name: string }> = {
  en: { html: "en-GB", og: "en_GB", intl: "en-GB", name: "English" },
};
