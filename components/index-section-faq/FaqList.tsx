import type { PointerEvent, KeyboardEvent } from 'react';
import ReactMarkdown from 'react-markdown';
// Hook
import { useStore } from '@Hooks/useStore';

export default function FaqList() {
  const { data } = useStore();

  function selectItem(event: PointerEvent<HTMLElement> | KeyboardEvent<HTMLElement>) {
    const list = event.target as HTMLElement;
    const liElement = list.closest('li')!;
    const items = list.closest('ul')?.querySelectorAll('.faq__item');

    if (!liElement ?? !items) return; // prevent error if click on padding side

    items.forEach(el => {
      // Collapse accordion if data-key is not equal to target data-key
      if (el.classList.contains('selected') && el.getAttribute('data-key') !== liElement.getAttribute('data-key')) {
        el.classList.remove('selected');
      }
    });
    liElement.classList.toggle('selected');
  }

  const list = data?.faqSection.faqs.map(list => {
    return (
      <li key={list.id} className="faq__item retro-box" data-key={list.id}>
        <h3 className="faq__item-title" tabIndex={0} onPointerUp={selectItem} onKeyDown={selectItem}>
          {list.question}
          <span className="faq__item-icon" />
        </h3>
        <ReactMarkdown className="faq__item-desc markdown" children={list.answer} />
      </li>
    );
  });

  return <ul className="faq__list">{list}</ul>;
}
