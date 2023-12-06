let wisdom = []
const input = $("#inputText")
const wisdomList = $("#wisdomList")

function addWisdom() {
  const text = input.val()
  
  if (text !== '') {
    wisdom.push({ text })
    input.val('')
    displayWisdom()
    
    if (wisdom.length % 2 === 0) {
      saveToLocalStorage()
    }
  }
}

function displayWisdom() {
    wisdomList.empty()
  
    $.each(wisdom, (index, item) => {
      const wisdomItem = $('<div></div>')
      wisdomItem.attr('id', `wisdom_${index}`)
      wisdomItem.html(`<span class="delete" onclick="deleteWisdom(${index})">❌</span> ${item.text}`)
      wisdomList.append(wisdomItem)
    })
  }
  

function saveToLocalStorage() {
  localStorage.setItem('wisdom', JSON.stringify(wisdom))
}

function loadFromLocalStorage() {
  const savedWisdom = localStorage.getItem('wisdom')
  if (savedWisdom) {
    wisdom = JSON.parse(savedWisdom)
    displayWisdom()
  }
}

function deleteWisdom(index) {
  wisdom.splice(index, 1)
  displayWisdom()
  saveToLocalStorage()
}

function clearWisdom() {
  wisdom = []
  localStorage.removeItem('wisdom')
  displayWisdom()
  saveToLocalStorage()
}

window.onload = function () {
  loadFromLocalStorage()
}