import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { SceneModel } from './SceneModel'

export default function Animation(props) {
  const step = props.step

  const [modelPath, setModelPath] = useState('/Jeep copy.gltf')
  const [modelScale, setModelScale] = useState(5)

  useEffect(() => {
    if (step === 1) {
      setModelPath('/Jeep copy.gltf')
      setModelScale(3.3)
    } else if (step === 2) {
      setModelPath('/bugatti_copy.gltf')
      setModelScale(5)
    } else if (step === 3) {
      setModelPath('/monster_car_blue.gltf')
      setModelScale(3.5)
    }
  }, [step])
  console.log('Current Step111:', step)
  return (
    <div className="flex pt-[34px] px-[70px]">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <Environment preset="sunset" />
        <OrbitControls />
        <SceneModel modelPath={modelPath} scale={modelScale} />
      </Canvas>
    </div>
  )
}
