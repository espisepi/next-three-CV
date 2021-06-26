// https://stadtteilliebe.de/blog/serverless-contact-form
// https://mailtrap.io/blog/nodemailer-gmail/
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'josdomesp@gmail.com',
        pass: 'Se151uS951' // naturally, replace both with your real credentials or an application-specific password
  }
})


export default async (req, res) => {
    const { senderMail, name, content, recipientMail } = req.body

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
    res.send(mailerRes)

}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `Contact Form Portfolio from ${from}`,
        text,
        replyTo: from
    }
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}