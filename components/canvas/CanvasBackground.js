import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import TextTesellation from './TextTesellation'

export default function CanvasBackground({style}) {
    return (
        <Canvas style={style}>
             <Stars />
        </Canvas>
    )
}

