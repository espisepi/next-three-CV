import React from 'react'


const Card = React.forwardRef( ({title='Title', description, style, className}, ref) => {
    return (
        <>
        <div ref={ref} style={style} className={`max-w-md py-8 px-8 bg-transparent shadow-lg rounded-lg my-20 bg-opacity-90 ${className}`}>
            <div>
                    {/* flex justify-center --> to center title */}
                    {/* flex justify-end --> to end title */}
                <h2 className="text-white text-3xl font-semibold">{title}</h2>
                { description && <p className="mt-2 text-gray-600">{description}</p> }
                
            </div>
        </div>
        </>
    )
})

export default Card;