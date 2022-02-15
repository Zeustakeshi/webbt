var getClickBuyTickets = document.querySelectorAll(".content_img button")
var getClickBtnClose = document.getElementsByClassName("close_md_btn")
var getContainer = document.querySelector(".container")
var getMenuBtn = document.querySelectorAll(".menu-btn")[0]
var getNAVa = document.querySelectorAll("#nav > li >a")
let bb = document.getElementById("header")
let dem = 1
var sliderList = [
    { url :'url("https://github.com/Zeustakeshi/webbt/blob/main/assets/images/slider/newy.jpg?raw=true") top center / cover no-repeat',
      text_title: "New York",
      text_de: "The atmosphere in New York is lorem ipsum."
    },
    { url :'url("https://github.com/Zeustakeshi/webbt/blob/main/assets/images/slider/chicago.jpg?raw=true") top center / cover no-repeat',
      text_title: "Chicago",
      text_de: "Thank you, Chicago - A night we won't forget."
    },
    { url :'url("https://github.com/Zeustakeshi/webbt/blob/main/assets/images/slider/losa.jpg?raw=true") top center / cover no-repeat',
      text_title: "Los Angeles",
      text_de: "We had the best time playing at Venice Beach!"
    },
]

for(let i = 0; i< getClickBuyTickets.length ; i++){
    getClickBuyTickets[i].addEventListener("click", function(e){
        document.getElementById("MODAL").style.display = "flex"
    })
}

function closeModal(){
    document.getElementById("MODAL").style.display = "none"
}

getClickBtnClose[0].addEventListener("click", closeModal)
document.getElementById("MODAL").addEventListener("click", closeModal)
getContainer.addEventListener("click", function(e){
    e.stopPropagation()
})
let aa = setInterval(() => {
    if (dem > 2){
        dem = 0
        aa.clearInterval
    }
    let bb = document.getElementById("slider")
    bb.style.cssText = `background:${sliderList[dem].url}; `
    document.getElementById("location-title").innerText = sliderList[dem].text_title
    document.getElementById("location-text-description").innerText  = sliderList[dem].text_de
    dem++
    aa.clearInterval
}, 4500);

getMenuBtn.addEventListener("click", function(){
    if (bb.style.height == "auto"){
        bb.style.cssText = `height: null; overflow: hidden; opacity: 1; ` 
    }else {
        bb.style.cssText =  "height: auto; overflow: unset; opacity: 0.99; animation: moveHeader ease 0.5s;"
    }
})

for(let i = 0; i< getNAVa.length; i++ ){
    if(getNAVa[i].getAttribute("href") !== "#"){
        getNAVa[i].addEventListener("click", function(){
            bb.style.cssText = `height: null;  opacity: 1; ` 
        })
    }
} 