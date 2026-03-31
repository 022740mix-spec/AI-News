import { useMemo } from "react";
import { ACCENT_PRESETS } from "../constants.js";

function SeasonalScene({ accent }) {
  const preset = ACCENT_PRESETS.find(p => p.id === accent);
  const season = preset?.season;
  if (!season) return null;
  // summer / autumn / winter のシーンは季節になったら公開予定
  const scenes = { spring: SpringScene };
  const Scene = scenes[season];
  if (!Scene) return null;
  return (
    <div className="seasonal-scene-wrap" aria-hidden="true">
      <Scene side="left" />
      <Scene side="right" />
    </div>
  );
}

function SpringScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* 枝 */}
      <path d="M-10 400 Q30 300, 20 220 Q10 160, 40 100 Q55 60, 45 20" stroke="#8B6F47" strokeWidth="3" fill="none" opacity="0.35" />
      <path d="M40 100 Q70 80, 80 50" stroke="#8B6F47" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M20 220 Q55 200, 65 170" stroke="#8B6F47" strokeWidth="2" fill="none" opacity="0.25" />
      {/* 花 */}
      {[[45,18],[80,48],[65,168],[42,98],[28,218],[55,140],[70,85],[35,280],[50,60],[38,180]].map(([cx,cy],i) => {
        const fills = ["#fff5f7","#fce7f3","#fecdd3","#ffffff","#fbcfe8"];
        return <circle key={i} cx={cx} cy={cy} r={5+i%3*2} fill={fills[i%5]} opacity={0.3+i%3*0.08} />;
      })}
    </svg>
  );
}

function SummerScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* 竹 */}
      <line x1="30" y1="400" x2="25" y2="10" stroke="#16a34a" strokeWidth="3" opacity="0.2" />
      <line x1="60" y1="400" x2="55" y2="50" stroke="#22c55e" strokeWidth="2.5" opacity="0.15" />
      {/* 節 */}
      {[80,160,240,320].map((y,i) => (
        <line key={i} x1="28" y1={y} x2="32" y2={y} stroke="#16a34a" strokeWidth="4" opacity="0.2" strokeLinecap="round" />
      ))}
      {/* 葉 */}
      {[[25,60],[55,90],[20,150],[50,180],[28,250],[58,120],[22,320]].map(([x,y],i) => (
        <ellipse key={i} cx={x+15} cy={y} rx="18" ry="4" fill="#22c55e" opacity={0.15+i%2*0.05} transform={`rotate(${-20+i*8} ${x+15} ${y})`} />
      ))}
    </svg>
  );
}

function AutumnScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  const colors = ["#dc2626","#ea580c","#d97706","#ca8a04","#b45309"];
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* 枝 */}
      <path d="M-5 400 Q25 320, 30 250 Q35 180, 50 120 Q60 80, 55 30" stroke="#78716c" strokeWidth="2.5" fill="none" opacity="0.25" />
      <path d="M50 120 Q75 100, 85 70" stroke="#78716c" strokeWidth="1.5" fill="none" opacity="0.2" />
      {/* 紅葉の葉（簡略星形） */}
      {[[55,28],[85,68],[52,118],[32,248],[40,180],[60,300],[25,350]].map(([x,y],i) => (
        <polygon key={i} points={`${x},${y-6} ${x+3},${y-2} ${x+6},${y-4} ${x+4},${y+1} ${x+5},${y+5} ${x},${y+3} ${x-5},${y+5} ${x-4},${y+1} ${x-6},${y-4} ${x-3},${y-2}`}
          fill={colors[i%5]} opacity={0.25+i%3*0.08} />
      ))}
    </svg>
  );
}

function WinterScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* モミの木シルエット */}
      <polygon points="40,30 15,150 25,150 5,250 20,250 0,380 80,380 60,250 75,250 55,150 65,150" fill="currentColor" opacity="0.06" />
      {/* 星 */}
      <polygon points="40,22 42,28 48,28 43,32 45,38 40,34 35,38 37,32 32,28 38,28" fill="#fbbf24" opacity="0.15" />
      {/* オーナメント */}
      {[[30,120],[55,140],[20,200],[50,220],[35,280],[45,170]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill={["#ef4444","#3b82f6","#fbbf24"][i%3]} opacity={0.2} />
      ))}
    </svg>
  );
}

