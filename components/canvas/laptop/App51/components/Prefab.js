import React, { useEffect, useMemo } from 'react'
import { useGLTF, useAnimations, PositionalAudio } from '@react-three/drei'

export function Catedral(props) {
    const {nodes} = useGLTF('catedral.glb');
    return (
    <group {...props} >
        <primitive object={nodes.Scene} />
    </group>
    );
}


export function Helicopter({playAnimation = true, scrollTop, ...props}) {

    // { nodes, materials, animations }
    const {nodes, animations} = useGLTF('helicopter/scene.gltf');
    // { ref, mixer, names, actions, clips } 
    const { ref, actions } = useAnimations(animations)
    
    useEffect(() => {
        if(playAnimation) {
            actions.CINEMA_4D_Main.play()
        } else {
            actions.CINEMA_4D_Main.stop()
        }
    },[playAnimation])

    useEffect(()=>{
        if(scrollTop) {
            actions.CINEMA_4D_Main.play()
            actions.CINEMA_4D_Main.paused = true
            actions.CINEMA_4D_Main.time = scrollTop * 2.0
        }
    },[scrollTop])

    return (
    <group {...props} >
        <primitive ref={ref} object={nodes.RootNode} rotation={[0,Math.PI/2,0]} position={[0,-2,-4]} >
        </primitive>
    </group>
    );
}
