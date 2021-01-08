document.getElementById("header__burger").onclick = () => {
    document.getElementById("header__burger").classList.toggle('active');
    document.getElementById("header__menu").classList.toggle('active');
    document.getElementById("header__social").classList.toggle('active');
  }