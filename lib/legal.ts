import type { Lang } from "@/lib/i18n";

export type LegalDoc = { title: string; description: string; updated: string; intro: string; sections: { h: string; p?: string[]; ul?: string[] }[] };
export type LegalKey = "terms" | "refunds" | "privacy" | "copyright";

const UPDATED = "2026-10-17";

/** DRAFTS. Reasonable starting points written for UK customers, not legal advice. Have a solicitor review them and set COMPANY in lib/site.ts before launch. */
export const LEGAL: Record<LegalKey, Record<Lang, LegalDoc>> = {
  terms: {
    en: { title: "Terms of service", description: "The terms for using the IPTV UK website and Polish IPTV service: ordering, the free trial, fair use, availability and liability.", updated: UPDATED,
      intro: "These terms apply when you use this website or the IPTV UK service. Placing an order, or using a trial or subscription, means you accept them. Please read them alongside our refund and privacy policies.",
      sections: [
        { h: "1. What these words mean", ul: ["“Service”: access to internet television (IPTV) with Polish-language content, through compatible apps and devices.", "“You”: the person who orders, trials or uses the service.", "“Plan”: the period you pay for and the number of devices that may watch at the same time."] },
        { h: "2. Ordering and paying", p: ["You can order by WhatsApp or e-mail, or by paying through PayPal, which also accepts Visa and Mastercard. All prices are in pounds sterling (GBP). Orders are checked by a person, and your login details are sent by e-mail, normally between 5 minutes and 6 hours after payment."] },
        { h: "3. Free trial", p: ["You can ask for a free trial to check the service on your own device and internet connection. We may limit trials to one per household to prevent misuse."] },
        { h: "4. Your login details", p: ["Keep your login details private. Each plan allows a set number of devices to watch at the same time; going over that limit may lead us to suspend the account."] },
        { h: "5. Fair use", ul: ["Use the service lawfully, for private viewing in your own home.", "Do not resell, share publicly, show in a commercial venue or record content for distribution.", "Do not interfere with the service or try to get around its protections."] },
        { h: "6. Availability", p: ["We work hard to keep the service running, but we cannot promise it will never be interrupted. Quality also depends on your broadband, your router and your devices. The content available depends on your plan and may change over time."] },
        { h: "7. Liability", p: ["As far as the law allows, we are not responsible for indirect or knock-on losses. Nothing in these terms affects your statutory rights as a consumer in the UK."] },
        { h: "8. Refunds", p: ["When and how you can get your money back is set out in the separate refund policy."] },
        { h: "9. Copyright", p: ["We respect intellectual property and deal with rights holders’ notices under our copyright policy."] },
        { h: "10. Changes", p: ["We may update these terms. The date at the top of this page shows the current version."] },
      ] },
  },
  refunds: {
    en: { title: "Refund and cancellation policy", description: "When IPTV UK refunds a Polish IPTV plan: before activation, within 7 days if it does not work on your device, and how to ask.", updated: UPDATED,
      intro: "You should only pay for something that works in your home. That is why you can try the service free first, and why we offer a 7-day refund if it does not work on your device.",
      sections: [
        { h: "1. Before activation", p: ["If we have not sent your login details yet, or you have not used them, you can cancel and get a full refund."] },
        { h: "2. Within 7 days of activation", p: ["If the service does not work on your device in the first 7 days and our support team cannot fix it, we refund the price of your plan."] },
        { h: "3. After 7 days", p: ["After the first 7 days, refunds are given only where UK consumer law requires them."] },
        { h: "4. Your cancellation rights", p: ["Under the Consumer Contracts Regulations, UK consumers normally have 14 days to cancel a contract made online. For digital services, that right ends once the service starts at your request and you have agreed that you will lose it. Our 7-day refund above applies on top of this."] },
        { h: "5. How to ask for a refund", ul: ["Message us on WhatsApp or by e-mail with the e-mail address you ordered with.", "Tell us which device you use and what went wrong, so we can try to fix it first.", "Approved refunds go back to the original payment method, usually within 14 days."] },
      ] },
  },
  privacy: {
    en: { title: "Privacy policy", description: "How IPTV UK collects and uses personal data under UK GDPR: what we collect, why, who receives it, how long we keep it and your rights.", updated: UPDATED,
      intro: "We collect as little personal data as possible and use it only to run the service. This policy explains how, in line with UK GDPR and the Data Protection Act 2018.",
      sections: [
        { h: "1. Who is responsible", p: ["IPTV UK is the data controller. Our contact details are at the bottom of this page."] },
        { h: "2. What we collect", ul: ["Your e-mail address and device type when you request a free trial.", "Order details and the messages you send us.", "Technical data your browser sends to our hosting provider, such as your IP address."] },
        { h: "3. Why, and on what legal basis", ul: ["Setting up your trial: your consent.", "Processing your order and supporting you: performing our contract with you.", "Keeping the website secure: our legitimate interests.", "Meeting legal duties, for example keeping accounting records."] },
        { h: "4. Who receives it", p: ["We use trusted providers that process data for us: website hosting, e-mail delivery, messaging and payment services. Some are based outside the UK and use approved safeguards such as the UK International Data Transfer Agreement."] },
        { h: "5. How long we keep it", p: ["We keep data only for as long as we need it for the reason we collected it, or as long as the law requires."] },
        { h: "6. Your rights", ul: ["See, correct or delete your data.", "Restrict or object to how we use it.", "Ask for a copy in a portable format.", "Withdraw consent at any time.", "Complain to the Information Commissioner’s Office (ico.org.uk)."] },
        { h: "7. Cookies", p: ["We do not use advertising or tracking cookies. The website may store a small preference in your browser, which you can clear at any time."] },
      ] },
  },
  copyright: {
    en: { title: "Copyright and takedown policy", description: "How rights holders can report content to IPTV UK, what a notice should include, and how we handle notices and counter-notices.", updated: UPDATED,
      intro: "We respect intellectual property rights. If you believe content available through our service infringes your rights, please contact us and we will look into it promptly.",
      sections: [
        { h: "1. Sending a notice", p: ["E-mail us at the address below with:"], ul: ["Your name, organisation and contact details.", "A description of the work you believe is being infringed.", "Enough information for us to find the material.", "A statement that you believe in good faith the use is not authorised.", "A statement that the notice is accurate and that you are authorised to act for the rights holder.", "Your physical or electronic signature."] },
        { h: "2. What we do next", p: ["We review every notice promptly. Where a notice is valid, we remove or disable access to the material."] },
        { h: "3. Counter-notices", p: ["If you believe material was removed by mistake, write to us with the details and we will review the decision."] },
        { h: "4. Repeat infringement", p: ["We may suspend or close accounts that repeatedly infringe other people’s rights."] },
        { h: "5. Accuracy", p: ["Please send accurate notices only. Knowingly false claims may have legal consequences."] },
      ] },
  },
};
