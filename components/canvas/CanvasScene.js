import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import TextTesellation from './TextTesellation'

export function Scene() {
    return (
        <>
            <Stars />
            <React.Suspense fallback={null}>
                <TextTesellation />
            </React.Suspense>
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