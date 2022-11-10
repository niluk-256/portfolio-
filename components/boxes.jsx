import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Box } from "./Box"

export function BoxesPage() {
  return (
    <div className="w-1/2 h-screen border-transparent  absolute top-0 left-0  opacity-50  ">
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Box position={[10, 0, 0]} />
        <Box position={[-10, 0, 0]} />
        <Box position={[0, 10, 0]} />
        <Box position={[0, -10, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
