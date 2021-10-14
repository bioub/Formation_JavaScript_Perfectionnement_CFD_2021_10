/**
 * @param {Element} parentEl
 * @param {Element} childEl
 */
export function prepend(parentEl, childEl) {
  if (parentEl.children.length) {
    parentEl.insertBefore(childEl, parentEl.firstElementChild);
  } else {
    parentEl.appendChild(childEl);
  }
}

/**
 * @param {Element} el
 */
export function remove(el) {
  return el.parentElement.removeChild(el);
}
