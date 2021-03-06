// https://stadtteilliebe.de/blog/serverless-contact-form
import axios from "axios"

export const sendContactMail = async (recipientMail, name, senderMail, content) => {

    const data = {
        recipientMail,
        name,
        senderMail,
        content
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        // const res = await fetch("/api/contact", {
        //     "method": "POST",
        //     "headers": { "content-type": "application/json" },
        //     "body": JSON.stringify(data)
        //   })
        return res

    } catch (error) {
        return error
    }
}