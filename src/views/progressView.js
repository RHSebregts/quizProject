/**
 * Create an progress element
 * @returns {Element}
 */
export const createProgressElement = (assignedClass = '') => {
  const element = document.createElement('li');
  element.className = assignedClass;

  return element;
};
