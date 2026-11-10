
"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

type FishPose = {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
  opacity: number;
};

function Bubbles() {
  const bubblesRef = useRef<THREE.Group>(null);

  const bubbles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        x: Math.sin(i * 12.5) * 4.5,
        y: ((i * 1.7) % 9) - 4.5,
        z: Math.cos(i * 7.2) * 2,
        size: 0.018 + (i % 4) * 0.012,
        speed: 0.3 + (i % 5) * 0.13,
      })),
    []
  );

  useFrame((_, delta) => {
    if (!bubblesRef.current) return;

    bubblesRef.current.children.forEach((bubble, index) => {
      bubble.position.y += bubbles[index].speed * delta;

      if (bubble.position.y > 5) {
        bubble.position.y = -5;
      }
    });
  });

  return (
    <group ref={bubblesRef}>
      {bubbles.map((bubble, index) => (
        <mesh key={index} position={[bubble.x, bubble.y, bubble.z]}>
          <sphereGeometry args={[bubble.size, 16, 16]} />
          <meshBasicMaterial
            color="#C9F7FF"
            transparent
            opacity={0.42}
          />
        </mesh>
      ))}
    </group>
  );
}

function FishModel() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.Material[]>([]);

  const { scene, animations } = useGLTF("/models/clownfish.glb");
  const { actions } = useAnimations(animations, scene);
  const { viewport } = useThree();

  const isMobile = viewport.width < 7;

  // Model ko screen ke hisaab se size dena
  const modelSettings = useMemo(() => {
    const bounds = new THREE.Box3().setFromObject(scene);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;

    return {
      center: [-center.x, -center.y, -center.z] as [
        number,
        number,
        number
      ],
      scale: (isMobile ? 0.95 : 1.65) / maxDimension,
    };
  }, [scene, isMobile]);

  // Hero mein fish ki starting position
  const initialPose = useMemo<FishPose>(
    () => ({
      x: viewport.width * (isMobile ? 0.31 : 0.25),
      y: isMobile ? -0.15 : 0,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 1,
      opacity: 1,
    }),
    [viewport.width, isMobile]
  );

  const pose = useRef<FishPose>({ ...initialPose });

  useEffect(() => {
    pose.current = { ...initialPose };

    if (groupRef.current) {
      groupRef.current.position.set(
        initialPose.x,
        initialPose.y,
        initialPose.z
      );
      groupRef.current.scale.setScalar(initialPose.scale);
    }
  }, [initialPose]);

  // Materials ko fade effect ke liye prepare karna
  useEffect(() => {
    const materials: THREE.Material[] = [];

    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;

      const meshMaterials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      meshMaterials.forEach((material) => {
        material.transparent = true;
        materials.push(material);
      });
    });

    materialRefs.current = materials;

    return () => {
      materialRefs.current = [];
    };
  }, [scene]);

  // GLB mein original animation clips hon toh play karo
  useEffect(() => {
    console.log(
      "FISH ANIMATION CLIPS:",
      animations.map((clip) => ({
        name: clip.name,
        duration: clip.duration,
      }))
    );

    Object.values(actions).forEach((action) => {
      action?.reset().fadeIn(0.5).play();
    });

    return () => {
      Object.values(actions).forEach((action) => {
        action?.fadeOut(0.2);
      });
    };
  }, [actions, animations]);

  // About section mein fish ka dive
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const about = document.getElementById("about");
    if (!about) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: "top 90%",
          end: "top 5%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        pose.current,
        {
          x: isMobile ? 0.7 : -0.8,
          y: -viewport.height * 0.3,
          z: 1,
          rotationX: 0.15,
          rotationY: -0.4,
          rotationZ: -0.2,
          scale: 0.9,
          opacity: 1,
          ease: "power1.inOut",
        },
        0
      );

      timeline.to(
        pose.current,
        {
          x: isMobile ? 0.2 : -1.5,
          y: -viewport.height * 1.05,
          z: -3,
          rotationX: -0.25,
          rotationY: 0.6,
          rotationZ: -0.6,
          scale: 0.4,
          opacity: 0,
          ease: "power2.in",
        },
        0.5
      );
    });

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
    };
  }, [isMobile, viewport.height]);

  // Continuous swimming movement
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const fish = groupRef.current;
    const target = pose.current;
    const time = state.clock.elapsedTime;
    const damping = 4;

    // Smooth swimming movement
    const swimX = Math.sin(time * 0.7) * 0.07;
    const swimY = Math.sin(time * 1.5) * 0.055;

    fish.position.x = THREE.MathUtils.damp(
      fish.position.x,
      target.x + swimX,
      damping,
      delta
    );

    fish.position.y = THREE.MathUtils.damp(
      fish.position.y,
      target.y + swimY,
      damping,
      delta
    );

    fish.position.z = THREE.MathUtils.damp(
      fish.position.z,
      target.z,
      damping,
      delta
    );

    fish.rotation.x = THREE.MathUtils.damp(
      fish.rotation.x,
      target.rotationX + Math.sin(time * 1.1) * 0.025,
      damping,
      delta
    );

    fish.rotation.y = THREE.MathUtils.damp(
      fish.rotation.y,
      target.rotationY + Math.sin(time * 0.8) * 0.07,
      damping,
      delta
    );

    fish.rotation.z = THREE.MathUtils.damp(
      fish.rotation.z,
      target.rotationZ + Math.sin(time * 1.3) * 0.025,
      damping,
      delta
    );

    const currentScale = THREE.MathUtils.damp(
      fish.scale.x,
      target.scale,
      damping,
      delta
    );

    fish.scale.setScalar(currentScale);

    materialRefs.current.forEach((material) => {
      material.opacity = THREE.MathUtils.damp(
        material.opacity,
        target.opacity,
        4,
        delta
      );
    });
  });

  return (
    <group
      ref={groupRef}
      position={[initialPose.x, initialPose.y, initialPose.z]}
    >
      <group
        position={modelSettings.center}
        scale={modelSettings.scale}
      >
        <primitive object={scene} />
      </group>
    </group>
  );
}

export default function ClownfishScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-5, -3, 2]}
          intensity={0.8}
        />

        <pointLight
          position={[0, 3, 4]}
          intensity={1.2}
          color="#BCEBFA"
        />

        <Bubbles />
        <FishModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/clownfish.glb");
