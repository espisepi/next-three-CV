import React from 'react'


const Card = React.forwardRef( ({title='Title', description='Here the description', style}, ref) => {
    return (
        <>
        <div ref={ref} style={style} className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 bg-opacity-90">
            <div>
                    {/* flex justify-center --> to center title */}
                    {/* flex justify-end --> to end title */}
                <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
                
            </div>
        </div>
        </>
    )
})

export default Card;