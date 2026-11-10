"use client";

import { useState } from "react";
import {
  Terminal,
  Bot,
  Zap,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Flame,
  Camera,
  Gamepad2,
  RefreshCw,
  Clock,
  ArrowRight,
  Code2,
  Sliders,
  Bell,
  Cpu,
  Layers,
  ChevronRight
} from "lucide-react";

type ScriptKey = "all" | "tiktok" | "snapchat" | "hoyolab";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ScriptKey>("all");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedApiApp, setSelectedApiApp] = useState<string>("tiktok-streak");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  const AGENT_PROMPTS = {
    all: `Please autonomously install and configure all 3 automation tools created by Samuel Onasis on this machine:
1. TikTok Streak: curl -fsSL https://script.wsnsam.my.id/install/tiktok | bash
2. Snapchat Streak: curl -fsSL https://script.wsnsam.my.id/install/snapchat | bash
3. HoYoLAB Check-in: curl -fsSL https://script.wsnsam.my.id/install/hoyolab | bash

After installing, verify the shared virtual environment at ~/.automation-hub/venv, then run the commands with --help to confirm they are ready. Finally, guide me through connecting my accounts.`,

    tiktok: `Please install and configure 'tiktok-streak' on my machine:
1. Run: curl -fsSL https://script.wsnsam.my.id/install/tiktok | bash
2. Verify executable is in PATH: which tiktok-streak
3. Run: tiktok-streak --help
4. Guide me to launch 'tiktok-streak --login' to connect my TikTok web session and set up my daily streak recipient checklist.`,

    snapchat: `Please install and configure 'snapchat-streak' on my machine:
1. Run: curl -fsSL https://script.wsnsam.my.id/install/snapchat | bash
2. Verify executable is in PATH: which snapchat-streak
3. Run: snapchat-streak --help
4. Guide me to launch 'snapchat-streak --login' so I can log in to web.snapchat.com and select my daily photo snap streak recipients.`,

    hoyolab: `Please install and configure 'hoyolab-checkin' on my machine:
1. Run: curl -fsSL https://script.wsnsam.my.id/install/hoyolab | bash
2. Verify executable is in PATH: which hoyolab-checkin
3. Run: hoyolab-checkin --dry-run to check status
4. If no cookie is detected, prompt me to auto-import from Zen/Firefox or run 'hoyolab-checkin --login'.`
  };

  const API_RESPONSES: Record<string, object> = {
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
        "Konsolidasi runtime shared virtual environment ke ~/.automation-hub/venv (~200MB)"
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
        "Pengecekan sesi instan via SQLite Cookies lokal"
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
        "Dukungan multi-game 6 game HoYoverse: Genshin, Star Rail, ZZZ, Honkai 3rd, Themis, HoYoLAB"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-200 antialiased selection:bg-rose-500/20 selection:text-rose-300">
      {/* Top Subtle Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] bg-gradient-to-b from-rose-500/10 via-amber-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070709]/80 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-amber-500 p-[1px] shadow-lg shadow-rose-500/20">
              <div className="w-full h-full bg-[#0d0d12] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-rose-400" />
              </div>
            </div>
            <div>
              <span className="font-mono font-semibold text-sm tracking-tight text-white">
                script.wsnsam.my.id
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-400 border border-white/[0.08]">
                Script Showcase & Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Daemon Daemons Active</span>
            </div>
            <a
              href="https://wsnsam.my.id"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/sammmms"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.1] transition-all"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-indigo-500/10 border border-white/[0.1] text-xs font-mono text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Autonomous Daily Automations • Engineered with Pride</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Zero-touch CLI daemons for streaks &amp; check-ins.
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            Production-grade, cross-platform CLI companions featuring full TUI dashboards,
            macOS LaunchAgent wake-up catch-up, Playwright stealth browser engines, and
            one-touch agent dispatch.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs">
            <a
              href="#agent-section"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-medium shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02]"
            >
              <Bot className="w-4 h-4" />
              <span>Let Agent Do It (1-Click Prompt)</span>
            </a>
            <a
              href="#scripts-section"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-neutral-200 border border-white/[0.1] transition-all"
            >
              <Terminal className="w-4 h-4 text-neutral-400" />
              <span>Browse All 3 Scripts</span>
            </a>
            <a
              href="#api-section"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 border border-white/[0.06] transition-all"
            >
              <RefreshCw className="w-4 h-4 text-neutral-400" />
              <span>Update API Explorer</span>
            </a>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8">
            <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.06] text-left">
              <div className="text-xl font-bold text-white font-mono">3 Tools</div>
              <div className="text-xs text-neutral-400 font-sans mt-0.5">TikTok, Snapchat, HoYoLAB</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.06] text-left">
              <div className="text-xl font-bold text-emerald-400 font-mono">100% Zero-Touch</div>
              <div className="text-xs text-neutral-400 font-sans mt-0.5">Wake-up lid catch-up</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.06] text-left">
              <div className="text-xl font-bold text-amber-400 font-mono">Shared venv</div>
              <div className="text-xs text-neutral-400 font-sans mt-0.5">~200MB shared runtime</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0d0d12] border border-white/[0.06] text-left">
              <div className="text-xl font-bold text-indigo-400 font-mono">Instant Auth</div>
              <div className="text-xs text-neutral-400 font-sans mt-0.5">&lt;0.1s SQLite extraction</div>
            </div>
          </div>
        </div>

        {/* Section 1: Let Agent Do It (Universal AI Dispatch) */}
        <section id="agent-section" className="mt-24 scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#12121a] to-[#0a0a0f] border border-rose-500/30 shadow-2xl shadow-rose-950/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-mono font-medium mb-1">
                  <Bot className="w-4 h-4" />
                  <span>AUTONOMOUS AGENT DISPATCH</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  &ldquo;Let Agent Do It&rdquo; Command Center
                </h2>
                <p className="text-sm text-neutral-400 font-sans mt-1">
                  Copy and paste this prompt into <strong>Claude Code</strong>, <strong>Cursor Agent</strong>, <strong>Antigravity</strong>, or <strong>Windsurf</strong> to have your AI set everything up automatically.
                </p>
              </div>

              {/* Scope Selector Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/50 border border-white/[0.08] font-mono text-xs overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "all"
                      ? "bg-rose-500 text-white font-medium shadow-md shadow-rose-500/20"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  All 3 Scripts
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("tiktok")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "tiktok"
                      ? "bg-rose-500 text-white font-medium shadow-md shadow-rose-500/20"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  TikTok
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("snapchat")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "snapchat"
                      ? "bg-rose-500 text-white font-medium shadow-md shadow-rose-500/20"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Snapchat
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("hoyolab")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "hoyolab"
                      ? "bg-rose-500 text-white font-medium shadow-md shadow-rose-500/20"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  HoYoLAB
                </button>
              </div>
            </div>

            {/* Prompt Box */}
            <div className="mt-6 relative">
              <div className="flex items-center justify-between px-4 py-2.5 rounded-t-xl bg-[#09090d] border border-white/[0.08] border-b-0 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-neutral-400">agent-instruction-prompt.md</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(AGENT_PROMPTS[activeTab], `prompt-${activeTab}`)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 transition-all font-mono"
                >
                  {copiedKey === `prompt-${activeTab}` ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Tersalin ke Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 sm:p-5 rounded-b-xl bg-[#09090d] border border-white/[0.08] text-xs sm:text-sm font-mono text-neutral-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {AGENT_PROMPTS[activeTab]}
              </pre>
            </div>

            {/* Compatible Agent Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="text-neutral-400">Ready to run on:</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300">Claude Code</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300">Cursor Agent</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300">Google Antigravity</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300">Windsurf</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300">Terminal Shell</span>
            </div>
          </div>
        </section>

        {/* Section 2: Script Showcase */}
        <section id="scripts-section" className="mt-28 scroll-mt-24 space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono font-medium mb-1">
              <Layers className="w-4 h-4" />
              <span>THE THREE FLAGSHIP AUTOMATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Curated Scripts Built for Real-World Reliability
            </h2>
            <p className="text-neutral-400 font-sans text-sm sm:text-base mt-1">
              Each script solves a specific daily obligation with zero maintenance required after setup.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: TikTok Streak */}
            <div className="rounded-2xl bg-[#0d0d14] border border-white/[0.08] hover:border-cyan-500/40 transition-all flex flex-col justify-between p-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Flame className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    v1.3.0
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    TikTok Streak
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    tiktok-streak • Questionary TUI Hub
                  </p>
                </div>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Daily automated streak preservation on TikTok DM. Features full interactive terminal menus, multi-select contact checklists, custom grouping, variable-based message pools, and Telegram/Discord alerts.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Select-All &amp; Blacklist Exclusions</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LaunchAgent wake-up catch-up</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Instant SQLite cookie inspection</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>One-line installer:</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("curl -fsSL https://script.wsnsam.my.id/install/tiktok | bash", "tiktok-cmd")}
                    className="text-cyan-400 hover:text-cyan-300 font-mono"
                  >
                    {copiedKey === "tiktok-cmd" ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-[11px] font-mono text-neutral-300 truncate">
                  curl -fsSL https://script.wsnsam.my.id/install/tiktok | bash
                </div>
                <a
                  href="https://github.com/sammmms/tiktok-streak"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-white border border-white/[0.08] transition-all"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Snapchat Streak */}
            <div className="rounded-2xl bg-[#0d0d14] border border-white/[0.08] hover:border-amber-500/40 transition-all flex flex-col justify-between p-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Camera className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    v1.0.0
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    Snapchat Streak
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    snapchat-streak • Web.Snapchat Engine
                  </p>
                </div>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Real Photo Snap automation for Snapchat. Since text does not preserve Snapchat streaks, this tool utilizes Playwright Chromium with virtual camera injection to capture and send genuine snaps automatically.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Real Photo Snap delivery (anti-fail)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Automated fake media stream injection</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Progress bar loading &amp; login alerts</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>One-line installer:</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("curl -fsSL https://script.wsnsam.my.id/install/snapchat | bash", "snap-cmd")}
                    className="text-amber-400 hover:text-amber-300 font-mono"
                  >
                    {copiedKey === "snap-cmd" ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-[11px] font-mono text-neutral-300 truncate">
                  curl -fsSL https://script.wsnsam.my.id/install/snapchat | bash
                </div>
                <a
                  href="https://github.com/sammmms/snapchat-streak"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-white border border-white/[0.08] transition-all"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: HoYoLAB Check-in */}
            <div className="rounded-2xl bg-[#0d0d14] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between p-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Gamepad2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    v1.2.0
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    HoYoLAB Check-In
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    hoyolab-checkin • All 6 Games Hub
                  </p>
                </div>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Multi-game automated daily claim hub for Genshin Impact, Honkai: Star Rail, Zenless Zone Zero, Honkai 3rd, Tears of Themis, and HoYoLAB. Instant browser token auto-import in &lt;0.1s from Zen or Firefox.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>6 HoYoverse games supported</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Instant SQLite browser auto-import</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Animated progress bar &amp; clean SIGINT</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>One-line installer:</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("curl -fsSL https://script.wsnsam.my.id/install/hoyolab | bash", "hoyo-cmd")}
                    className="text-indigo-400 hover:text-indigo-300 font-mono"
                  >
                    {copiedKey === "hoyo-cmd" ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-[11px] font-mono text-neutral-300 truncate">
                  curl -fsSL https://script.wsnsam.my.id/install/hoyolab | bash
                </div>
                <a
                  href="https://github.com/sammmms/hoyolab-checkin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-white border border-white/[0.08] transition-all"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Update API Explorer */}
        <section id="api-section" className="mt-28 scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0b10] border border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono font-medium mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>VERSION CHECKING &amp; UPDATE API</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Live Version Endpoint
                </h2>
                <p className="text-sm text-neutral-400 font-sans mt-0.5">
                  All scripts query this centralized endpoint (<code className="text-neutral-300">script.wsnsam.my.id/api/updates</code>) to verify versions and download in-place updates.
                </p>
              </div>

              {/* Interactive App Selector */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedApiApp}
                  onChange={(e) => setSelectedApiApp(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-black border border-white/[0.1] text-xs font-mono text-neutral-200 focus:outline-none focus:border-rose-500 cursor-pointer"
                >
                  <option value="tiktok-streak">tiktok-streak (v1.3.0)</option>
                  <option value="snapchat-streak">snapchat-streak (v1.0.0)</option>
                  <option value="hoyolab-checkin">hoyolab-checkin (v1.2.0)</option>
                </select>
                <a
                  href={`/api/updates?app=${selectedApiApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-neutral-300 border border-white/[0.08] transition-all"
                  title="Open Raw JSON Endpoint"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive API Response Viewer */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-neutral-400 px-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    GET 200 OK
                  </span>
                  <span>/api/updates?app={selectedApiApp}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(`https://script.wsnsam.my.id/api/updates?app=${selectedApiApp}`, "api-url")}
                  className="text-neutral-400 hover:text-white"
                >
                  {copiedKey === "api-url" ? "✓ URL Copied" : "Copy URL"}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-black/80 border border-white/[0.08] overflow-x-auto text-neutral-300">
                <pre>{JSON.stringify(API_RESPONSES[selectedApiApp], null, 2)}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-28 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            Crafted with precision by{" "}
            <a href="https://wsnsam.my.id" className="text-white hover:underline">
              Samuel Onasis
            </a>{" "}
            • Medan / Siantar, Indonesia
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/sammmms" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://wsnsam.my.id" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#agent-section" className="hover:text-white transition-colors">
              Agent Dispatch
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
