const form = document.querySelector('form');
const formModal = form.querySelector('.form__modal');
const formSubmitButton = form.querySelector('.form__button');
const buttonClose = form.querySelector('.form__modal-button');
const formOverlay = form.querySelector('.form__modal-overlay');

formSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const title = formModal.querySelector('.form__modal-title');
  const message = formModal.querySelector('.form__modal-message');
  const inputs = document.querySelectorAll('input');
  const info = {
    'error' : {
      'title' : 'Что-то пошло не так!',
      'message' : 'Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить',
      'buttonText' : 'Ок'
    },
    'success' : {
      'title' : 'Ваш отзыв отправлен!',
      'message' : 'Спасибо за ваше участие, ваш отзыв уже поступил к нам. <br>В ближайшее время мы опубликуем его на сайте.',
      'buttonText' : 'Закрыть окно'
    }
  }
  const isValid = form. checkValidity ();
  const text = isValid? info.success : info.error;

  title.innerHTML = text.title;
  message.innerHTML = text.message;
  buttonClose.innerHTML = text.buttonText;
  formModal.classList.toggle('form__modal--success', isValid);

  formOverlay.classList.add('form__modal-overlay--opened');
  formModal.classList.add('form__modal--opened');
});

const modalClose = () => {
  formModal.classList.remove('form__modal--opened');
  formModal.classList.remove('form__modal--success');
  formOverlay.classList.remove('form__modal-overlay--opened');
}

/* закрытие окон */
formOverlay.addEventListener('click', modalClose);
buttonClose.addEventListener('click', modalClose);

/* закрытие по ESC */
document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    modalClose();
  };
}, false);
