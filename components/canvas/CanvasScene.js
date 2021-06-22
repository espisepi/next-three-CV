import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export function Scene() {
    return (
        <>
            <Stars />
        </>
    )
}

export default function CanvasScene({style}) {
    return (
        <Canvas style={style}>
            <Scene />
        </Canvas>
    )
}