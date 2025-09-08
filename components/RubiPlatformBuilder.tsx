"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";

export type FeatureKey =
  | "auth" | "content" | "payments" | "messaging" | "dashboard" | "mobile"
  | "subscriptions" | "ppv" | "tips" | "live" | "ai" | "nft";

const featureData: Record<FeatureKey, { time: number; revenue: number; title: string; preview: string; }> = {
  auth:{time:2,revenue:5000,title:"🔐 Authentication System",preview:'<div class="feature-preview"><div class="feature-preview-title">🔐 Login Portal</div><div class="feature-preview-desc">Multi-tier access • Secure authentication</div></div>'},
  content:{time:3,revenue:8000,title:"📁 Content Management",preview:'<div class="feature-preview"><div class="feature-preview-title">📁 Content Library</div><div class="feature-preview-desc">127 photos • 43 videos • Scheduled posts</div></div>'},
  payments:{time:4,revenue:15000,title:"💳 Payment Processing",preview:'<div class="feature-preview"><div class="feature-preview-title">💳 Payment Hub</div><div class="feature-preview-desc">Stripe • Subscriptions • Instant payouts</div></div>'},
  messaging:{time:4,revenue:12000,title:"💬 Messaging System",preview:'<div class="feature-preview"><div class="feature-preview-title">💬 Message Center</div><div class="feature-preview-desc">Direct messages • Auto-replies • Media sharing</div></div>'},
  dashboard:{time:3,revenue:3000,title:"📊 Analytics Dashboard",preview:'<div class="feature-preview"><div class="feature-preview-title">📊 Analytics</div><div class="feature-preview-desc">$2,847 this month • 1,234 subscribers</div></div>'},
  mobile:{time:6,revenue:20000,title:"📱 Mobile Apps",preview:'<div class="feature-preview"><div class="feature-preview-title">📱 Mobile Apps</div><div class="feature-preview-desc">iOS & Android • Push notifications • Offline mode</div></div>'},
  subscriptions:{time:2,revenue:25000,title:"🎯 Tiered Subscriptions",preview:'<div class="feature-preview"><div class="feature-preview-title">🎯 Subscription Tiers</div><div class="feature-preview-desc">Free • Premium $15 • VIP $30</div></div>'},
  ppv:{time:3,revenue:18000,title:"👁️ Pay-Per-View Content",preview:'<div class="feature-preview"><div class="feature-preview-title">👁️ Exclusive Content</div><div class="feature-preview-desc">Pay-per-view • $5-$50 range • Premium photos</div></div>'},
  tips:{time:2,revenue:15000,title:"💸 Tips & Donations",preview:'<div class="feature-preview"><div class="feature-preview-title">💸 Tips & Gifts</div><div class="feature-preview-desc">$5, $10, $25, $50 • Custom amounts • Goals</div></div>'},
  live:{time:5,revenue:35000,title:"📹 Live Streaming",preview:'<div class="feature-preview"><div class="feature-preview-title">📹 Live Streaming</div><div class="feature-preview-desc">🔴 LIVE • 247 viewers • Private shows</div></div>'},
  ai:{time:4,revenue:22000,title:"🤖 AI Chatbot",preview:'<div class="feature-preview"><div class="feature-preview-title">🤖 RubiBot AI</div><div class="feature-preview-desc">24/7 responses • Personalized chats • Smart replies</div></div>'},
  nft:{time:5,revenue:50000,title:"🖼️ NFT Integration",preview:'<div class="feature-preview"><div class="feature-preview-title">🖼️ NFT Collection</div><div class="feature-preview-desc">Limited edition • 0.5 ETH • Exclusive art</div></div>'},
};

const coreFeatures: FeatureKey[] = ["auth","content","payments","messaging","dashboard","mobile"];
const monetizationFeatures: FeatureKey[] = ["subscriptions","ppv","tips","live","ai","nft"];

