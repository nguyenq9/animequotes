function slotNum(){
  return Math.floor(Math.random() * 4)
}

function getAnimeQuote() {
  var URL
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if(page == "bleach.html"){
    URL = 'https://animechan.vercel.app/api/quotes/anime?title=bleach&page=' + Math.floor(Math.random() * 99)
  }else if(page == "naruto.html"){
    URL = 'https://animechan.vercel.app/api/quotes/anime?title=naruto&page=' + Math.floor(Math.random() * 99)
  }else{
    URL = 'https://animechan.vercel.app/api/quotes/anime?title=one+piece&page=' + Math.floor(Math.random() * 99)
  }

  
  return fetch(URL, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    const num = Math.floor(Math.random() * 6)
    currentQuote = data[num]
    const quote = data[num].quote
    quotePTag.innerText = quote

    const character0 = data[num].character
    characterPTag0.innerText = character0

    console.log("The answer is " + data[num].character)

    const character1 = data[num+1].character
    characterPTag1.innerText = character1

    const character2 = data[num+2].character
    characterPTag2.innerText = character2

    const character3 = data[num+3].character
    characterPTag3.innerText = character3
  })
}

var arr = randomArr()
console.log("Random Array is: "+ arr)
const quotePTag = document.querySelector('#quote')

var characterPTag0 = document.querySelector('#character' + arr[0])
var characterPTag1 = document.querySelector('#character' + arr[1])
var characterPTag2 = document.querySelector('#character' + arr[2])
var characterPTag3 = document.querySelector('#character' + arr[3])

const reloadButton = document.querySelector('#reload-quote-button')


reloadButton.addEventListener('click', getAnimeQuote)
reloadButton.addEventListener('click', remake)

getAnimeQuote()





