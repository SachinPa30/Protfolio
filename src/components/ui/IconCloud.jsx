"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({ icons, images }) {
  const canvasRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([]);
  const [animationFrameRef, setAnimationFrameRef] = useState();
  const rotationRef = useRef({ x: 0, y: 0 });
  const iconCanvasesRef = useRef([]);
  const imagesLoadedRef = useRef([]);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    if (!icons && !images) return;
    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 70; // Increased canvas size
      offscreen.height = 70;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        if (images) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = items[index];
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.beginPath();
            offCtx.arc(35, 35, 35, 0, Math.PI * 2);
            offCtx.closePath();
            offCtx.clip();
            offCtx.drawImage(img, 0, 0, 70, 70);
            imagesLoadedRef.current[index] = true;
          };
        } else {
          offCtx.scale(0.6, 0.6);
          const svgString = renderToString(item);
          const img = new Image();
          img.src = "data:image/svg+xml;base64," + btoa(svgString);
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.drawImage(img, 0, 0);
            imagesLoadedRef.current[index] = true;
          };
        }
      }
      return offscreen;
    });
    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images]);

  useEffect(() => {
    const items = icons || images || [];
    const newIcons = [];
    const numIcons = items.length || 20;
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    const spacingMultiplier = 500; // More space for larger icons

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      newIcons.push({ x: x * spacingMultiplier, y: y * spacingMultiplier, z: z * spacingMultiplier, id: i });
    }
    setIconPositions(newIcons);
  }, [icons, images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      rotationRef.current.x += 0.0005;
      rotationRef.current.y += 0.004;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const newX = cosY * icon.x - sinY * icon.z;
        const newY = cosX * icon.y - sinX * icon.z;
        const newZ = sinX * icon.y + cosX * icon.z;

        const depth = 1 - newZ / 300;
        const baseSize = 70; // Increased icon base size
        const size = baseSize * depth;

        ctx.save();
        ctx.translate(canvas.width / 2 + newX, canvas.height / 2 + newY);

        if (icons || images) {
          if (iconCanvasesRef.current[index] && imagesLoadedRef.current[index]) {
            ctx.drawImage(iconCanvasesRef.current[index], -size / 2, -size / 2, size, size);
          }
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, 30, 0, Math.PI * 2);
          ctx.fillStyle = "#4444ff";
          ctx.fill();
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "18px Arial";
          ctx.fillText(`${icon.id + 1}`, 0, 0);
        }
        ctx.restore();
      });

      setAnimationFrameRef(requestAnimationFrame(animate));
    };

    animate();

    return () => {
      if (animationFrameRef) {
        cancelAnimationFrame(animationFrameRef);
      }
    };
  }, [icons, images, iconPositions]);

  return (
    <canvas
      ref={canvasRef}
      className="rounded-lg"
      aria-label="Interactive 3D Icon Cloud"
      role="img"
    />
  );
}
