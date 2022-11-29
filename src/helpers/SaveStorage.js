export const saveStorage = (key, item) => {
  let elements = JSON.parse(localStorage.getItem(key));

  if (Array.isArray(elements)) {
    elements.push(item);
  } else {
    elements = [item];
  }

  localStorage.setItem(key, JSON.stringify(elements));

  return item;
};
