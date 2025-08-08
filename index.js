import { catsData } from "./data.js"

const emotionsRadios=document.getElementById("emotion-radios")


function getEmotionsArray(cats){
   const emotionsArray=[]
   
  for( let cat of cats){
    for(let emotion of cat.emotionTags){

    
      // if(emotionsArray.includes(emotion)){
      //   console.log("duplicate")
      // }
      // else{
      //   emotionsArray.push(emotion)
      // }

      if(!emotionsArray.includes(emotion)){
        emotionsArray.push(emotion)
      }

    }
  }
 
  return emotionsArray
}

function renderEmotionsRadios(cats){
  let radioItems=""
  const emotions=getEmotionsArray(cats)
  for(let emotion of emotions){
     radioItems +=`<div class="radio">
  <label for="${emotion}">${emotion}</label>
  <input type="radio" id="${emotion}" value="${emotion}" name="emotion">
</div>`
  }
   emotionsRadios.innerHTML=radioItems
}

renderEmotionsRadios(catsData)

emotionsRadios.addEventListener("change",highlightCheckedOption)

function highlightCheckedOption(e){

    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}




// let powerArray=[]
// for (let character of characters){
//   // console.log(character.powers)
//   for(let power of character.powers){

//     // console.log(power)
//     powerArray.push(power)
//   }
// }

// console.log(powerArray)



