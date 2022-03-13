// const domainEl = document.querySelector('.domain__selected')
const domainEl = document.querySelector('.domain')
const domainListEl = document.querySelector('.domain__list')

let isActiveDomainList = false
domainEl.addEventListener('click', function () {
  isActiveDomainList = !isActiveDomainList // transition
  if(isActiveDomainList) {
    // active domain list
    domainListEl.classList.add('active')
  } else {
    // hide domain list
    domainListEl.classList.remove('active')
  }
});