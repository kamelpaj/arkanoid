import { Canvas } from "@react-three/fiber"
import { Text } from "@react-three/drei"

import { useStore } from "./store"

import PhysicsWorld from "./PhysicsWorld"
import Ball from "./Ball"
import Paddle from "./Paddle"
import Enemy from "./Enemy"
import Wall from "./Wall"

export default function App() {
  const score = useStore((state) => state.score)

  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 100 }}>
      <Text
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        fontSize={1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"left"}
        anchorX="center"
        anchorY="middle">
        Score: {score}
      </Text>
      <Text fontSize={0.3} maxWidth={200} lineHeight={1} letterSpacing={0.02} textAlign={"left"} anchorX="center" anchorY="middle" position={[0, -1, 0]}>
        Hold space to slow down gravity
      </Text>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <PhysicsWorld>
        <Ball />
        <Paddle />
        <Enemy color="orange" position={[2, 1, 0]} />
        <Enemy color="hotpink" position={[-2, 3, 0]} />
        
        {/* <Wall color={"blue"} position={[0, 0, 0]} rotation={[0, 0, 0]} />
        <Wall color={"blue"} position={[6, 0, 0]} rotation={[0, -0.9, 0]} />
        <Wall color={"blue"} position={[0, 6, 0]} rotation={[0.9, 0, 0]} /> */}
        {/* <Wall color={"blue"} position={[0, -6, 0]} rotation={[-0.9, 0, 0]} /> */}
      </PhysicsWorld>
    </Canvas>
  )
}
