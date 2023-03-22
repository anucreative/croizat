import 'fs'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string)

export type SendEmailArgs = {
  name: string
  email: string
  comment: string
}

export const sendEmail = async (data: SendEmailArgs) => {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "webmaster@chambery-escalade.fr",
      from: data.email,
      subject: `Contact form`,
      html: data.comment,
    });
  } catch (error) {
    console.log(error);
  }
}
