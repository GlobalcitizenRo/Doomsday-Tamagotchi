// function planet(hunger, sleepiness, boredom, age, planet ) {
 let hunger = 0
 let sleepiness = 0
 let boredom = 0
 let age = 0
 let name = 0
// }


let nameButton = document.getElementById("name");
console.log(nameButton)
nameButton.addEventListener("click", TakeActionNow) 
let planetName = null
function TakeActionNow () {
 planetName = prompt("Name Your PLanet")  
 console.log(planetName)

}
// 

let G2FeedButton = document.getElementById("G2FeedButton");
G2FeedButton.addEventListener("click", G2Feed) 
function G2Feed() {
}
// 

let G7LightsOffButton = document.getElementById("G7LightsOffButton");
G7LightsOffButton.addEventListener("click", G7LightsOff) 
function G7LightsOff () {
}
// 

let G3PlayButton = document.getElementById("G3PlayButton");
G3playButton.addEventListener("click", G3play) 
function G3Play () {
}
// 






//  //This updates the 
//  function updateDisplay(){

 
//         hungerDisplay.innerText = (`Hunger: ${this.planet.hunger}`)
//         sleepDisplay.innerText = (`Sleepiness: ${this.planet.sleepiness}`)
//         boredDisplay.innerText = (`Boredom: ${this.planet.boredom}`)
//         ageDisplay.innerText = (`Age: ${this.planet.age}`)
//  }





//         // select buttons
//         const G2FeedButton = document.querySelector('#feed')
//         const G3PlayButton = document.querySelector('#play')
//         const G7LightButton = document.querySelector('#lights')

//         // select stats in p tags
//         const hungerDisplay = document.querySelector(`#hunger`)
//         const sleepDisplay = document.querySelector(`#sleepy`)
//         const boredDisplay = document.querySelector(`#bored`)
//         const ageDisplay = document.querySelector(`#age`)



//         // setup timers
//         this.gameOver()
//         this.aging()
//         this.hunger()
//         this.boredom()
//         this.sleepiness()


//        function aging() {
//             const ageinterval = setInterval(() => {
//                 console.log("aging planet")
//                 age = age + 1
//                 updateDisplay()
//             }, 5000)
//         };

//         hunger() {
//             const intervalID = setInterval(() => {
//                 console.log("hungry planet")
//                 this.planet.hungryPet()
//                 this.updateDisplay()
//             }, 2000)
//         };


//         sleepiness() {
//             const intervalID = setInterval(() => {
//                 console.log("sleepiness pet")
//                 this.planet.tiredPet()
//                 this.updateDisplay()
//             }, 2000)
//         };


//         boredom() {
//             const intervalID = setInterval(() => {
//                 console.log("bored planet")
//                 this.tamagotchi.boredPet()
//                 this.updateDisplay()
//             }, 2000)
//         };

//         gameOver() {
//             // check if any stats are >= 10
//             const intervalID = setInterval(() => {
//                 console.log("checking stats")
//                 if (this.planet.hunger >= 10 || this.planet.sleepiness >= 10 || this.planet.boredom >= 10) {
//                     document.getElementById("planet-pic").src = "https://i.imgur.com/FDITWHk.gif"
//                     alert(`Your Planet' ${this.planet.name} explode)
//         clearInterval(intervalID)
//       }
//     }, 1000)
//   }
// };
