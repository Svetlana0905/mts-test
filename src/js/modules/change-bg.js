function changeBg() {
  
  const changeBtn = document.getElementById('change-color-button');
  const body = document.querySelector('.container__first-screen');

  changeBtn.onclick = function () {
    body.classList.toggle('secondary');
  };
}

export default changeBg;