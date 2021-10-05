import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"

import Ball from "./Ball"
import Paddle from "./Paddle"
import Enemy from "./Enemy"

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
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
  )
}
