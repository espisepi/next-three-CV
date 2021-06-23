import React, {useRef, useEffect, useLayoutEffect} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import * as THREE from 'three'

export default function Camera(props) {
    const cameraRef = useRef()
    const set = useThree(({ set }) => set)
    const size = useThree(({ size }) => size)
    
    useLayoutEffect(() => {
        if (cameraRef.current) {
          cameraRef.current.aspect = size.width / size.height
          cameraRef.current.updateProjectionMatrix()
        }
      }, [size, props])
    
      useLayoutEffect(() => {
        set({ camera: cameraRef.current })
    }, [])

    let prevValue = 0.0
    let currentValue = 0.0
    let delta = currentValue - prevValue
    let rotX = 0.0
    useFrame(()=>{
        if(cameraRef.current){
            currentValue = window.scrollY
            rotX = cameraRef.current.rotation.x
            if(currentValue !== prevValue) {
                delta = currentValue - prevValue
                cameraRef.current.rotation.x = THREE.MathUtils.lerp(rotX, rotX + Math.sin(delta * 0.005), 0.1)
                prevValue = currentValue
            }
        }
    })
    
    return <perspectiveCamera ref={cameraRef} />
}