import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three'

import OrbitControlsFollowObject from './OrbitControlsFollowObject';


export default function ControlsManager({ mode = 0, autoRotate = false, physicsVisible  }) {

    
        return <OrbitControls target={new Vector3(-60,0,60)} autoRotate={true} autoRotateSpeed={0.5}  />
        // return <OrbitControlsFollowObject nameFollowObject='groupCurve_boxCurve' nameLookAtObject={null} autoRotate={autoRotate} enablePan={false} enableZoom={true} />;
    
}