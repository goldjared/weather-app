export default function injectDisplay(data) {
  const newData = Object.keys(data);
  const container = document.getElementById('container');
  (function clearDisplay() {
    while(container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  }());
  newData.forEach((item) => {
    if(item === 'currentIcon') {
      const icon = document.createElement('img');
      icon.setAttribute('src', data[item]);
      container.append(icon);
      return;
    }
    const entry = document.createElement('div');

    entry.textContent = `${data[item]}`;
    container.append(entry);
  })
}

