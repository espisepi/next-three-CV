// https://stadtteilliebe.de/blog/serverless-contact-form
import { useCallback, useState } from 'react'
import TextareaAutosize from "react-autosize-textarea"
import { sendContactMail } from "../../../helpers/sendContactMail" 


export default function Contact() {
    
    const [state, setState] = useState({
        formButtonDisabled: false,
        formButtonText: "Send",
        name: "",
        mail: "",
        formContent: ""
    })

    const { formButtonDisabled, formButtonText, name, mail, formContent } = state

    const btnClass = formButtonDisabled ? "disabled" : ""

    // Methods ------------
    const onStateChange = useCallback((e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    },[state])
    // const onNameChange = useCallback((e)=>{
    //     console.log('oli  ' + e.target.value)
    //     setState({
    //         ...state,
    //         name: e.target.value
    //     })
    // },[state])
    // const onMailChange = useCallback((e)=>{
    //     setState({
    //         ...state,
    //         mail: e.target.value
    //     })
    // },[state])
    // const onFormContentChange = useCallback((e)=>{
    //     setState({
    //         ...state,
    //         formContent: e.target.value
    //     })
    // },[state])

    const submitContactForm = useCallback( async (e) => {
        e.preventDefault()

        const recipientMail = 'josdomesp@gmail.com';
        const { name, mail, formContent } = state;

        const res = await sendContactMail(recipientMail, name, mail, formContent)
        if(res.status < 300) {
            setState({
                formButtonDisabled: true,
                formButtonText: 'Thanks for your message',
                name: "",
                mail: "",
                formContent: ""
            })
        } else {
            setState({
                ...state,
                formButtonText: "Please fill out all fields"
            })
        }

    },[state, setState])

    return (
        <div className='w-full max-w-lg bg-transparent rounded m-auto'>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
                        <h2 className="text-3xl">Name</h2>
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading--tight focus:outline-none focus:bg-white  "
                        type="text"
                        placeholder="Name"
                        value={name}
                        name="name"
                        id="name" /* <label for="name"> */
                        onChange={onStateChange} 
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="mail">
                        <h2 className="text-3xl">E-mail</h2>
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading--tight focus:outline-none focus:bg-white  "
                        type="email"
                        placeholder="E-Mail"
                        value={mail}
                        name="mail"
                        id="mail"
                        onChange={onStateChange} 
                    />
                </div>
            </div>

            <div text-white="flex flex-wrap -mx-3 mb-6">
                <div text-white="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                            <h2 className="text-3xl">Message</h2>
                        </label>
                        <TextareaAutosize
                            value={formContent}
                            name="formContent"
                            id="message"
                            placeholder="Message"
                            onChange={onStateChange}
                            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            /> 

                    </div>
                    <div className="md:flex md:items-center">
                        <div text-white="md:w-1/3">
                            <button
                                className={`${btnClass} shadow bg-blue-400 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded `}
                                type="submit"
                                onClick={submitContactForm}
                                disabled={formButtonDisabled}>

                            {formButtonText}
                        </button>
                       </div>
                    </div>
                </div>

            <style jsx>{`
                .disabled {
                    background-color: #fff;
                    color: #121212;
                    cursor: auto;
                    padding-left: 0px;
                }
            `}</style>
        </div>
    )
}