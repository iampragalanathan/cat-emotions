import { catsData } from "./data.js"

const emotionsRadios=document.getElementById("emotion-radios")
const getImageBtn=document.getElementById("get-image-btn")
const gifsOnlyOption=document.getElementById("gifs-only-option")

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
  const radios=document.getElementsByClassName("radio")
  for (let radio of radios){
    radio.classList.remove("highlight")
  }

    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

getImageBtn.addEventListener("click",getMatchingCatsArray)

function getMatchingCatsArray(){
  if(document.querySelector(`input[type="radio"]:checked`)){
     
    const isGif=gifsOnlyOption.checked
    console.log(isGif)
    console.log(document.querySelector(`input[type="radio"]:checked`).value)
  }
}






// filter
// const ages=[1,4,8,15,18,22,30,5,50]
// const adults=ages.filter(function(age){
//   return age>=18

// })
// console.log(adults)

// const children=ages.filter(function(age){
//   return age<18
// })
// console.log(children)