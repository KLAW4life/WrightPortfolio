
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle, ExternalLink, Github, Link as LinkIcon, Trophy } from "lucide-react";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop";

/**
 * 1) DATA — add/edit hackathons here
 */
const experience = [
  {
    id: "TIM",
    title: "Transforming Inspirational Minds Ltd",
    date: "March - Dec. 2023",
    role: "Intern Developer",
    location: "St.Catherine, Jamaica",
    cover: DEFAULT_IMG,
    summary:
      "On the NGAGE platform, I boosted user engagement by 20% by building interactive trivia and survey minigames using SCRUM practices. I also improved stability by systematically testing, debugging, and documenting fixes, delivering a smoother, more reliable experience for 100+ active users.",
    stack: [
      { icon: "", text: "Vue.js3 + Vuetify", color: "bg-blue-500" },
      { icon: "", text: "TypeScript", color: "bg-green-500" },
      { icon: "", text: "Firebase", color: "bg-purple-500" },
      { icon: "", text: "BitBucket", color: "bg-orange-500" },
    ],
    impact: [
      { label: "Internship", value: "1st time Internship" },
      { label: "Web Development", value: "Learnt Vue.js3 + Vuetify" },
    ],
    links: {
      demo: "https://timcorporation.net/ngage/",
    },
  },
  {
    id: "hylite",
    title: "hyLite Studios LLC",
    date: "May - August 2025",
    role: "Junior Developer Intern",
    location: "Lakewood, OH (Remote)",
    cover: DEFAULT_IMG,
    summary:
      "I contributed TypeScript-based VR interaction features and implemented UI systems while gaining hands-on experience in 3D UI/UX and agile workflows within a SCRUM team. I collaborated in weekly stand-ups, participated in peer code reviews, and worked across the full software development life cycle under mentorship from senior developers. I also developed AI-driven NPCs with interactive voice systems, enabling natural player conversations and boosting immersion in the XR application by leveraging emerging conversational and speech technologies.",
    stack: [
      { icon: "", text: "Meta Horizon World Platform", color: "bg-blue-500" },
      { icon: "", text: "TypeScript", color: "bg-green-500" },
      { icon: "", text: "Blender", color: "bg-purple-500" },
    ],
    impact: [
      { label: "Internship", value: "1st XR-AI Internship" },
      { label: "Meta Horizon World", value: "Learnt Platform for Development" },
      { label: "AI NPCs", value: "Implemented NPCs with interactive voice systems" },
    ],
    links: {
      demo: "https://www.hylitestudios.com/",
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

const ExpCard = ({ h }) => {
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
              <LinkIconBtn href={h.links?.demo} label="Website" Icon={ExternalLink} />
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
  const total = experience.length;

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
        Back to the Wright Portfolio
      </button>

      {/* Page Title */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl flex justify-center gap-3">
            <span>💻</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Work Experience
            </span>
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 will-change-transform"
            style={transform}
          >
            {experience.map((h) => (
              <ExpCard key={h.id} h={h} />
            ))}
          </div>

          {/* Controls */}
          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {experience.map((_, i) => (
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
