import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (<div style={{ width: "100%", height: "100%", display: "flex" }}><svg width="64" height="64" viewBox="0 0 48 48"><defs><linearGradient id="g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e11d48" /><stop offset=".55" stopColor="#c026d3" /><stop offset="1" stopColor="#7c3aed" /></linearGradient></defs><rect x="2" y="2" width="44" height="44" rx="14" fill="url(#g)" /><rect x="10" y="13" width="28" height="19" rx="4.5" fill="none" stroke="#fff" strokeWidth="3" /><path d="M21 18 L29 22.5 L21 27 Z" fill="#fff" /><path d="M18 37 H30" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><circle cx="36" cy="12" r="3.2" fill="#22d3ee" /></svg></div>),
    size,
  );
}
