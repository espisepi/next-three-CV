import React from 'react'
import { Canvas } from '@react-three/fiber'
import TextTesellation from './TextTesellation'


export default function CanvasTextTesellation ({style}) {
    return (
        <Canvas style={style}>
            <React.Suspense fallback={null}>
                <TextTesellation />
            </React.Suspense>
        </Canvas>
    )
}