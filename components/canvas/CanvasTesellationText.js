import React from 'react'
import { Canvas } from '@react-three/fiber'
import TextTesellation from './TextTesellation'


export default function CanvasTextTesellation ({style}) {
    return (
        <Canvas style={style}>
            <React.Suspense fallback={null}>
                <group position={[0,50,-200]}>
                    <TextTesellation text='Jose Angel' position={[0,0,0]} />
                    <TextTesellation text='Dominguez' position={[0,-50,0]} />
                    <TextTesellation text='Espinaco' position={[0,-100,0]} />
                </group>
            </React.Suspense>
        </Canvas>
    )
}