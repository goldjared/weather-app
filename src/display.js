export default function injectDisplay(data) {
  const newData = Object.keys(data);
  const container = document.getElementById('container');
  // for(let i = 1; i < newData.length; i++) {
  //   console.log(newData[i][value])
  // }
  newData.forEach((item) => {
    const entry = document.createElement('div');
    // entry.classList.add(`${data}`);
    entry.textContent = `${item}: ${data[item]}`;
    container.append(entry);
    // console.log(data[item])
    // console.log(item)
  })
}