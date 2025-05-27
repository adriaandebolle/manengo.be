import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Mesh, Vector3 } from "three";

interface AnimatedBoxProps {
  position: [number, number, number];
  color: string;
}

const boxes: [number, number, string][] = [
  // [x, y, color]
  [-2.1, 2.1, "black"],
  [0, 2.1, "#FFE936"],
  [2.1, 2.1, "#FF0F21"],
  [-2.1, 0, "#003399"],
  [0, 0, "#FFCC00"],
  [-2.1, -2.1, "#4491DB"],
];

function AnimatedBox({ position, color }: AnimatedBoxProps) {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
      if (hovered) {
        mesh.current.scale.set(1.2, 1.2, 1.2);
      } else {
        mesh.current.scale.set(1, 1, 1);
      }
    }
  });

  return (
    <mesh
      ref={mesh}
      position={new Vector3(...position)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1.8, 1.8, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const Logo3D = () => {
  return (
    <div style={{ width: "400px", height: "400px", margin: "auto" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        {/* Animate each box */}
        {boxes.map(([x, y, color], i) => (
          <Float key={i} speed={2} floatIntensity={0.5}>
            <AnimatedBox position={[x, y, 0]} color={color} />
          </Float>
        ))}
      </Canvas>
    </div>
  );
};

export default Logo3D;
