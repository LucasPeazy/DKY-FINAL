window.onscroll = () => {
    if (window.scrollY > 92) {
      document.querySelector('.block__row').classList.remove('hide')
      document.querySelector('.block__row').classList.remove('fadeOut')
      document.querySelector('.block__row').classList.add('fadeIn')
    } else if (window.scrollY < 92) {
      document.querySelector('.block__row').classList.add('hide')
      document.querySelector('.block__row').classList.add('fadeOut')
    }
  }
  