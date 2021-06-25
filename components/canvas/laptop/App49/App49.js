import React, { Suspense } from 'react'
import { Stars } from '@react-three/drei'

import Loading from './components/Loading'
import GridFloor from './components/GridFloor'
import TitleText from './components/TitleText'

export function Scene() {

    return(
        <>
        <ambientLight />
        <pointLight position={[0,-3,5]}  />
        <Stars radius={200} />
        <Suspense fallback={<Loading />}>
            <group name="groupPrincipal" position={[0,0,2.5]}>
                <TitleText />
                <GridFloor />
                {/* <FullScreen position={[0,2.5,0]} scale={[10,2,1]}/> Easter Egg FullScreen */}
            </group>
            <group name="floor" position={[0,0,2.51]}>
                <GridFloor />
            </group>
        </Suspense>
        </>
    );
}