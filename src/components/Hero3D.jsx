
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function GoldenRibbons({ scroll }) {
  const group = useRef(null);
  const ribbonRefs = useRef([]);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const progress = scroll.current.progress;

    if (group.current) {
      group.current.position.x =
        Math.sin(progress * Math.PI * 2) * 1.5;

      group.current.position.y =
        Math.cos(progress * Math.PI * 2) * 1.15;

      group.current.rotation.z =
        Math.sin(progress * Math.PI * 2) * 0.48;

      group.current.rotation.y += delta * 0.08;
    }

    ribbonRefs.current.forEach((ribbon, index) => {
      if (!ribbon) return;

      ribbon.rotation.x =
        Math.sin(time * 0.22 + index) * 0.4 +
        progress * (index % 2 ? 1.4 : -1.4);

      ribbon.rotation.y =
        Math.cos(time * 0.18 + index) * 0.35 +
        progress * (index % 2 ? -1.8 : 1.8);

      ribbon.rotation.z =
        Math.sin(time * 0.15 + index) * 0.2 +
        progress * (index % 2 ? 0.8 : -0.8);
    });
  });

  const ribbonSettings = [
    { radius: 2.6, tube: 0.018, color: "#e8c982" },
    { radius: 3.1, tube: 0.012, color: "#a9803f" },
    { radius: 2.15, tube: 0.009, color: "#f4dfad" },
    { radius: 3.55, tube: 0.008, color: "#c6a76b" },
  ];

  return (
    <group ref={group}>
      {ribbonSettings.map((item, index) => {
        const points = [];

        for (let i = 0; i <= 300; i++) {
          const t = (i / 300) * Math.PI * 2;

          const x =
            Math.cos(t) * item.radius;

          const y =
            Math.sin(t) * item.radius * 0.58;

          const z =
            Math.sin(t * 2 + index) * 0.55;

          points.push(new THREE.Vector3(x, y, z));
        }

        const curve = new THREE.CatmullRomCurve3(
          points,
          true
        );

        return (
          <mesh
            key={index}
            ref={(element) => {
              ribbonRefs.current[index] = element;
            }}
          >
            <tubeGeometry
              args={[curve, 300, item.tube, 8, true]}
            />
            <meshStandardMaterial
              color={item.color}
              metalness={0.92}
              roughness={0.23}
              emissive={item.color}
              emissiveIntensity={0.24}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function HeroSculpture({ scroll }) {
  const group = useRef(null);
  const ringOne = useRef(null);
  const ringTwo = useRef(null);
  const core = useRef(null);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const progress = scroll.current.progress;

    if (group.current) {
      group.current.rotation.y += delta * 0.17;

      group.current.rotation.x =
        Math.sin(time * 0.25) * 0.12 +
        progress * 0.45;

      group.current.rotation.z =
        Math.sin(time * 0.2) * 0.06;

      group.current.position.y =
        Math.sin(time * 0.65) * 0.12 +
        Math.sin(progress * Math.PI * 2) * 0.4;

      group.current.position.x =
        Math.sin(progress * Math.PI * 2) * 0.45;

      group.current.scale.setScalar(
        1.05 + Math.sin(progress * Math.PI) * 0.16
      );
    }

    if (ringOne.current) {
      ringOne.current.rotation.x += delta * 0.14;
      ringOne.current.rotation.z -= delta * 0.18;
    }

    if (ringTwo.current) {
      ringTwo.current.rotation.y -= delta * 0.15;
      ringTwo.current.rotation.x += delta * 0.1;
    }

    if (core.current) {
      core.current.rotation.y -= delta * 0.08;
      core.current.rotation.z += delta * 0.06;
    }
  });

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.12}
      floatIntensity={0.16}
    >
      <group ref={group} scale={1.05}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.05, 2]} />
          <meshStandardMaterial
            color="#c6a76b"
            metalness={0.9}
            roughness={0.2}
            wireframe
            transparent
            opacity={0.92}
          />
        </mesh>

        <mesh scale={0.78}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshPhysicalMaterial
            color="#8d6735"
            metalness={0.95}
            roughness={0.22}
            clearcoat={1}
            wireframe
          />
        </mesh>

        <mesh ref={ringOne} rotation={[0.7, 0.25, 0.2]}>
          <torusGeometry args={[1.48, 0.012, 12, 180]} />
          <meshStandardMaterial
            color="#ead6a0"
            metalness={0.92}
            roughness={0.22}
          />
        </mesh>

        <mesh ref={ringTwo} rotation={[1.1, 0.7, 0.8]}>
          <torusGeometry args={[1.72, 0.009, 8, 180]} />
          <meshStandardMaterial
            color="#997544"
            metalness={0.88}
            roughness={0.28}
          />
        </mesh>

        <mesh rotation={[0.3, 0.2, 1.1]}>
          <torusGeometry args={[1.24, 0.016, 12, 160]} />
          <meshStandardMaterial
            color="#b58b4b"
            metalness={0.9}
            roughness={0.24}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ scroll, isHero }) {
  return (
    <>
      <ambientLight intensity={0.65} />

      <pointLight
        position={[3, 3, 4]}
        intensity={isHero ? 32 : 18}
        color="#f0d39a"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={18}
        color="#a56e2f"
      />

      <spotLight
        position={[0, 5, 4]}
        intensity={22}
        angle={0.6}
        penumbra={1}
        color="#fff0cf"
      />

      <GoldenRibbons scroll={scroll} />

      <Sparkles
        count={isHero ? 110 : 160}
        scale={isHero ? 5 : 15}
        size={isHero ? 1.8 : 2.1}
        speed={0.35}
        color="#e3c580"
        opacity={0.7}
      />

      {isHero && <HeroSculpture scroll={scroll} />}
    </>
  );
}

function FixedBackground({ scroll }) {
  const camera = useRef(null);

  useFrame((state) => {
    const progress = scroll.current.progress;

    if (!camera.current) return;

    camera.current.position.x = THREE.MathUtils.damp(
      camera.current.position.x,
      Math.sin(progress * Math.PI * 2) * 0.65,
      3,
      state.clock.getDelta()
    );

    camera.current.position.y = THREE.MathUtils.damp(
      camera.current.position.y,
      Math.cos(progress * Math.PI * 2) * 0.45,
      3,
      state.clock.getDelta()
    );

    camera.current.lookAt(0, 0, 0);
  });

  return null;
}

export default function Hero3D() {
  const scroll = useRef({ progress: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = gsap.context(() => {
      gsap.to(scroll.current, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      gsap.fromTo(
        ".hero-copy > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        ".hero-visual",
        { opacity: 0, scale: 0.86, rotate: -4 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.25,
          ease: "power3.out",
          delay: 0.25,
        }
      );

      gsap.utils
        .toArray(
          ".section-kicker, .intro-grid, .principles > div, .expertise-heading, .expertise-layout, .project-card, .contact-content"
        )
        .forEach((element) => {
          gsap.fromTo(
            element,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
    });

    return () => {
      context.revert();
      scroll.current.progress = 0;
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <Canvas
          ref={canvasRef}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 8], fov: 48 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        >
          <FixedBackground scroll={scroll} />
          <Scene scroll={scroll} isHero={false} />
        </Canvas>

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#080808]/50" />
      </div>

      <div className="hero-canvas relative z-[1]">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5.4], fov: 42 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        >
          <Scene scroll={scroll} isHero />
        </Canvas>
      </div>
    </>
  );
}
