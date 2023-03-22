import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string)

const SENDGRID_SENDER_ADDRESS = "webmaster@chambery-escalade.fr"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body)

  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: SENDGRID_SENDER_ADDRESS,
      from: SENDGRID_SENDER_ADDRESS,
      subject: `Contact form`,
      html: `<p>From: ${body.name} (${body.email})<p><div>${body.comment}</div>`,
    });

    res.status(200)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('Oops', error?.response?.body?.errors);

    res.status(500).json({ error })
  }
}
