import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Box from "../components/Box"

export function BoxesPage() {
  return (
    <div className="w-full h-full  absolute top-0 left-0  right-0 bottom-0 opacity-50">
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
