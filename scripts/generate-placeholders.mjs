import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd(), "public", "images");
const avatarsDir = path.join(root, "avatars");
const font = "Arial, Helvetica, sans-serif";

function svg(width, height, body) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`,
  );
}

async function png(file, width, height, body) {
  await sharp(svg(width, height, body)).png().toFile(path.join(root, file));
}

function text(x, y, value, size, fill, weight = "400") {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="${font}" font-size="${size}" font-weight="${weight}">${value}</text>`;
}

function qr(x, y, size, cells = 11) {
  const cell = size / cells;
  let marks = `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="12" fill="#FFFFFF"/>`;
  for (let row = 0; row < cells; row += 1) {
    for (let col = 0; col < cells; col += 1) {
      const finder =
        (row < 3 && col < 3) ||
        (row < 3 && col > cells - 4) ||
        (row > cells - 4 && col < 3);
      const on = finder || (row * 5 + col * 3) % 4 === 0;
      if (!on) continue;
      marks += `<rect x="${x + col * cell + 1.2}" y="${y + row * cell + 1.2}" width="${cell - 2.4}" height="${cell - 2.4}" rx="1" fill="#0F1033"/>`;
    }
  }
  return marks;
}

function status() {
  return `
    ${text(28, 42, "9:41", 15, "#0F1033", "700")}
    <rect x="300" y="30" width="22" height="11" rx="2" fill="none" stroke="#0F1033" stroke-width="1.5"/>
    <rect x="302.5" y="32.5" width="13" height="6" rx="1" fill="#0F1033"/>
    <path d="M334 36h10M338 32v8" stroke="#0F1033" stroke-width="1.5" stroke-linecap="round"/>
  `;
}

function phone(body) {
  return `
    <rect width="390" height="844" fill="#F6F6F8"/>
    ${status()}
    ${body}
    <rect x="145" y="816" width="100" height="5" rx="2.5" fill="#0F1033" opacity="0.2"/>
  `;
}

function card(x, y, w, h, fill = "#FFFFFF") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${fill}"/>`;
}

