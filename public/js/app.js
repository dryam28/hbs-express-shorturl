const copyButtons = document.getElementsByClassName('btn-copy');

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', e => {
    const url = `http://localhost:5000/${e.target.dataset.short}`;

    copyButtons[i].innerHTML =
      '<i class="bi bi-clipboard-check text-success"></i> Copiar';

    setTimeout(() => {
      copyButtons[i].innerHTML =
        '<i class="bi bi-clipboard text-white"></i> Copiar';
    }, 3000);

    navigator.clipboard
      .writeText(url)
      .then(() => console.log('Text copied correctly'))
      .catch(err => console.log('Something went wrong ' + err));
  });
}
