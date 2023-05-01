export default function cityRequester() {
  const input = document.getElementById('search');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
  })
}