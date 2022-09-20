function randomArr(){
    const n = 4
    
  // Initial empty array
  const arr = [];
    
  // Null check
  if (n == 0) {
      console.log(null)
  }
    
  do {
      // Generating random number
      const randomNumber = Math
          .floor(Math.random() * 4)
    
      // Pushing into the array only 
      // if the array does not contain it
      if (!arr.includes(randomNumber)) {
          arr.push(randomNumber);
      }
    
  } while (arr.length < n);
    
  // Printing the array elements
  return arr
  }

  function remake(){
    

    console.log("Old Array is: "+ arr)
    arr = randomArr()
    console.log("New Random Array is: "+ arr)
    characterPTag0 = document.querySelector('#character' + arr[0])
    characterPTag1 = document.querySelector('#character' + arr[1])
    characterPTag2 = document.querySelector('#character' + arr[2])
    characterPTag3 = document.querySelector('#character' + arr[3])
    resetAllColor()
    
  }




function checkValue(char){
    var c = document.getElementById(char)
    if(c.innerText == characterPTag0.innerText){
        document.getElementById(char).classList.add("correct")
    }
    else{
        document.getElementById(char).classList.add("incorrect")
    }
}

function resetColor(char){
    if(document.getElementById(char).classList.contains("correct")){
        document.getElementById(char).classList.remove("correct")
    }
    if(document.getElementById(char).classList.contains("incorrect")){
        document.getElementById(char).classList.remove("incorrect")
    }
}

function resetAllColor(){
    resetColor('character0')
    resetColor('character1')
    resetColor('character2')
    resetColor('character3')
}

function narutoTheme(){

}

function bleachTheme(){

}

function onePieceTheme(){
    
}