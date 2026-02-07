import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

function StarField(props) {
  const ref = useRef();
  // Generate 5000 random points within a sphere of radius 1.2
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    // Subtle rotation over time
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const SpaceBackground = ({ children }) => {
  return (
    <div className="relative w-full h-fit bg-[#030617] overflow-hidden">
      {/* Three.js Canvas for the Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
          {/* Helper for larger, twinkling stars */}
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
        </Canvas>
      </div>

      {/* Blue Radial Gradient to match your image */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15) 0%, transparent 80%)'
        }}
      />

      {/* UI Content Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SpaceBackground;