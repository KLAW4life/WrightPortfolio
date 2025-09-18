
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle, ExternalLink, Github, Link as LinkIcon, Trophy } from "lucide-react";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop";

/**
 * 1) DATA — add/edit hackathons here
 */
const hackathons = [
  {
    id: "lstm-genai",
    title: "GreenifyMe",
    event: "UM Horizon AI Hackathon 2025",
    date: "Feb 22–23, 2025",
    role: "AI/ML Modeling + Backend",
    team: "GreenifyMe",
    location: "Miami, FL",
    award: { label: "2nd Place – Environmental Track", color: "bg-amber-500" },
    cover: DEFAULT_IMG,
    summary:
      "GreenifyMe is an AI-driven tool that forecasts Miami’s rising temperatures over the next five years and identifies future “hot spots.” Users can upload photos or videos to see how adding trees, green roofs, or other eco-friendly changes would reduce heat. Its interactive heat map highlights areas most in need of vegetation, providing valuable insights for individuals, urban planners, and policymakers.",
    // highlights: [
    //   { icon: "📝", title: "Description", desc: "Live updating visualizations with streaming data" },
    //   { icon: "🎯", title: "Custom Dashboards", desc: "Personalized analytics for different user roles" },
    //   { icon: "🔍", title: "Advanced Filtering", desc: "Multi‑dimensional data exploration tools" },
    // ],
    stack: [
      { icon: "", text: "Python + Streamlit + Flask", color: "bg-blue-500" },
      { icon: "", text: "StabilityAI + Stable-Diffusion", color: "bg-green-500" },
      { icon: "", text: "Geocoder, LSTM", color: "bg-purple-500" },
      { icon: "", text: "Pandas, NumPy, LSTM, Plotly.express", color: "bg-orange-500" },
    ],
    impact: [
      { label: "LSTM", value: "1st time attempt" },
    ],
    links: {
      devpost: "https://devpost.com/software/greenifyme-o1ceuz",
      github: "https://github.com/KLAW4life/GreenifyMe",
    },
  },
  {
    id: "meta-museum",
    title: "Meta Museum",
    event: "MIT Reality Hack 2025",
    date: "Jan 22-27, 2025",
    role: "Backend Development",
    // team: 3,
    location: "Boston, MA",
    award: { label: "Winner - Meta Track", color: "bg-emerald-500" },
    cover: DEFAULT_IMG,
    summary: "This Meta Horizon World allows users to walk around a museum and interact with the artwork in different ways.",
    stack: [
      { icon: "", text: "Meta Horizon Worlds", color: "bg-yellow-500" },
      { icon: "", text: "Typescript", color: "bg-blue-500" },
      { icon: "", text: "Blender", color: "bg-red-500" },
    ],
    impact: [
      { label: "Hackathon", value: "1st time Winner" },
      { label: "World", value: "1st time development" },
      { label: "Project", value: "Published" },
    ],
    links: {
      devpost: "https://devpost.com/software/meta-museum-ohpn3r",
      github: "https://github.com/nataliesoul/MetaMuseum",
      demo: "horizon.meta.com",
    },
  },
  {
    id: "hacker-match",
    title: "HackerMatch",
    event: "ShellHacks",
    date: "Sep 27 – 29, 2024",
    role: "Team Leader / Backend + Database Development",
    location: "Miami, FL",
    cover: DEFAULT_IMG,
    summary: "HackerMatch is a web platform that records key details about hackathon participants—including their major, interests, project ideas, skills, and preferred roles—helping connect people based on relevant information.",
    stack: [
      { icon: "", text: "Python + Flask, Javascript", color: "bg-yellow-500" },
      { icon: "", text: "MySQL", color: "bg-blue-500" },
      { icon: "", text: "Bootstrap", color: "bg-red-500" },
    ],
    impact: [
      { label: "Hackathon", value: "1st time Participant" },
    ],
    links: {
      devpost: "https://devpost.com/software/hackermatch-hm16gt",
      github: "https://github.com/KLAW4life/HackMatch",
    },
  },
];

/**
 * 2) CARD — visual building blocks
 */
