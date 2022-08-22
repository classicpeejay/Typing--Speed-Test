const paragraphs = ["Author often interpret a lettuce as folkstore rabbit, when in actuality it feels more like an uncursed.",
"I modern times the first scrawny kitten is,in its own way,an input. this life is like a mango, if you fly inside a sea there will always be a lizard on the wall thats why goat have 2 horn if you know you know.",
"In ancient times the legs could said to resemble stroppy vegetables, never underestimate the power of internet because it can change your financial status forever and in this life try follow person wey know road.",
"What we dont know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. travelling is one of of the best tour thats excites me a lot, you get to know many cities and see differnet people in different trybes living  in a different way",
"Their politician was, in this moment, a notour paperback. The first armless growse is, in its own way, a gear. omo na God go punish my embryology lecturer, that man suffer us in this life how person go dey give us 9-6 class in a day and he go dey write attendance",
"An aunt is a basson from the right perspective. As far as we can estimate, some deposit the malic myannar to be.",
"A baby is a simgle from the right perspective. before defenses, collars were only operations bails are gleese.",
"In recent years, some teeming herons are thought of simoly as numbers. Nowgere is vit disputed that sn unlaid.", 
"Javascript is a very interesting course you would love to learn in web development.",
"also it is mostly used in developing a game app, it is used in developing a blockchain wallet.",
"solidity,smart contract and so on i guess you would love it so much and it is very impossible.",
"it is broad but interesting course in web development and pray  very hard.",
];
     
const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span");
tryAgainBtn = document.querySelector("button");


let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0; 

function randomParagraph() {
   let randIndex = Math.floor(Math.random() * paragraphs.length);
   typingText.innerHTML = "";
   paragraphs[randIndex].split("").forEach(span => {
      let spanTag = `<span>${span}</span>`;
      typingText.innerHTML += spanTag;
   });
   typingText.querySelectorAll("span")[0].classList.add("active");
   document.addEventListener("keydown", () => inpField. focus());
   typingText.addEventListener("click", () => inpField. focus());
}

function initTyping() {
   const characters = typingText.querySelectorAll("span");
   let typedChar = inpField.value.split("")[charIndex];
   if (charIndex < characters.length - 1 && timeLeft > 0) {
      if(!isTyping) {
         timer = setInterval(initTimer, 1000)
         isTyping = true;
      }
         if(typedChar == null) {
         charIndex--;
       if(characters[charIndex].classList.contains("incorrect")) {
         mistakes--;
       }
      characters[charIndex].classList.remove("correct", "incorrect");
      } else {
         if(characters[charIndex].innerText === typedChar) {
           characters[charIndex].classList.add("correct");
         } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");   
         }
         charIndex++; 
      }
   
      characters.forEach(span => span.classList.remove("active"));
      characters[charIndex].classList.add("active");
   
      let wpm = Math.round((((charIndex - mistakes) /5) / (maxTime - timeLeft)) *60);
      wpm = wpm < 0 || !wpm === Infinity ? 0 : wpm; 
      mistakeTag.innerText = mistakes;
      wpmTag.innerText = wpm;
      cpmTag.innerText = charIndex - mistakes;
   } else {
      inpField.value = "";
      clearInterval(timer);
   }
}

function initTimer() {
   
  if(timeLeft > 0) {
   timeLeft--;
   timeTag.innerText = timeLeft;
  } else {
   clearInterval(timer)  
  }
} 

function resetGame() {
   randomParagraph();
   inpField.value = "";
   clearInterval(timer);
   timeLeft = maxTime,
   charIndex = mistakes = isTyping = 0;
   timeTag.innerText = timeLeft;
   mistakeTag.innerText = mistakes;
   wpmTag.innerText = 0;
   cpmTag.innerText = 0;



}

randomParagraph();
inpField.addEventListener("input", initTyping); 
tryAgainBtn.addEventListener("click", resetGame); 
