const articles = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const btnClose = aside.querySelector('.btnClose');
const asideH2 = aside.querySelector('h2');
const asideP = aside.querySelector('p');
const asideSpan = aside.querySelector('span');
const asideUl = aside.querySelector('ul');

articles.forEach(article => {
  article.addEventListener('mouseenter', e => {
    e.currentTarget.querySelector('video').play();
  });

  article.addEventListener('mouseleave', e => {
    e.currentTarget.querySelector('video').pause();
  });

  article.addEventListener('click', e => {
    // Remove the 'hover' class from all li elements
    const liElements = e.currentTarget.querySelectorAll('li');
    liElements.forEach(li => {
      li.classList.remove('hover');
    });

    // Add the 'hover' class to the clicked li element
    e.target.classList.add('hover');

    const tit = e.currentTarget.querySelector('h2').innerText;
    const con = e.currentTarget.querySelector('p').innerText;
    const spanText = e.currentTarget.querySelector('span').innerText;
    const ulHTML = e.currentTarget.querySelector('ul').innerHTML;

    asideH2.innerText = tit;
    asideP.innerText = con;
    asideSpan.innerText = spanText;
    asideUl.innerHTML = ulHTML;

    aside.classList.add('on');
  });

  btnClose.addEventListener('click', () => {
    aside.classList.remove('on');
  });
});
