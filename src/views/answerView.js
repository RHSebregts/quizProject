/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.dataset.key = `${key}`;
  element.innerHTML = String.raw`
    ${answerText}
  `;
  return element;
};
