window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#search').addEventListener('click', function () {
    document.querySelector('#search_block').classList.toggle('search-block-active')
    document.querySelector('#search').classList.toggle('search-active')
  })
})
