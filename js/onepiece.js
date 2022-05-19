const buttons = document.querySelectorAll('#buttons button')
const content = document.querySelectorAll('#content section')

const activeTab = (index) => {
    content.forEach((item) => {
        item.classList.remove('active')
    })
  content[index].classList.add('active')
}

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => activeTab(index))
})