const screens = {
  "hero-phone.png": phone(`
    ${text(24, 92, "Good afternoon", 26, "#0F1033", "700")}
    ${text(24, 118, "Seaside Loft is ready", 14, "#5C4410", "600")}
    ${card(20, 146, 350, 250)}
    <rect x="36" y="166" width="86" height="28" rx="14" fill="#FBF3E2"/>
    ${text(50, 185, "ACTIVE", 11, "#5C4410", "700")}
    ${text(36, 230, "Access code", 13, "#5C4410", "600")}
    ${text(36, 268, "482 193", 32, "#0F1033", "700")}
    ${qr(250, 190, 96)}
    ${text(36, 310, "Single-use · expires 6:00 PM", 12, "#0F1033", "500")}
    ${card(20, 414, 350, 78)}
    <circle cx="56" cy="453" r="16" fill="#C9961B"/>
    ${text(50, 458, "✓", 14, "#0F1033", "700")}
    ${text(84, 446, "Key collected", 15, "#0F1033", "700")}
    ${text(84, 468, "Guest checked in · 2:14 PM", 12, "#5C4410")}
    ${card(20, 506, 350, 78)}
    <circle cx="56" cy="545" r="16" fill="#FBF3E2"/>
    ${text(84, 538, "Code sent", 15, "#0F1033", "700")}
    ${text(84, 560, "SMS delivered to the guest", 12, "#5C4410")}
  `),
  "app-host-1.png": phone(`
    ${text(24, 92, "Properties", 28, "#0F1033", "700")}
    ${text(24, 118, "3 lockers linked", 14, "#5C4410", "600")}
    ${card(20, 146, 350, 132)}
    <rect x="40" y="168" width="46" height="46" rx="14" fill="#C9961B"/>
    ${text(40, 240, "Seaside Loft", 18, "#0F1033", "700")}
    ${text(200, 198, "Code live", 13, "#5C4410", "700")}
    ${text(40, 262, "Locker A · QR", 13, "#5C4410")}
    ${card(20, 292, 350, 132)}
    <rect x="40" y="314" width="46" height="46" rx="14" fill="#FBF3E2"/>
    ${text(40, 386, "Cedar Studio", 18, "#0F1033", "700")}
    ${text(200, 344, "Returned", 13, "#5C4410", "700")}
    ${text(40, 408, "Locker B · NFC", 13, "#5C4410")}
    ${card(20, 438, 350, 132)}
    <rect x="40" y="460" width="46" height="46" rx="14" fill="#0F1033"/>
    ${text(40, 532, "Harbor Flat", 18, "#0F1033", "700")}
    ${text(200, 490, "Idle", 13, "#5C4410", "700")}
    ${text(40, 554, "Locker C · RFID", 13, "#5C4410")}
  `),
  "app-host-2.png": phone(`
    ${text(24, 92, "New code", 28, "#0F1033", "700")}
    ${text(24, 118, "Seaside Loft", 14, "#5C4410", "600")}
    ${card(20, 150, 168, 64, "#C9961B")}
    ${text(40, 188, "Single-use", 16, "#0F1033", "700")}
    ${card(196, 150, 174, 64)}
    ${text(220, 188, "Reusable", 16, "#0F1033", "700")}
    ${card(20, 232, 350, 210)}
    ${text(40, 268, "Guest pass", 13, "#5C4410", "700")}
    ${qr(127, 286, 140)}
    ${card(20, 460, 350, 72)}
    ${text(40, 492, "Share by SMS", 16, "#0F1033", "700")}
    ${text(250, 492, "Send", 16, "#5C4410", "700")}
    ${card(20, 548, 350, 72)}
    ${text(40, 580, "Share by email", 16, "#0F1033", "700")}
    ${text(250, 580, "Send", 16, "#5C4410", "700")}
  `),
  "app-host-3.png": phone(`
    ${text(24, 92, "Activity", 28, "#0F1033", "700")}
    ${text(24, 118, "Seaside Loft · today", 14, "#5C4410", "600")}
    ${["Key ready", "Key collected", "Failed attempt", "Key returned"]
      .map((label, index) => {
        const y = 150 + index * 110;
        const times = ["2:02 PM", "2:14 PM", "8:41 PM", "11:06 AM"];
        return `
          ${card(20, y, 350, 96)}
          <circle cx="58" cy="${y + 48}" r="16" fill="${index === 2 ? "#5C4410" : "#C9961B"}"/>
          ${text(88, y + 42, label, 16, "#0F1033", "700")}
          ${text(88, y + 66, times[index], 13, "#5C4410")}
        `;
      })
      .join("")}
  `),
  "app-guest-1.png": phone(`
    ${text(24, 92, "Your check-in", 28, "#0F1033", "700")}
    ${text(24, 118, "Seaside Loft", 14, "#5C4410", "600")}
    ${card(20, 150, 350, 360)}
    ${text(115, 190, "Scan at the locker", 16, "#0F1033", "700")}
    ${qr(95, 214, 200)}
    ${text(118, 450, "or enter 482 193", 16, "#5C4410", "700")}
    ${card(20, 530, 350, 90, "#C9961B")}
    ${text(40, 568, "Open locker", 18, "#0F1033", "700")}
    ${text(40, 592, "Code is active until 6:00 PM", 13, "#5C4410")}
  `),
  "app-guest-2.png": phone(`
    ${text(24, 92, "Locker details", 28, "#0F1033", "700")}
    ${card(20, 120, 350, 180, "#0F1033")}
    <circle cx="190" cy="200" r="18" fill="#C9961B"/>
    ${text(40, 270, "Pin drops on the lobby locker", 14, "#FBF3E2")}
    ${card(20, 320, 350, 92)}
    ${text(40, 356, "Seaside Loft", 18, "#0F1033", "700")}
    ${text(40, 382, "12 Harbor Lane, locker A", 14, "#5C4410")}
    ${card(20, 428, 350, 92)}
    ${text(40, 464, "Hardware", 18, "#0F1033", "700")}
    ${text(40, 490, "QR · RFID · NFC", 14, "#5C4410")}
    ${card(20, 536, 350, 92)}
    ${text(40, 572, "Status", 18, "#0F1033", "700")}
    ${text(40, 598, "Key is ready for collection", 14, "#5C4410")}
  `),
  "app-pricing.png": phone(`
    ${text(24, 92, "Duration packages", 24, "#0F1033", "700")}
    ${card(20, 130, 350, 140)}
    ${text(40, 170, "Pay As You Go", 18, "#0F1033", "700")}
    ${text(40, 206, "$15", 28, "#0F1033", "700")}
    ${text(110, 206, "/day", 16, "#5C4410", "600")}
    ${text(40, 236, "24/7 access · Digital key", 13, "#5C4410")}
    ${card(20, 286, 350, 140)}
    ${text(40, 326, "Monthly", 18, "#0F1033", "700")}
    ${text(40, 362, "$75", 28, "#0F1033", "700")}
    ${text(118, 362, "/week", 16, "#5C4410", "600")}
    ${text(40, 392, "24/7 access · Digital key", 13, "#5C4410")}
    ${card(20, 442, 350, 168, "#FBF3E2")}
    <rect x="40" y="462" width="108" height="24" rx="12" fill="#5C4410"/>
    ${text(52, 479, "BEST VALUE", 11, "#FBF3E2", "700")}
    ${text(40, 520, "Yearly", 18, "#0F1033", "700")}
    ${text(40, 556, "$150", 28, "#0F1033", "700")}
    ${text(130, 556, "/year", 16, "#5C4410", "600")}
    ${text(40, 586, "24/7 access · Digital key", 13, "#5C4410")}
  `),
};

const notifications = [
  ["notification-1.png", "Ready", "#C9961B", "K"],
  ["notification-2.png", "In", "#0F1033", "✓"],
  ["notification-3.png", "Back", "#FBF3E2", "↩"],
  ["notification-4.png", "Stop", "#5C4410", "!"],
];

