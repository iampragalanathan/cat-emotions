// import { catsData } from "./data.js"

// const emotionsRadios=document.getElementById("emotion-radios")
// const getImageBtn=document.getElementById("get-image-btn")
// const gifsOnlyOption=document.getElementById("gifs-only-option")

// function getEmotionsArray(cats){
//    const emotionsArray=[]
   
//   for( let cat of cats){
//     for(let emotion of cat.emotionTags){

    
//       // if(emotionsArray.includes(emotion)){
//       //   console.log("duplicate")
//       // }
//       // else{
//       //   emotionsArray.push(emotion)
//       // }

//       if(!emotionsArray.includes(emotion)){
//         emotionsArray.push(emotion)
//       }

//     }
//   }
 
//   return emotionsArray
// }

// function renderEmotionsRadios(cats){
//   let radioItems=""
//   const emotions=getEmotionsArray(cats)
//   for(let emotion of emotions){
//      radioItems +=`<div class="radio">
//   <label for="${emotion}">${emotion}</label>
//   <input type="radio" id="${emotion}" value="${emotion}" name="emotion">
// </div>`
//   }
//    emotionsRadios.innerHTML=radioItems
// }

// renderEmotionsRadios(catsData)

// emotionsRadios.addEventListener("change",highlightCheckedOption)

// function highlightCheckedOption(e){
//   const radios=document.getElementsByClassName("radio")
//   for (let radio of radios){
//     radio.classList.remove("highlight")
//   }

//     document.getElementById(e.target.id).parentElement.classList.add("highlight")
// }

// getImageBtn.addEventListener("click",getMatchingCatsArray)

// function getMatchingCatsArray(){
//   if(document.querySelector(`input[type="radio"]:checked`)){
     
//     const isGif=gifsOnlyOption.checked
//     console.log(isGif)
//     console.log(document.querySelector(`input[type="radio"]:checked`).value)
//   }
// }


import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

emotionRadios.addEventListener("change", highlightCheckedOption);

getImageBtn.addEventListener("click", renderCat);

memeModalCloseBtn.addEventListener("click", function () {
  memeModal.style.display = "none";
});

function renderCat() {
  const catObject = getSingleCatObject();

  memeModalInner.innerHTML = `<img class="cat-img" src= "./images/${catObject.image}" />`;
  // console.log(catObject);

  memeModal.style.display = "flex";
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  // console.log(catsArray);
  if (catsArray.length === 1) {
    // console.log("if");
    return catsArray[0];
  } else {
    // console.log("else");
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

function getMatchingCatsArray() {
  if (document.querySelector(`input[type="radio"]:checked`)) {
    const isGif = gifsOnlyOption.checked;
    // console.log(isGif);
    // console.log(document.querySelector(`input[type="radio"]:checked`).value);

    const selectedEmotion = document.querySelector(
      `input[type="radio"]:checked`
    ).value;

    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif === true;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });

    return matchingCatsArray;
  }
}

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");
  // console.log(radios);
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }

  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getEmotionsArray(cats) {
  const emotionsArray = [];

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      // emotionsArray.push(emotion);
      // if (emotionsArray.includes(emotion)) {
      //   console.log("duplicate");
      // } else {
      //   emotionsArray.push(emotion);
      // }

      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }

  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let radioItems = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItems += `<div class="radio">
    
    <label for="${emotion}">${emotion}</label>
    <input type="radio" id="${emotion}" value="${emotion}" name="emotions" />
    
    </div>`;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);






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