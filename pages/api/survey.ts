// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { ResponseSurveyType } from '@Types';
import type { NextApiResponse, NextApiRequest } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseSurveyType>) {
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
    subject: `Результат опроса с visimo.io`,
    html: req.body.survey,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.send({
      status: 'success',
      message: {
        ru: 'Ваше сообщение успешно отправленно!',
        en: 'Your message was successful sended!',
        fi: 'Viestisi lähetys onnistui!',
        sv: 'Ditt meddelande har skickats!',
      },
    });
  } catch (error) {
    res.send({
      status: 'error',
      message: {
        en: 'Something went wrong!',
        ru: 'Что-то пошло не так!',
        fi: 'Jotain meni pieleen!',
        sv: 'Något gick fel!',
      },
    });
  }
}
