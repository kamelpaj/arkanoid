import React from "react"
import { Physics } from "@react-three/cannon"
import { useStore } from "./store"
import { useFrame } from "@react-three/fiber"
import { useControls } from "./utils/useControls"

const PhysicsWorld = ({ children }) => {
  const gravity = useStore((state) => state.gravity)
  const setGravity = useStore((state) => state.setGravity)
  const controls = useControls()
  
  useFrame(() => {
    const { slowMo } = controls.current
    slowMo ? setGravity(-1) : setGravity(-30)
    console.log(slowMo)
  })

  return (
    <Physics gravity={[0, gravity, 0]} defaultContactMaterial={{ restitution: 1.1 }}>
      {children}
    </Physics>
  )
}

export default PhysicsWorld
