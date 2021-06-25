import React from 'react'
import { Canvas } from '@react-three/fiber'
import TextTesellation from './TextTesellation'


export default function CanvasTextTesellation ({style, size}) {
    return (
        <Canvas className='canvas_tesellation' style={style}>
            <React.Suspense fallback={null}>
                <group position={[0,50,-200]}>
                    <TextTesellation size={size} text='Jose Angel' position={[0,0,0]} />
                    <TextTesellation size={size} text='Dominguez' position={[0,-50,0]} />
                    <TextTesellation size={size} text='Espinaco' position={[0,-100,0]} />
                </group>
            </React.Suspense>
        </Canvas>
    )
}