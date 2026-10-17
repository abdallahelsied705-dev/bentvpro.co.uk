import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a1633" }}><svg width="132" height="132" viewBox="0 0 48 48"><rect x="2" y="2" width="44" height="44" rx="13" fill="#ffffff" /><path d="M2 24 H46 V33 A13 13 0 0 1 33 46 H15 A13 13 0 0 1 2 33 Z" fill="#c8102e" /><rect x="11" y="13" width="26" height="17" rx="3.5" fill="#ffffff" stroke="#0a1633" strokeWidth="3" /><path d="M21 17.5 L28.5 21.5 L21 25.5 Z" fill="#c8102e" /><path d="M18 36 H30" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" /></svg></div>),
    size,
  );
}
