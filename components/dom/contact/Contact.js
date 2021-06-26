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
        <div style={{backgroundColor:'#dddddd'}}>
            <div className="grid">
                <div className="col-8">
                    <h2>Contact form title</h2>
                    <p>Contact form introduction text</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        name="name"
                        onChange={onStateChange} 
                    />
                </div>
                <div className="col-4">
                    <input
                        type="email"
                        placeholder="E-Mail"
                        value={mail}
                        name="mail"
                        onChange={onStateChange} 
                    />
                </div>
            </div>
            <div className="grid">
                    <div className="col-8">
                        <TextareaAutosize
                            value={formContent}
                            name="formContent"
                            placeholder="Message"
                            onChange={onStateChange}
                            style={{
                                minHeight: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "0px",
                                margin: "8px 0px",
                                resize: "none",
                                padding: "0px",
                                paddingBottom: "14px",
                                WebkitAppearance: "none",
                                MozAppearance: "none"
                            }} /> 

                    </div>
                    <div className="col-8">
                        <button
                            className={btnClass}
                            type="submit"
                            onClick={submitContactForm}
                            disabled={formButtonDisabled}>

                           {formButtonText}
                       </button>
                    </div>
                </div>

            <style jsx>{`
            
                .grid {
                    display: flex;
                    flex-direction: row;
                    flew-wrap: wrap;
                    max-width: 1280px;
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 12px;
                    padding-right: 12px;
                }

                .col-4,
                .col-8 {
                    padding: 8px 12px;
                    box-sizing: border-box;
                }

                .col-4 {
                    flex-basis: 50%;
                    max-width: 50%;
                }

                .col-8 {
                    flex-basis: 100%;
                    max-width: 100%;
                }

                @media only screen and (max-width: 768px) {
                    .grid {
                        flex-direction: column;
                        padding-left: 0px;
                        padding-right: 0px;
                    }
                    .col-4,
                    .col-8 {
                        padding-left: 24px;
                        padding-right: 24px;
                        flex-basis: 100%;
                        max-width: 100%;
                    }
                }
                input[type=text], input[type=email] {
                    height: 48px;
                    width: 100%;
                    border: none;
                    border-radius: 0px;
                    border-bottom: 1px solid #121212;
                    margin: 8px 0px;
                    box-shadow: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    padding: 0px;
                    outline: none;
                }

                ::placeholder {
                    color: #C8CBCE;
                }

                ::-ms-input-placeholder {
                    color: #C8CBCE;
                }

                button {
                    padding: 0px 24px;
                    height: 48px;
                    background-color: #F83850;
                    margin: 16px 0px;
                    border: none;
                    border-radius: 0px;
                    cursor: pointer;
                    color: #fff;
                }

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