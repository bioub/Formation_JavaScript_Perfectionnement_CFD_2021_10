export function prepend(parentEl: Element, childEl: Element) {
  if (parentEl.children.length) {
    parentEl.insertBefore(childEl, parentEl.firstElementChild);
  } else {
    parentEl.appendChild(childEl);
  }
}

export function remove(el: Element) {
  return el.parentElement.removeChild(el);
}
