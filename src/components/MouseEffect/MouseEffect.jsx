import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ─── Click-burst particle (only mounts on click, not every frame) ───────────
const Particle = ({ x, y, index, onDone }) => {
  const angle = (Math.PI * 2 * index) / 8;
  const dist = 45 + Math.random() * 35;
  return (
    <motion.div
      className="pointer-events-none fixed w-2 h-2 rounded-full bg-amber-400 z-[9999]"
      style={{ left: x - 4, top: y - 4 }}
      initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      animate={{
        opacity: 0,
        scale: 0,
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onAnimationComplete={onDone}
    />
  );
};

// ─── Main component ──────────────────────────────────────────────────────────
const MouseEffect = () => {
  // Skip on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return <MouseEffectInner />;
};

const MouseEffectInner = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  // Refs for position — never cause re-renders
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const glow = useRef({ x: -200, y: -200 });
  const hovering = useRef(false);
  const rafId = useRef(null);

  // Click particles still use state (only fires on click, not every frame)
  const [particles, setParticles] = useState([]);
  const particleCount = useRef(0);

  useEffect(() => {
    // ── 1. Store raw mouse coords in a ref (no setState) ──────────────────
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Hover detection — cheapest possible check
      const el = e.target;
      hovering.current = !!(
        el.closest("a") ||
        el.closest("button") ||
        el.closest("[data-hover]")
      );
    };

    // ── 2. Click burst particles ───────────────────────────────────────────
    const onMouseDown = (e) => {
      const id = particleCount.current;
      particleCount.current += 1;
      const pts = Array.from({ length: 8 }, (_, i) => ({
        uid: `${id}-${i}`,
        x: e.clientX,
        y: e.clientY,
        index: i,
      }));
      setParticles((prev) => [...prev, ...pts]);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });

    // ── 3. Single RAF loop — direct DOM writes, zero React involvement ─────
    const loop = () => {
      const { x: mx, y: my } = mouse.current;

      // Dot: snap to cursor
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }

      // Ring: lerp behind cursor
      ring.current.x += (mx - ring.current.x) * 0.14;
      ring.current.y += (my - ring.current.y) * 0.14;
      if (ringRef.current) {
        const size = hovering.current ? 44 : 28;
        const offset = size / 2;
        ringRef.current.style.transform = `translate(${ring.current.x - offset}px, ${ring.current.y - offset}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.borderColor = hovering.current
          ? "rgba(251,191,36,0.95)"
          : "rgba(251,191,36,0.55)";
      }

      // Glow: lazier lerp
      glow.current.x += (mx - glow.current.x) * 0.06;
      glow.current.y += (my - glow.current.y) * 0.06;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.current.x - 150}px, ${glow.current.y - 150}px)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const removeParticle = (uid) =>
    setParticles((prev) => prev.filter((p) => p.uid !== uid));

  return (
    <>
      {/* Dot — instant cursor */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-amber-400 z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />

      {/* Ring — lerped */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 rounded-full border-2 z-[9998]"
        style={{
          willChange: "transform",
          width: "28px",
          height: "28px",
          borderColor: "rgba(251,191,36,0.55)",
          transition:
            "width 0.18s ease, height 0.18s ease, border-color 0.18s ease",
        }}
      />

      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-[9990] opacity-[0.12]"
        style={{
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.7) 0%, transparent 70%)",
        }}
      />

      {/* Click particles */}
      {particles.map((p) => (
        <Particle
          key={p.uid}
          x={p.x}
          y={p.y}
          index={p.index}
          onDone={() => removeParticle(p.uid)}
        />
      ))}
    </>
  );
};

export default MouseEffect;
