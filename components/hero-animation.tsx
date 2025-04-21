"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const nodes = [
  { angle: -90, icon: "🏢" },
  { angle: -30, icon: "👤" },
  { angle: 30, icon: "👤" },
  { angle: 90, icon: "🏢" },
  { angle: 150, icon: "👤" },
  { angle: 210, icon: "👤" },
];

const radius = 140;
const centerX = 250;
const centerY = 250;

const KodexaNetwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pulseControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      pulseControls.start({
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full flex justify-center items-center py-10">
      <svg width="500" height="500" viewBox="0 0 500 500">
        {/* Conexiones (líneas) */}
        {nodes.map((node, i) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);

          return (
            <motion.line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="black"
              strokeWidth="1.5"
              strokeDasharray="140"
              strokeDashoffset="140"
              animate={isInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.15 }}
            />
          );
        })}

        {/* Nodo central con pulso */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="30"
          fill="black"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={isInView ? pulseControls : {}}
          transition={{ duration: 0.4 }}
        />
        <text
          x={centerX}
          y={centerY + 6}
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="bold"
        >
          K
        </text>

        {/* Nodos externos con íconos estáticos */}
        {nodes.map((node, i) => {
          const x = centerX + radius * Math.cos((node.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((node.angle * Math.PI) / 180);

          return (
            <motion.g
              key={i}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15 }}
            >
              <circle
                cx={x}
                cy={y}
                r="22"
                fill="white"
                stroke="black"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y + 6}
                textAnchor="middle"
                fontSize="20"
              >
                {node.icon}
              </text>
            </motion.g>
          );
        })}

        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="white" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default KodexaNetwork;
