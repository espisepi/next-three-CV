// https://stadtteilliebe.de/blog/serverless-contact-form
// https://mailtrap.io/blog/nodemailer-gmail/
// https://dev.to/markdrew53/integrating-sendgrid-with-next-js-4f5m
// https://dev.to/kennymark/how-to-send-serverless-emails-with-next-js-and-sengrid-40lj

import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.EMAIL_API_KEY);
console.log(process.env.EMAIL_API_KEY)

export default async (req, res) => {
    const { senderMail, name, content, recipientMail } = req.body

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const msg = {
        from: 'sepinaco@gmail.com',
        to: `josdomesp@gmail.com`,
        subject: `Contact Form Portfolio from ${senderMail}`,
        name,
        text: content,
    };

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
    } catch (error) {
        console.log(error.response.body)
        res.status(500).json({ error: 'Error sending email' })
    }

}