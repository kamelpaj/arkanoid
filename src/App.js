import { Canvas } from "@react-three/fiber"
import { Html } from "@react-three/drei"

import { useStore } from "./store"

import PhysicsWorld from "./PhysicsWorld"
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
          <p> Hold space to slow down gravity </p>
        </Html>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <PhysicsWorld>
          <Ball />
          <Paddle />
          <Enemy color="orange" position={[2, 1, 0]} />
          <Enemy color="hotpink" position={[-2, 3, 0]} />
        </PhysicsWorld>
      </Canvas>
    </>
  )
}
