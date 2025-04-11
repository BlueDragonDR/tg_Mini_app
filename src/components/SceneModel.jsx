import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SceneModel({ modelPath, ...props }) {
  const group = useRef()

  const { scene, animations } = useGLTF(modelPath || '/Jeep copy.gltf') // Fallback to prevent error
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach(action => action.reset().play())
    }
  }, [actions])

  useFrame((_, delta) => mixer?.update(delta))

  if (!modelPath) return null  // Safe conditional return after hooks

  return <primitive ref={group} object={scene} {...props} />
}