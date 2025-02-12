// components/ModelComponent.jsx
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
}

export default function ModelComponent() {
  return (
    <div className="fixed top-0 right-0 w-full md:w-1/2 h-screen z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Model url="/path/to/your/model.glb" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}