
let body = document.querySelector("body");

let inputErrorMsg = document.querySelector(".auth-text-error");

let passwordErrorMsg = document.querySelector(".auth-password-error");

let input = document.querySelector(".input");

let sendBtn = document.querySelector(".send");

let container = document.querySelector("#messages-container");

let allContainer = document.querySelector("#container");

let authentication = document.querySelector("#authentication")

var d = new Date;
var time = d.getHours()


const others = ["I don't understand what you typed", "sorry?", "🤐"];

const botReplyGreet = ["Hi", "Hello", "Yo", "Yup", "my name is Elsla"
]
const botReplyQuestions = ["How is your day", "How are you", "are you ok", ];

const devQuestions = ["Who are you", "What are you", "who made you", "who created you", "who is your boss", "who is Divine"]

const botDevAnswer = ["Divine created me", "I am a bot"]

const botReplyQuestionAnswers = ["I am good", "I am fine", "I am ok", "Fine, thanks"]


const humanReplyGreet = [...botReplyGreet]



sendBtn.addEventListener("click", () => {
  if (input.value != "") {
    input.value.replace(/'/g, '');
    setTimeout(() => {


      let div = document.createElement("div");
      container.appendChild(div);
      div.classList.add("user-message")


      div.innerHTML = input.value;

      input.value = '';
    }, 200);


    if (botReplyGreet.includes(input.value)) {
      setTimeout(() => {

        botResponse1();

      }, 2000)
    }
    else if (botReplyQuestions.includes(input.value)) {
      setTimeout(() => {

        botResponse2();

      }, 2000)
    }

    else if (devQuestions.includes(input.value)) {
      setTimeout(() => {

        botResponse3();

      }, 2000)
    }

    else {
      setTimeout(() => {

        botResponse()

      }, 2000)
    }

    let user = document.querySelector(".user-message");


  }
})


function botResponse1() {
  let randomBotReply1 = Math.floor(Math.random() * botReplyGreet.length);
  let botReply = botReplyGreet[randomBotReply1];

  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;

}

function botResponse2() {
  let randomBotReply2 = Math.floor(Math.random() * botReplyQuestionAnswers.length);
  let botReply = botReplyQuestionAnswers[randomBotReply2];

  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;

}

function botResponse3() {
  let randomBotReply3 = Math.floor(Math.random() * botDevAnswer.length);
  let botReply = botDevAnswer[randomBotReply3];

  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;

}


function botResponse() {
  let randomBotReply4 = Math.floor(Math.random() * others.length);
  let botReply = others[randomBotReply4];

  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;

}

window.onload = () => {
  if (time < 12) {
    setTimeout(() => {


      let reply = document.createElement("div");
      container.appendChild(reply);
      reply.classList.add("bot-message")
      reply.innerHTML = "good morning";

    }, 1000)


  }
  else if ((time >= 12) && (time < 16)) {
    setTimeout(() => {
      let reply = document.createElement("div");
      container.appendChild(reply);
      reply.classList.add("bot-message")
      reply.innerHTML = "Good Afternoon";

    }, 1000)


  }
  else if ((time >= 15) && (time < 24)) {
    setTimeout(() => {
      let reply = document.createElement("div");
      container.appendChild(reply);
      reply.classList.add("bot-message")
      reply.innerHTML = "Good Evening";

    }, 1000)

  }

}
window.onload = () => {
  allContainer.style.display = 'none';
}


let authInput= document.querySelector(".auth-text");
let authPassword = document.querySelector(".auth-password")
let authBtn = document.querySelector(".auth-btn");



let div = document.querySelector("#display-pass");

const numbers =[0,1,2,3,4,5,6,7,8,9 ];

let  password =[];

for(let i=0; i<6; i++){
  let randomNumber = Math.floor(Math.random()*numbers.length);

password.push(numbers[randomNumber])
console.log(password)

}

let Json = `
 <div class='auth-num'>${password[0]}</div>
 <div class='auth-num'>${password[1]}</div>
 <div class='auth-num'>${password[2]}</div>
 <div class='auth-num'>${password[3]}</div>
 <div class='auth-num'>${password[4]}</div>
 <div class='auth-num'>${password[5]}</div>

`;

div.innerHTML= Json;

console.log(Json)
console.log(div.innerText)


authBtn.addEventListener("click", (e) => {
  e.preventDefault()

if(authPassword.value != div.innerText){
  authPassword.style.boxShadow = "0px 0px 5px red";
  authPassword.style.border='none';
  
  passwordErrorMsg.style.display='block';
  console.log("hi")
}  
else{
  console.log("correct")
}

})
