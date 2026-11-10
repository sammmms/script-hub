import { NextResponse } from "next/server";

interface UpdateInfo {
  app: string;
  version: string;
  release_date: string;
  download_url: string;
  github_repo: string;
  changelog: string[];
}

const APPS_METADATA: Record<string, UpdateInfo> = {
  "tiktok-streak": {
    app: "tiktok-streak",
    version: "1.3.0",
    release_date: "2026-11-10",
    download_url: "https://raw.githubusercontent.com/sammmms/tiktok-streak/main/tiktok-streak.py",
    github_repo: "https://github.com/sammmms/tiktok-streak",
    changelog: [
      "Animasi progress bar & spinner saat loading koneksi internet atau pengecekan update",
      "Pemeriksaan sesi login instan via SQLite cookies lokal tanpa blocking startup",
      "Highlight visual mencolok dan penataan menu prioritas saat belum login",
      "Pencegahan error traceback saat force quit dengan handling Ctrl+C (SIGINT)",
      "Konsolidasi runtime shared virtual environment ke ~/.automation-hub/venv (~200MB)",
      "LaunchAgent scheduler terintegrasi dengan penanganan sleep wake-up catch-up",
      "Sistem retensi log aktivitas 3 hari otomatis"
    ]
  },
  "snapchat-streak": {
    app: "snapchat-streak",
    version: "1.0.0",
    release_date: "2026-11-10",
    download_url: "https://raw.githubusercontent.com/sammmms/snapchat-streak/main/snapchat-streak.py",
    github_repo: "https://github.com/sammmms/snapchat-streak",
    changelog: [
      "Rilis perdana Snapchat Streak Auto-Saver Hub",
      "Otomatisasi pengiriman Photo Snap via web.snapchat.com Playwright engine",
      "Simulasi kamera virtual (fake media stream) untuk kompatibilitas kamera browser",
      "Deteksi teman dan pengiriman streak harian otomatis",
      "Menu interaktif TUI dengan Questionary",
      "Pengecekan sesi instan via SQLite Cookies lokal",
      "macOS LaunchAgent scheduler jam 08:30 dengan wake-up catch-up",
      "Shared python runtime di ~/.automation-hub/venv"
    ]
  },
  "hoyolab-checkin": {
    app: "hoyolab-checkin",
    version: "1.2.0",
    release_date: "2026-11-10",
    download_url: "https://raw.githubusercontent.com/sammmms/hoyolab-checkin/main/checkin.py",
    github_repo: "https://github.com/sammmms/hoyolab-checkin",
    changelog: [
      "Rebranding resmi & standardisasi perintah CLI: hoyolab-checkin",
      "Indikator progress bar animasi saat pengecekan hadiah dan verifikasi sesi online",
      "Highlight kotak peringatan mencolok saat akun belum login / token kadaluarsa",
      "Penanganan graceful exit saat penekanan Ctrl+C (SIGINT)",
      "Auto-impor sesi instan (<0.1s) dari profil browser SQLite Zen / Floorp / Firefox",
      "Dukungan multi-game 6 game HoYoverse: Genshin, Star Rail, ZZZ, Honkai 3rd, Themis, HoYoLAB",
      "Dukungan penjadwalan macOS launchd (08:00 + lid-wake catch-up)"
    ]
  }
};

// Aliases
APPS_METADATA["hoyolab"] = APPS_METADATA["hoyolab-checkin"];
APPS_METADATA["genshin-checkin"] = APPS_METADATA["hoyolab-checkin"];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const app = searchParams.get("app");

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120"
  };

  if (!app) {
    return NextResponse.json(
      {
        status: "ok",
        service: "Sam's Automation Scripts Update Server",
        domain: "script.wsnsam.my.id",
        available_apps: Object.keys(APPS_METADATA).filter(k => !["hoyolab", "genshin-checkin"].includes(k)),
        usage: "GET /api/updates?app=<app-name>"
      },
      { status: 200, headers }
    );
  }

  const normalized = app.toLowerCase().trim();
  const data = APPS_METADATA[normalized];

  if (!data) {
    return NextResponse.json(
      {
        error: "App not found",
        available_apps: ["tiktok-streak", "snapchat-streak", "hoyolab-checkin"]
      },
      { status: 404, headers }
    );
  }

  return NextResponse.json(data, { status: 200, headers });
}
