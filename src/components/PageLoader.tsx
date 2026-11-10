
"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform float uProgress;
uniform vec2 uResolution;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float result = 0.0;
  float amplitude = 0.5;

  for (int i = 0; i < 4; i++) {
    result += noise(p) * amplitude;
    p *= 2.0;
    amplitude *= 0.5;
  }

  return result;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  float mobile = step(uResolution.x, uResolution.y);

  // Larger visible waves on mobile
  float waveSize = mix(0.009, 0.022, mobile);

  float wave = sin(uv.x * 13.0 + uTime * 1.2) * waveSize;
  wave += sin(uv.x * 25.0 - uTime * 0.8) * waveSize * 0.35;
  wave += sin(uv.x * 5.0 + uTime * 0.5) * waveSize * 0.7;

  float surface = uProgress + wave;

  if (uv.y > surface) {
    gl_FragColor = vec4(0.0);
    return;
  }

  float depth = clamp(
    (surface - uv.y) / max(uProgress, 0.01),
    0.0,
    1.0
  );

  vec2 p = vec2(uv.x * aspect, uv.y);

  float distortion = fbm(p * 5.0 + uTime * 0.12);
  float detail = fbm(p * 11.0 - uTime * 0.08);

  float lightPattern = pow(
    max(0.0, sin(distortion * 20.0 + detail * 10.0)),
    7.0
  );

  // Exact NOOR TECHNOLOGIES brand colours
  vec3 navy = vec3(0.0902, 0.1255, 0.2); 
  vec3 teal = vec3(0.0588, 0.4627, 0.4314);
  vec3 white = vec3(0.9725, 0.9804, 0.9882);
  vec3 orange = vec3(0.9765, 0.451, 0.0863);

  vec3 water = mix(teal, navy, depth * 0.85);

  // Moving underwater light reflections
  water += white * lightPattern * 0.12;
  water += teal * detail * 0.08;

  // Liquid surface highlight
  float surfaceGlow = exp(-abs(uv.y - surface) * 90.0);
  water += white * surfaceGlow * 0.32;

  // Small orange brand accent in surface reflections
  water += orange * surfaceGlow * lightPattern * 0.12;

  // Rising bubbles
  float bubbles = 0.0;

  for (int i = 0; i < 16; i++) {
    float id = float(i);

    float bx = fract(hash(vec2(id, 4.0)) + id * 0.071);
    float speed = 0.035 + hash(vec2(id, 8.0)) * 0.05;
    float by = fract(hash(vec2(id, 2.0)) + uTime * speed);

    vec2 bubblePosition = vec2(bx, by * uProgress);
    float radius = 0.002 + hash(vec2(id, 6.0)) * 0.0025;

    float distanceToBubble = length(
      (uv - bubblePosition) * vec2(aspect, 1.0)
    );

    float ring = 1.0 - smoothstep(
      radius * 0.35,
      radius,
      abs(distanceToBubble - radius)
    );

    bubbles += ring;
  }

  water += white * bubbles * 0.32;

  gl_FragColor = vec4(water, 0.98);
}
`;

function Water({ progress }: { progress: number }) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uResolution: { value: new THREE.Vector2(1, 1) },
        },
        transparent: true,
        depthWrite: false,
      }),
    []
  );

  useFrame(({ clock, size }) => {
    material.uniforms.uTime.value = clock.elapsedTime;

    material.uniforms.uProgress.value = THREE.MathUtils.lerp(
      material.uniforms.uProgress.value,
      progress / 100,
      0.055
    );

    material.uniforms.uResolution.value.set(
      size.width,
      size.height
    );
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let value = 0;
    let pageLoaded = document.readyState === "complete";
    let minimumTimePassed = false;
    let completed = false;

    const complete = () => {
      if (!pageLoaded || !minimumTimePassed || completed) return;

      completed = true;
      setProgress(100);

      window.setTimeout(() => setExiting(true), 700);
      window.setTimeout(() => setFinished(true), 1400);
    };

    const handleLoad = () => {
      pageLoaded = true;
      complete();
    };

    window.addEventListener("load", handleLoad);

    const minimumTimer = window.setTimeout(() => {
      minimumTimePassed = true;
      complete();
    }, 3500);

    const progressTimer = window.setInterval(() => {
      if (completed) return;

      if (value < 90) {
        value += 1;
        setProgress(Math.min(value, 90));
      }

      complete();
    }, 45);

    complete();

    return () => {
      window.removeEventListener("load", handleLoad);
      window.clearTimeout(minimumTimer);
      window.clearInterval(progressTimer);
    };
  }, []);

  if (finished) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-black transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <Water progress={progress} />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
        <h1 className="font-bold tracking-[0.16em] text-[#F8FAFC] text-xl sm:text-3xl">
          NOOR <span className="text-[#0F766E]">TECHNOLOGIES</span>
        </h1>

        <div className="mt-3 h-[2px] w-12 rounded-full bg-[#F97316]" />

        <p className="mt-4 max-w-xs text-[9px] leading-5 tracking-[0.2em] text-[#F8FAFC]/65 sm:text-xs">
          DIGITAL SOLUTIONS. SOFTWARE. TECHNOLOGY EDUCATION.
        </p>

        <div className="mt-12 flex items-baseline">
          <span className="text-6xl font-light tabular-nums text-[#F8FAFC] sm:text-7xl">
            {progress}
          </span>
          <span className="ml-1 text-2xl text-[#F97316]">%</span>
        </div>

        <div className="mt-5 h-[2px] w-36 overflow-hidden rounded-full bg-[#64748B]/40">
          <div
            className="h-full bg-[#0F766E] transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-5 text-[9px] tracking-[0.3em] text-[#64748B]">
          {progress === 100 ? "WELCOME ABOARD" : "LOADING EXPERIENCE"}
        </p>
      </div>
    </div>
  );
}