export default function RubiPlatformBuilder() {
  const [selected, setSelected] = useState<Set<FeatureKey>>(new Set());
  const [status, setStatus] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const STORAGE_KEY = "rubi-platform-selected";

  const summary = useMemo(() => {
    let weeks = 0, revenue = 0;
    selected.forEach(k => { weeks += featureData[k].time; revenue += featureData[k].revenue; });
    return { count: selected.size, weeks, revenue };
  }, [selected]);

  function toggle(k: FeatureKey) {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });
  }

  // persist selection
  useEffect(() => {
    try {
      const arr = Array.from(selected);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch {}
  }, [selected]);

  // load initial selection
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const arr = JSON.parse(raw) as FeatureKey[];
      const valid = arr.filter((k: string): k is FeatureKey => k in featureData);
      setSelected(new Set(valid));
      if (valid.length) setStatus(`Loaded ${valid.length} feature${valid.length>1?"s":""} from previous session`);
    } catch {}
  // run once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const previewHTML = useMemo(() => {
    if (selected.size === 0) {
      return `
        <div class="demo-default" style="text-align:center;padding:60px 20px;color:white">
          <div class="demo-avatar" style="width:80px;height:80px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 15px;font-size:32px;">💎</div>
          <div class="demo-title" style="font-size:20px;font-weight:700;margin-bottom:8px;">Rubi Rose</div>
          <div class="demo-subtitle" style="opacity:.8;font-size:14px;margin-bottom:20px;">Select features to see live preview</div>
          <div class="demo-placeholder" style="background:rgba(255,255,255,0.2);border-radius:6px;padding:12px;margin-bottom:10px;font-size:12px;">Choose features from the left</div>
          <div class="demo-placeholder" style="background:rgba(255,255,255,0.2);border-radius:6px;padding:12px;margin-bottom:10px;font-size:12px;">Watch the platform come to life</div>
        </div>`;
    }
    let html = `
      <div style="text-align:center;margin-bottom:20px;color:white">
        <div class="demo-avatar" style="width:60px;height:60px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:28px;">💎</div>
        <div class="demo-title" style="font-size:16px;font-weight:700;">Rubi Rose Platform</div>
        <div class="demo-subtitle" style="font-size:12px;opacity:.8;">Live Preview Mode</div>
      </div>`;
    (Array.from(selected) as FeatureKey[]).forEach(k => { html += featureData[k].preview; });
    return html;
  }, [selected]);

  function exportConfig() {
    if (selected.size === 0) return;
    const data = {
      platform: "Rubi Rose Creator Platform",
      selectedFeatures: Array.from(selected),
      summary: { totalFeatures: selected.size, developmentWeeks: summary.weeks, monthlyRevenue: summary.revenue },
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "rubi-rose-platform-config.json"; a.click();
    URL.revokeObjectURL(url);
  }

  function importConfig() {
    fileInputRef.current?.click();
  }

  async function handleImportChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      const text = await f.text();
      const json = JSON.parse(text);
      const arr = (json?.selectedFeatures ?? []) as string[];
      const valid = arr.filter((k): k is FeatureKey => k in featureData);
      setSelected(new Set(valid));
      setStatus(`Imported ${valid.length} feature${valid.length!==1?"s":""} from file`);
    } catch (err) {
      setStatus("Import failed: invalid JSON");
    } finally {
      e.target.value = ""; // reset so same file can be re-imported
    }
  }

  function resetSelection() {
    setSelected(new Set());
    setStatus("Selection reset");
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  function generateCode() {
    if (selected.size === 0) return;
    const arr = Array.from(selected) as FeatureKey[];
    const banner = `// Auto-generated scaffold for Rubi Platform\n// Generated: ${new Date().toISOString()}\n\n`;
    const union = (Object.keys(featureData) as FeatureKey[]).map(k=>`'${k}'`).join(" | ");
    const code = `${banner}` +
`export type FeatureKey = ${union};\n\n` +
`export const selectedFeatures: FeatureKey[] = ${JSON.stringify(arr, null, 2)} as FeatureKey[];\n\n` +
`export const summary = {\n  totalFeatures: ${arr.length},\n  developmentWeeks: ${summary.weeks},\n  monthlyRevenue: ${summary.revenue}\n};\n\n` +
`export function setupRubiPlatform() {\n  // TODO: wire modules here based on selectedFeatures\n  // Example: if (selectedFeatures.includes('auth')) initAuth();\n}\n`;
    const blob = new Blob([code], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "rubi-platform-scaffold.ts"; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/40 to-pink-200/50 relative">
      <header className="bg-pink-500/10 backdrop-blur-xl border border-pink-200/30 p-5 shadow-lg mb-8">
        <h1 className="text-2xl text-pink-500 font-semibold drop-shadow">Creator Platform Builder</h1>
        <p className="text-sm text-pink-300">Design Rubi Rose&apos;s Custom Creator Platform</p>
      </header>

      <main className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
        <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Core Platform Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {coreFeatures.map((k) => (
              <FeatureCard
                key={k}
                featureKey={k}
                selected={selected.has(k)}
                toggle={toggle}
                title={featureData[k].title}
              />
            ))}
          </div>

          <h2 className="text-lg font-semibold mt-8 mb-4">Monetization Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {monetizationFeatures.map((k) => (
              <FeatureCard
                key={k}
                featureKey={k}
                selected={selected.has(k)}
                toggle={toggle}
                title={featureData[k].title}
              />
            ))}
          </div>
        </section>

        <aside className="rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-xl h-fit sticky top-5 shadow-md">
          <h3 className="text-base font-semibold text-pink-600 mb-4">Live Preview</h3>
          <div className="rounded-lg p-5 h-96 overflow-y-auto mb-4" style={{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
            <div className="prose-sm text-white" dangerouslySetInnerHTML={{ __html: previewHTML }} />
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold mb-3">Project Summary</h4>
            <div className="flex justify-between text-sm mb-1"><span className="text-slate-600">Features Selected</span><span className="font-semibold">{summary.count}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-slate-600">Development Time</span><span className="font-semibold">{summary.weeks} weeks</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-600">Monthly Revenue</span><span className="font-semibold text-emerald-600">${summary.revenue.toLocaleString()}</span></div>
            <div className="flex flex-wrap gap-2 mt-4 items-center">
              <button onClick={exportConfig} className="px-3 py-2 rounded-md border bg-pink-200/50 hover:bg-pink-200/70 text-pink-700 text-sm">Export Config</button>
              <button onClick={importConfig} className="px-3 py-2 rounded-md border bg-pink-200/40 hover:bg-pink-200/60 text-pink-700 text-sm">Import Config</button>
              <input
                ref={fileInputRef}
                data-testid="import-input"
                type="file"
                accept="application/json,.json"
                onChange={handleImportChange}
                style={{ display: 'none' }}
              />
              <button onClick={generateCode} disabled={summary.count===0} className="px-3 py-2 rounded-md border bg-pink-200/30 text-pink-700 text-sm disabled:opacity-50">Generate Code</button>
              <button onClick={resetSelection} className="px-3 py-2 rounded-md border bg-slate-200/60 hover:bg-slate-200/80 text-slate-700 text-sm">Reset</button>
              {status && (<span className="text-xs text-slate-500 ml-auto" aria-live="polite">{status}</span>)}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
