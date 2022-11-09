const container = document.getElementById("container")
const loading = document.getElementById("loading")

container.classList.add('hidden')


const timeid = setTimeout(() => {
  loading.style.display = 'none'
  container.classList.remove('hidden')
  container.classList.add('show')
  clearTimeout(timeid)
}, 3000)