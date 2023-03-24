export {tabsColor}
function tabsColor() {
  let tabs = document.querySelector('.tabs')

  tabs.addEventListener('click', (event) => {
    if (event.target.classList.contains('tabs__list-item')) {
      tabs.childNodes.forEach(item => {
        if (item.childNodes[1] != undefined) {
          item.childNodes[1].setAttribute('class', 'tabs__list-item')
        }
      })
      event.target.setAttribute('class', 'tabs__list-item bgColor')
    }
  })
}