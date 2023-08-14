import setData from '@Helpers/setData';
// Types
import type { FormEvent } from 'react';
import type { ISurveyContext, ResponseMessageType } from '@Types';

export default async function sendSurvey(event: FormEvent<HTMLFormElement>, arr: ISurveyContext[]) {
  event.preventDefault();

  const sorted = arr
    .sort((a, b) => {
      if (a.order > b.order) return 1;
      return -1;
    })
    .map(q => {
      return `
        <li style="border-bottom: 1px solid black;">
          <h2 style="font-size: 1.5em;">${q.title}</h2>
          <p style="font-size: 1.1em;">Ответ: ${q.answer}</p>
          <p style="font-size: 1.1em;">${q.customerAnswer && `Дополнение: ${q.customerAnswer}`}</p>
        </li>`;
    })
    .toString()
    .replaceAll(',', '');

  try {
    const response = await fetch(`/api/survey`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ data: setData(), survey: `<ol style="padding: 0">${sorted}</ol>` }),
    });

    const data: ResponseMessageType = await response.json();

    if (data.status === 'success') {
      localStorage.setItem('survey', 'true');
    }
    return { ...data } as const;
  } catch (error) {
    return { status: 'error' } as const;
  }
}
