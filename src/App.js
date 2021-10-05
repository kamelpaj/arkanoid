import { Canvas } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { useStore } from "./store"

import Ball from "./Ball"
import Paddle from "./Paddle"
import Enemy from "./Enemy"

export default function App() {
  const score = useStore((state) => state.score)
  return (
    <>
      <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
        <Html position={[0, 0, 0]}>
          <h1> {score} </h1>
        </Html>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <Physics gravity={[0, -30, 0]} defaultContactMaterial={{ restitution: 1.1 }}>
          <Ball />
          <Paddle />
          <Enemy color="orange" position={[2, 1, 0]} />
          <Enemy color="hotpink" position={[-2, 3, 0]} />
        </Physics>
      </Canvas>
    </>
  )
}
