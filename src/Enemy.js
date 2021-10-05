import { useThree } from "@react-three/fiber"
import { useBox } from "@react-three/cannon"
import { useStore } from "./store"

export default function Enemy({ args = [2, 0.5, 1], color, ...props }) {
  const increaseScore = useStore((state) => state.increaseScore)
  const { scene } = useThree()
  const [ref] = useBox(() => ({
    args,
    ...props,
    onCollide: () => {
      /* ref.current.geometry.dispose()
      ref.current.material.dispose()
      scene.remove(ref.current) */
      console.log(ref.current)
      increaseScore()
    },
  }))
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
