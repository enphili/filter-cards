'use strict';
const cartWrapper = document.querySelector('.cart-wrapper'),
      tagsWrapper = document.querySelector('.filter-wrapper'),
      cards = cartWrapper.querySelectorAll('.card');

const selectedTags = new Set();

const activeTag = e => {
  const target = e.target;
  if (target.classList.contains('filter')) {
    target.classList.toggle('checked');
    const tag = target.dataset.color;
    target.classList.contains('checked') ? selectedTags.add(tag) : selectedTags.delete(tag);
  }
  if (selectedTags.size > 0) {
		cartWrapper.textContent = '';
		const newcards = [...cards].filter(card => selectedTags.has(card.dataset.color));
		cartWrapper.append(...newcards);
  } else if (selectedTags.size <= 0) {
		cartWrapper.textContent = '';
		cartWrapper.append(...cards);
	}
};

tagsWrapper.addEventListener('click', activeTag);
