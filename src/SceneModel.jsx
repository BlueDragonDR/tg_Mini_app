import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SceneModel(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/Jeep copy.gltf') // Make sure this file is in /public
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play()
      })
    }
  }, [actions])

  useFrame((_, delta) => mixer?.update(delta))

  return <primitive ref={group} object={scene} {...props} />
}