const Section = ({ title, children, className = "" }) => (
  <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20 ${className}`}>
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    {children}
  </div>
);

const Badge = ({ children, color = "bg-teal-500" }) => (
  <span className={`inline-flex items-center gap-2 ${color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>{children}</span>
);

const Pill = ({ color, children }) => (
  <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${color} text-white/90`}>{children}</div>
);

const LinkIconBtn = ({ href, label, Icon }) => (
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-teal-300 hover:text-white transition-colors"
    >
      <Icon size={18} />
      <span className="text-sm">{label}</span>
    </a>
  ) : null
);

const HackathonCard = ({ h }) => {
  return (
    <div className="min-w-full px-4">
      <div className="space-y-8">
        {/* Header / Cover */}
        <div className="relative overflow-hidden rounded-3xl border border-purple-300/20">
          <img src={h.cover || DEFAULT_IMG} alt={h.title} className="w-full h-56 md:h-72 object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow">{h.title}</h1>
                {h.award?.label && (
                  <Badge color={h.award.color}><Trophy size={14} /> {h.award.label}</Badge>
                )}
              </div>
              <p className="text-purple-200 mt-1">
                {h.event} • {h.date} • {h.location} • {h.role} • Team {h.team}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <LinkIconBtn href={h.links?.demo} label="Live Demo" Icon={ExternalLink} />
              <LinkIconBtn href={h.links?.github} label="GitHub" Icon={Github} />
              <LinkIconBtn href={h.links?.devpost} label="Devpost" Icon={LinkIcon} />
            </div>
          </div>
        </div>

        {/* Summary */}
        {h.summary && (
          <Section title="Summary">
            <p className="text-purple-200 leading-relaxed">{h.summary}</p>
          </Section>
        )}

        {/* Highlights
        {h.highlights?.length > 0 && (
          <Section title="🎨 Project Highlights">
            <div className="grid md:grid-cols-3 gap-6">
              {h.highlights.map((item, i) => (
                <div key={i} className="bg-blue-500/20 rounded-xl p-4">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-purple-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        )} */}

        {/* Stack + Impact */}
        <div className="grid md:grid-cols-2 gap-8">
          {h.stack?.length > 0 && (
            <Section title="Technologies">
              <div className="space-y-3">
                {h.stack.map((t, i) => (
                  <Pill key={i} color={t.color}>
                    <span className="text-lg">{t.icon}</span>
                    <span className="text-white">{t.text}</span>
                  </Pill>
                ))}
              </div>
            </Section>
          )}

          {h.impact?.length > 0 && (
            <Section title="Impact">
              <div className="space-y-4">
                {h.impact.map((m, j) => (
                  <div key={j} className="flex justify-between items-center">
                    <span className="text-purple-300">{m.label}</span>
                    <span className="text-white font-bold">{m.value}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * 3) MAIN — Carousel wrapper with controls
 */
export default function Hackathons() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const total = hackathons.length;

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  // Swipe (touch) support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let dx = 0;
    const onStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const onMove = (e) => {
      dx = e.touches[0].clientX - startX;
    };
    const onEnd = () => {
      if (dx < -60) next();
      if (dx > 60) prev();
      startX = 0; dx = 0;
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
    };
  }, [current]);

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  // compute transform style once per current change
  const transform = useMemo(() => ({ transform: `translateX(-${current * 100}%)` }), [current]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-6 md:p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-6 md:mb-8"
      >
        <ArrowLeft size={20} />
        Back to Kerene's World
      </button>

      {/* Page Title */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl flex justify-center gap-3">
            <span>🏅</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Hackathons
            </span>
          </h1>
          {/* <p className="text-purple-200 text-lg md:text-xl">Projects & Achievements</p> */}
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 will-change-transform"
            style={transform}
          >
            {hackathons.map((h) => (
              <HackathonCard key={h.id} h={h} />
            ))}
          </div>

          {/* Controls */}
          {/* <button
            onClick={prev}
            aria-label="Previous"
            className="hidden md:flex absolute top-1/2 left-3 -translate-y-1/2 bg-purple-900/50 hover:bg-purple-900/70 border border-purple-300/20 text-white p-1.5 rounded-full"
          >
            <ArrowLeftCircle size={36} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="hidden md:flex absolute top-1/2 right-3 -translate-y-1/2 bg-purple-900/50 hover:bg-purple-900/70 border border-purple-300/20 text-white p-1.5 rounded-full"
          >
            <ArrowRightCircle size={36} />
          </button> */}

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {hackathons.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${i === current ? "bg-teal-400" : "bg-purple-400/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
