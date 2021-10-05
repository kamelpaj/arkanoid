import { useThree } from "@react-three/fiber"
import { useBox } from "@react-three/cannon"

export default function Enemy({ args = [2, 0.5, 1], color, ...props }) {
  const { scene } = useThree()
  const [ref] = useBox(() => ({
    args,
    ...props,
    onCollide: () => {
      /* ref.current.geometry.dispose()
      ref.current.material.dispose()
      scene.remove(ref.current) */
      console.log(ref.current)
    },
  }))
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