function notification(label, fill, mark) {
  const ink = fill === "#FBF3E2" || fill === "#C9961B" ? "#0F1033" : "#FBF3E2";
  return `
    <rect width="256" height="256" rx="48" fill="${fill}"/>
    <circle cx="128" cy="108" r="46" fill="${ink}" opacity="0.12"/>
    ${text(128, 124, mark, 42, ink, "700").replace('x="128"', 'x="128" text-anchor="middle"')}
    ${text(128, 190, label, 22, ink, "700").replace('x="128"', 'x="128" text-anchor="middle"')}
  `;
}

function avatar(initial, fill) {
  const ink = fill === "#0F1033" || fill === "#5C4410" ? "#FBF3E2" : "#0F1033";
  return `
    <rect width="256" height="256" fill="${fill}"/>
    <circle cx="128" cy="108" r="46" fill="${ink}" opacity="0.18"/>
    ${text(128, 168, initial, 92, ink, "700").replace('x="128"', 'x="128" text-anchor="middle"')}
  `;
}

await mkdir(avatarsDir, { recursive: true });

for (const [file, body] of Object.entries(screens)) {
  await png(file, 390, 844, body);
}

for (const [file, label, fill, mark] of notifications) {
  await png(file, 256, 256, notification(label, fill, mark));
}

const avatarColors = ["#C9961B", "#0F1033", "#FBF3E2", "#5C4410", "#E2C06E"];
const initials = ["J", "S", "C", "N", "E"];
for (let index = 0; index < initials.length; index += 1) {
  await sharp(svg(256, 256, avatar(initials[index], avatarColors[index])))
    .jpeg({ quality: 90 })
    .toFile(path.join(avatarsDir, `${index + 1}.jpg`));
}

await png(
  "favicon.png",
  128,
  128,
  `
    <rect width="128" height="128" rx="28" fill="#C9961B"/>
    <rect x="36" y="30" width="42" height="68" rx="8" fill="#0F1033"/>
    <circle cx="57" cy="54" r="6" fill="#FBF3E2"/>
    <rect x="54" y="60" width="6" height="12" rx="2" fill="#FBF3E2"/>
    <path d="M84 42h22M96 42v12h12" stroke="#FBF3E2" stroke-width="4" stroke-linecap="round"/>
  `,
);

await png(
  "og-image.png",
  1200,
  630,
  `
    <rect width="1200" height="630" fill="#0F1033"/>
    <circle cx="1040" cy="90" r="180" fill="#C9961B" opacity="0.35"/>
    <rect x="72" y="72" width="72" height="72" rx="20" fill="#C9961B"/>
    ${text(92, 120, "K", 40, "#0F1033", "700")}
    ${text(164, 118, "KeyBank", 36, "#FFFFFF", "700")}
    ${text(72, 280, "CONTACTLESS  ·  SECURE  ·  REAL-TIME", 22, "#C9961B", "700")}
    ${text(72, 380, "Smart key handover", 64, "#FFFFFF", "700")}
    ${text(72, 460, "for modern hosts", 64, "#FFFFFF", "700")}
    ${text(72, 540, "QR locker codes for short-term rental check-in", 24, "#EDD9A8")}
  `,
);

const dashboard = `
  <rect width="1280" height="800" fill="#F6F6F8"/>
  <rect width="240" height="800" fill="#0F1033"/>
  ${text(32, 64, "KeyBank", 22, "#C9961B", "700")}
  ${["Hosts", "Guests", "Lockers", "Codes", "Billing", "Hardware"]
    .map((label, index) => text(32, 140 + index * 48, label, 16, index === 0 ? "#FBF3E2" : "#EDD9A8", "600"))
    .join("")}
  ${text(280, 64, "Admin overview", 28, "#0F1033", "700")}
  ${[
    ["128", "Hosts"],
    ["46", "Lockers"],
    ["19", "Live codes"],
    ["3", "Alerts"],
  ]
    .map(([value, label], index) => {
      const x = 280 + index * 230;
      return `${card(x, 100, 210, 110)}${text(x + 20, 150, value, 32, "#0F1033", "700")}${text(x + 20, 180, label, 14, "#5C4410", "600")}`;
    })
    .join("")}
  ${card(280, 240, 920, 500)}
  ${text(304, 284, "Recent key activity", 18, "#0F1033", "700")}
  ${["Seaside Loft", "Cedar Studio", "Harbor Flat", "Seaside Loft", "Cedar Studio"]
    .map((name, index) => {
      const y = 330 + index * 70;
      const states = ["Collected", "Returned", "Failed attempt", "Code sent", "Ready"];
      return `
        <rect x="304" y="${y}" width="872" height="56" rx="12" fill="${index % 2 ? "#FBF3E2" : "#F6F6F8"}"/>
        ${text(324, y + 34, name, 16, "#0F1033", "700")}
        ${text(620, y + 34, states[index], 15, "#5C4410", "600")}
        ${text(900, y + 34, "Today", 14, "#0F1033")}
      `;
    })
    .join("")}
`;

await png("app-admin-dashboard.png", 1280, 800, dashboard);

console.log("Placeholder images written to public/images");
