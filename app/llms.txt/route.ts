import { getAllPosts } from "@/lib/blog";
import { gbp, LOWEST_MONTHLY, LOWEST_PER_MONTH } from "@/lib/pricing";
import { blogPath, ROUTES } from "@/lib/routes";
import { CONNECTION_OPTIONS, PLAN_DEFS, PLAN_NAMES, PRICES, SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const u = SITE.url;
  const priceLines = CONNECTION_OPTIONS.flatMap((c) => {
    const parts = PLAN_DEFS.flatMap((p) => { const price = PRICES[c][p.id]; return price == null ? [] : [`${PLAN_NAMES.en[p.id]} ${gbp("en", price)}`]; });
    return parts.length ? [`- Prices for ${c} ${c === 1 ? "device" : "devices"}: ${parts.join(", ")}.`] : [];
  });
  const posts = getAllPosts("en").map((p) => `- [${p.title}](${u}${blogPath("en", p.slug)}): ${p.description}`);
  const body = `# ${SITE.name}

> ${SITE.name} (${new URL(u).hostname}) is an IPTV Polska service for Polish speakers living in the United Kingdom: Polish-language live TV and on-demand programmes streamed over UK broadband. Plans run from 1 to 24 months for 1 to 4 devices, priced in pounds sterling, from ${gbp("en", LOWEST_MONTHLY)} for one month (about ${gbp("en", LOWEST_PER_MONTH)} a month on the 24-month plan). No contract or automatic renewal. A free trial is available and support is offered 24/7 in English and Polish. The website is in British English.

## Key facts

${priceLines.join("\n")}
- Devices: Amazon Fire TV Stick, Samsung and LG smart TVs, Android TV / Google TV, Android phones and tablets, iPhone, iPad and Apple TV, MAG boxes, Windows and Mac.
- No satellite dish or installation needed, so it suits renters.
- Payment: PayPal (including Visa and Mastercard); orders can also be placed on WhatsApp (${SITE.phoneDisplay}) or by e-mail (${SITE.email}).
- Login details are usually sent within 5 minutes to 6 hours after payment.
- Refund: available before activation, and within 7 days if the service does not work on your device and support cannot fix it.
- Broadband guide: about 10 Mbps per screen for HD, about 25 Mbps for 4K.
- Content availability depends on plan. Rights holders: see the copyright policy.

## Pages

- [Home: IPTV Polska UK](${u}/)
- [Setup guide](${u}${ROUTES.guide.en}), [What's on](${u}${ROUTES.channels.en}), [Guides](${u}${ROUTES.blog.en}), [About](${u}${ROUTES.about.en}), [Contact](${u}${ROUTES.contact.en})
- [Terms](${u}${ROUTES.terms.en}), [Refund policy](${u}${ROUTES.refunds.en}), [Privacy policy](${u}${ROUTES.privacy.en}), [Copyright policy](${u}${ROUTES.copyright.en})

## Guides

${posts.join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
