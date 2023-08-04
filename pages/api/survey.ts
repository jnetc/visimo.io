// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { ResponseMessageType } from '@Types';
import type { NextApiResponse, NextApiRequest } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseMessageType>) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"visimo.io" ${process.env.NEXT_PUBLIC_GMAIL}`,
    to: process.env.NEXT_PUBLIC_GMAIL,
    subject: `Результат опроса visimo.io`,
    html: req.body.survey,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.send({ status: 'success' });
  } catch (error) {
    res.send({ status: 'error' });
  }
}
