import React from 'react'


export default function Card({title='Title', description='Here the description'}) {
    return (
        <>
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div>
                    {/* flex justify-center --> to center title */}
                    {/* flex justify-end --> to end title */}
                <h2 class="text-gray-800 text-3xl font-semibold">{title}</h2>
                <p class="mt-2 text-gray-600">{description}</p>
                
            </div>
        </div>
        </>
    )
}