
Promise.all([
  customElements.whenDefined('sl-button')
  , customElements.whenDefined('sl-input')
]).then(() => {
  document.querySelector('#nav-toggle-button').addEventListener('click', event => {
    document.querySelector('#site-aside-left').classList.toggle('hide-mobile');
    document.querySelector('#nav-toggle-button').classList.add("hide-mobile");
  });
  document.querySelector('#site-aside-left-close-button').addEventListener('click', event => {
    document.querySelector('#site-aside-left').classList.toggle('hide-mobile');
    document.querySelector('#nav-toggle-button').classList.remove("hide-mobile");
  });
});
