// https://threejs.org/examples/?q=tes#webgl_modifier_tessellation
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_modifier_tessellation.html
import React, { useEffect, useState } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three'
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js';

const vertexShader = `
            uniform float amplitude;

			attribute vec3 customColor;
			attribute vec3 displacement;

			varying vec3 vNormal;
			varying vec3 vColor;

			void main() {

				vNormal = normal;
				vColor = customColor;

				vec3 newPosition = position + normal * amplitude * displacement;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

			}
`
const fragmentShader = `
            varying vec3 vNormal;
			varying vec3 vColor;

			void main() {

				const float ambient = 0.4;

				vec3 light = vec3( 1.0 );
				light = normalize( light );

				float directional = max( dot( vNormal, light ), 0.0 );

				gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );

			}

`

export default function TextTesellation(){

    const font = useLoader(THREE.FontLoader, 'helvetiker_bold.typeface.json')

    const { scene } = useThree()

    const [uniforms, setUniforms] = useState({})

    useEffect(()=>{
        let geometry = new THREE.TextGeometry( 'JOSEANGEL', {

            font: font,

            size: 40,
            height: 5,
            curveSegments: 3,

            bevelThickness: 2,
            bevelSize: 1,
            bevelEnabled: true
        } );

        geometry.center();

        const tessellateModifier = new TessellateModifier( 8, 6 );
        geometry = tessellateModifier.modify( geometry );

        //

        const numFaces = geometry.attributes.position.count / 3;

        const colors = new Float32Array( numFaces * 3 * 3 );
        const displacement = new Float32Array( numFaces * 3 * 3 );

        const color = new THREE.Color();

        for ( let f = 0; f < numFaces; f ++ ) {

            const index = 9 * f;

            const h = 0.2 * Math.random();
            const s = 0.5 + 0.5 * Math.random();
            const l = 0.5 + 0.5 * Math.random();

            color.setHSL( h, s, l );

            const d = 10 * ( 0.5 - Math.random() );

            for ( let i = 0; i < 3; i ++ ) {

                colors[ index + ( 3 * i ) ] = color.r;
                colors[ index + ( 3 * i ) + 1 ] = color.g;
                colors[ index + ( 3 * i ) + 2 ] = color.b;

                displacement[ index + ( 3 * i ) ] = d;
                displacement[ index + ( 3 * i ) + 1 ] = d;
                displacement[ index + ( 3 * i ) + 2 ] = d;

            }

        }

        geometry.setAttribute( 'customColor', new THREE.BufferAttribute( colors, 3 ) );
        geometry.setAttribute( 'displacement', new THREE.BufferAttribute( displacement, 3 ) );

        //

        const uniforms = {

            amplitude: { value: 0.0 }

        };
        
        setUniforms(uniforms)

        const shaderMaterial = new THREE.ShaderMaterial( {

            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader

        } );

        //

        const mesh = new THREE.Mesh( geometry, shaderMaterial );
        mesh.position.set(0,0,-200)
        mesh.rotation.set(0,0.5,0)

        scene.add( mesh );

        return () => {
            scene.remove( mesh )
        }
    },[])

    useFrame(({clock})=>{
        if(uniforms.amplitude) {
            uniforms.amplitude.value = 1.0 + Math.sin( clock.getElapsedTime() * 0.5 );
        }
    })

    return null
}