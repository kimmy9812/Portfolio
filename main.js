const articles = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const btnClose = aside.querySelector('.btnClose');
const asideH2 = aside.querySelector('h2');
const asideP = aside.querySelector('p');
const asideSpan = aside.querySelector('span');
const asideUl = aside.querySelector('ul');
const aranDiv = document.querySelector('.aran'); // aran div 요소
const dolphinDiv = document.querySelector('.dolphin'); // dolphin div 요소

// 페이지 최초 진입시에도 aranDiv 표시
aranDiv.style.display = 'block';

asideUl.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    // 클릭한 <li> 요소의 인덱스를 가져옵니다.
    const liIndex = Array.from(asideUl.children).indexOf(e.target);

    // 팝업(div) 표시 또는 숨기기
    if (liIndex === 0) {
      aranDiv.style.display = 'block';
      dolphinDiv.style.display = 'none';
    } else if (liIndex === 1) {
      aranDiv.style.display = 'none';
      dolphinDiv.style.display = 'block';
    } else {
      aranDiv.style.display = 'none';
      dolphinDiv.style.display = 'none';
    }
  }
});

btnClose.addEventListener('click', () => {
  aside.classList.remove('on');
  aranDiv.style.display = 'none'; // 팝업 닫을 때 모든 팝업 숨김
  dolphinDiv.style.display = 'none';
});

articles.forEach((article, index) => {
  article.addEventListener('mouseenter', e => {
    e.currentTarget.querySelector('video').play();
  });

  article.addEventListener('mouseleave', e => {
    e.currentTarget.querySelector('video').pause();
  });

  article.addEventListener('click', e => {
    // Remove the 'hover' class from all li elements
    const liElements = asideUl.querySelectorAll('li');
    liElements.forEach(li => {
      li.classList.remove('hover');
    });

    // Add the 'hover' class to the clicked li element
    asideUl.children[index].classList.add('hover');

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
});