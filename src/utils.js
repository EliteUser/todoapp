export const renderHTML = (html) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  return wrapper.children[0];
};