function getSeason() {
  const m = new Date().getMonth(); // 0-11
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 7) return "summer";
  if (m >= 8 && m <= 10) return "autumn";
  return "winter";
}

function SeasonalEffect({ visible, accent }) {
  if (!visible) return null;
  const preset = ACCENT_PRESETS.find(p => p.id === accent);
  const season = preset?.season;
  if (!season) return null;

  if (season === "spring") return <SpringEffect />;
  // summer / autumn / winter の演出は季節になったら公開予定
  // if (season === "summer") return <SummerEffect />;
  // if (season === "autumn") return <AutumnEffect />;
  // if (season === "winter") return <WinterEffect />;
  return null;
}

const SAKURA_GRADIENTS = [
  { id: "spg0", c1: "#fff5f7", c2: "#fce7f3", c3: "#f9a8d4" },  // ほぼ白〜淡ピンク
  { id: "spg1", c1: "#fff1f2", c2: "#fecdd3", c3: "#fda4af" },  // 白〜ローズ
  { id: "spg2", c1: "#fdf2f8", c2: "#fbcfe8", c3: "#f0abfc" },  // 白〜薄紫ピンク
  { id: "spg3", c1: "#ffffff", c2: "#fce7f3", c3: "#f9a8d4" },  // 純白〜ピンク
];
function SakuraPetalSvg({ size, style, className, variant = 0 }) {
  const w = size * 16;
  const g = SAKURA_GRADIENTS[variant % SAKURA_GRADIENTS.length];
  return (
    <svg className={className} style={style} width={w} height={w * 1.3} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0 C6 4, 0 8, 0 14 C0 20, 4 26, 10 26 C16 26, 20 20, 20 14 C20 8, 14 4, 10 0Z" fill={`url(#${g.id})`} />
      <path d="M10 4 C10 10, 9 18, 10 24" stroke={g.c2} strokeWidth="0.3" opacity="0.4" />
      <defs>
        <radialGradient id={g.id} cx="40%" cy="30%">
          <stop offset="0%" stopColor={g.c1} />
          <stop offset="55%" stopColor={g.c2} />
          <stop offset="100%" stopColor={g.c3} stopOpacity="0.5" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function SpringEffect() {
  const petals = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    key: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    fallDur: 10 + Math.random() * 8,
    swayDur: 3 + Math.random() * 4,
    size: 0.5 + Math.random() * 0.7,
    opacity: 0.25 + Math.random() * 0.45,
    drift: -60 + Math.random() * 120,
    rotEnd: 360 + Math.random() * 720,
    settle: i < 6,
  })), []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {petals.map(p => (
        <SakuraPetalSvg
          key={p.key}
          size={p.size}
          variant={p.key}
          className={`seasonal-particle sakura-anim${p.settle ? " sakura-anim--settle" : ""}`}
          style={{
            left: `${p.left}%`,
            "--fall-dur": `${p.fallDur}s`,
            "--sway-dur": `${p.swayDur}s`,
            "--drift": `${p.drift}px`,
            "--rot-end": `${p.rotEnd}deg`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
      <div className="sakura-ground" />
    </div>
  );
}

function SummerEffect() {
  const fireflies = useMemo(() => Array.from({ length: 14 }, (_, i) => ({
    key: i,
    left: 5 + Math.random() * 90,
    top: 20 + Math.random() * 70,
    delay: Math.random() * 8,
    dur: 4 + Math.random() * 6,
    driftX: -30 + Math.random() * 60,
    driftY: -40 + Math.random() * 30,
    size: 3 + Math.random() * 4,
  })), []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {fireflies.map(f => (
        <div
          key={f.key}
          className="firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDelay: `${f.delay}s`,
            "--fly-dur": `${f.dur}s`,
            "--fly-x": `${f.driftX}px`,
            "--fly-y": `${f.driftY}px`,
          }}
        />
      ))}
    </div>
  );
}

function MomijiSvg({ size, color1, color2, style, className }) {
  const w = size * 18;
  return (
    <svg className={className} style={style} width={w} height={w} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2 L14 8 L8 6 L11 12 L4 12 L10 16 L6 22 L12 19 L12 26 L16 20 L20 26 L20 19 L26 22 L22 16 L28 12 L21 12 L24 6 L18 8 Z" fill={`url(#alg-${color1.replace("#","")})`} />
      <path d="M16 8 L16 22" stroke={color2} strokeWidth="0.5" opacity="0.4" />
      <path d="M12 12 L16 16 L20 12" stroke={color2} strokeWidth="0.3" opacity="0.3" fill="none" />
      <defs>
        <linearGradient id={`alg-${color1.replace("#","")}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AutumnEffect() {
  const leaves = useMemo(() => {
    const palettes = [
      ["#dc2626", "#991b1b"], ["#ea580c", "#c2410c"], ["#d97706", "#a16207"],
      ["#ca8a04", "#854d0e"], ["#ef4444", "#b91c1c"], ["#f97316", "#ea580c"],
    ];
    return Array.from({ length: 14 }, (_, i) => {
      const [c1, c2] = palettes[i % palettes.length];
      return {
        key: i, c1, c2,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        fallDur: 8 + Math.random() * 7,
        swayDur: 2.5 + Math.random() * 3,
        size: 0.55 + Math.random() * 0.55,
        opacity: 0.35 + Math.random() * 0.4,
        drift: -50 + Math.random() * 100,
        rotEnd: 200 + Math.random() * 500,
      };
    });
  }, []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {leaves.map(l => (
        <MomijiSvg
          key={l.key}
          size={l.size}
          color1={l.c1}
          color2={l.c2}
          className="seasonal-particle autumn-anim"
          style={{
            left: `${l.left}%`,
            "--fall-dur": `${l.fallDur}s`,
            "--sway-dur": `${l.swayDur}s`,
            "--drift": `${l.drift}px`,
            "--rot-end": `${l.rotEnd}deg`,
            animationDelay: `${l.delay}s`,
            opacity: l.opacity,
          }}
        />
      ))}
    </div>
  );
}

function SnowflakeSvg({ size, style, className }) {
  const w = size;
  return (
    <svg className={className} style={style} width={w} height={w} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 6本の枝 */}
      <g stroke="white" strokeWidth="0.8" strokeLinecap="round">
        <line x1="16" y1="2" x2="16" y2="30" />
        <line x1="3.9" y1="9" x2="28.1" y2="23" />
        <line x1="3.9" y1="23" x2="28.1" y2="9" />
        {/* 小枝 */}
        <line x1="16" y1="6" x2="13" y2="3" />
        <line x1="16" y1="6" x2="19" y2="3" />
        <line x1="16" y1="26" x2="13" y2="29" />
        <line x1="16" y1="26" x2="19" y2="29" />
        <line x1="7.5" y1="11" x2="5.5" y2="8" />
        <line x1="7.5" y1="11" x2="5" y2="13" />
        <line x1="24.5" y1="21" x2="27" y2="19" />
        <line x1="24.5" y1="21" x2="26.5" y2="24" />
        <line x1="7.5" y1="21" x2="5" y2="19" />
        <line x1="7.5" y1="21" x2="5.5" y2="24" />
        <line x1="24.5" y1="11" x2="26.5" y2="8" />
        <line x1="24.5" y1="11" x2="27" y2="13" />
      </g>
      <circle cx="16" cy="16" r="2" fill="white" opacity="0.5" />
    </svg>
  );
}

function WinterEffect() {
  const flakes = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    key: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    fallDur: 10 + Math.random() * 10,
    swayDur: 3 + Math.random() * 4,
    size: 10 + Math.random() * 14,
    opacity: 0.15 + Math.random() * 0.4,
    drift: -25 + Math.random() * 50,
  })), []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {flakes.map(f => (
        <SnowflakeSvg
          key={f.key}
          size={f.size}
          className="seasonal-particle snow-anim"
          style={{
            left: `${f.left}%`,
            "--fall-dur": `${f.fallDur}s`,
            "--sway-dur": `${f.swayDur}s`,
            "--drift": `${f.drift}px`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
          }}
        />
      ))}
      <div className="snow-ground" />
    </div>
  );
}

export { SeasonalScene, SeasonalEffect };
