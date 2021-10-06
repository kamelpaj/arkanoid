import React from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Physics, Debug, usePlane } from "@react-three/cannon"
import { useStore } from "./store"
import { useControls } from "./utils/useControls"

const PhysicsWorld = ({ children }) => {
  const gravity = useStore((state) => state.gravity)
  const setGravity = useStore((state) => state.setGravity)
  const controls = useControls()
  const { viewport } = useThree()

  useFrame(() => {
    const { slowMo } = controls.current
    slowMo ? setGravity(-1) : setGravity(-30)
  })

  return (
    <Physics gravity={[0, gravity, 0]} defaultContactMaterial={{ restitution: 1.1 }}>
      <Debug scale={1.1}>{children}</Debug>
    </Physics>
  )
}

export default PhysicsWorld
