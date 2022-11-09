const container = document.getElementById("container")
const loading = document.getElementById("loading")

container.classList.add('hidden')


setTimeout(() => {
  loading.classList.add('hidden')
  container.classList.remove('hidden')
  container.classList.add('show')
}, 3000)