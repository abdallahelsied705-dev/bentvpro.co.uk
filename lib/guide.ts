import type { Lang } from "@/lib/i18n";

export type GuideSection = { id: string; title: string; steps: string[]; note?: string; link?: { label: string; href: string } };

export const GUIDE_TEXT: Record<Lang, { title: string; description: string; h1: string; intro: string; eyebrow: string; crumb: string; stepWord: string; note: string; ctaTitle: string; ctaText: string; help: string; helpMsg: string; trial: string }> = {
  en: {
    title: "IPTV UK setup guide for every device",
    description: "How to set up IPTV UK on a Samsung or LG smart TV, Fire TV Stick, Android TV, iPhone, iPad, MAG box, Windows or Mac. Plain step-by-step instructions.",
    h1: "Set up IPTV UK on the devices you already own",
    intro: "Every device follows the same pattern: install a player app, type in the login details we e-mail you, and the channel list appears. Pick your device below. If you get stuck, message us on WhatsApp and we will talk you through it.",
    eyebrow: "Setup guide", crumb: "Setup guide", stepWord: "Step", note: "Tip",
    ctaTitle: "Stuck on a step?", ctaText: "Send us a photo of the screen on WhatsApp and we will tell you what to press next.", help: "Get setup help on WhatsApp", helpMsg: "Hi! I need help setting up IPTV UK on my device.", trial: "Request a free trial",
  },
};

export const GUIDE: Record<Lang, GuideSection[]> = {
  en: [
    { id: "fire-tv", title: "Amazon Fire TV Stick", steps: ["From the Fire TV home screen, search for the Downloader app and install it.", "Open Settings, then My Fire TV, then Developer options, and allow Downloader to install unknown apps.", "Open Downloader and type the app address or code we send with your login details.", "Install the player app, open it and enter your username, password and server address.", "Go back to Developer options and switch the unknown-apps permission off again."], note: "The Fire TV Stick is the most popular choice in UK homes: it plugs into any HDMI port, so even an older TV becomes a smart TV." },
    { id: "smart-tv", title: "Samsung, LG and Android TV smart TVs", steps: ["Open the app store on your TV (Samsung Smart Hub, LG Content Store or Google Play on Android TV).", "Search for the IPTV player app we recommend and install it.", "Open the app and choose the option to log in with provider details.", "Type in the username, password and server address from our e-mail.", "Wait for the channel list to load, then choose a channel."] },
    { id: "android", title: "Android phone or tablet", steps: ["Open Google Play and search for the recommended IPTV player app.", "Install and open it.", "Choose to log in with provider details.", "Enter your username, password and server address.", "Open the channel list and start watching, at home on Wi-Fi or on mobile data."] },
    { id: "ios", title: "iPhone, iPad and Apple TV", steps: ["Open the App Store and search for the recommended IPTV player app.", "Install and open it.", "Add a new user or playlist using your login details.", "Wait for the list to load.", "Tap a channel to start. On an iPhone you can also mirror to a TV with AirPlay."] },
    { id: "mag", title: "MAG box", steps: ["Open Settings and press SETUP/SET on the remote.", "Choose System Settings, then Servers.", "Choose Servers again, then Portals.", "Type the portal name into “Portal 1 Name” and our address into “Portal 1 URL”.", "Press OK to save, then EXIT.", "Restart the box and confirm with OK."], note: "Send us the MAC address printed on the sticker underneath the box when you order, so we can activate it remotely." },
    { id: "computer", title: "Windows PC and Mac", steps: ["Download the IPTV player we recommend from its official website.", "Install and open it.", "Add a new user with your login details.", "Wait for the list to load and choose a channel. A laptop connected to the TV by HDMI works too."] },
  ],
};
