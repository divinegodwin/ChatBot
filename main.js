let input = document.querySelector(".input");

let sendBtn = document.querySelector(".send");

let container = document.querySelector("#messages-container");

var d = new Date;
var time = d.getHours()


const others =["I don't understand what you typed", "sorry?", "🤐"];

const botReplyGreet=["Hi","Hello","Yo", "Yup"
]
  const botReplyQuestions = ["How is your day", "How are you", "are you ok",];
  
  const devQuestions = ["Who are you","What are you","who made you", "who created you", "who is your boss", "who is Divine"]
  
  const botDevAnswer=["Divine created me", "I am a bot"]
  
  const botReplyQuestionAnswers = ["I am good", "I am fine", "I am ok", "Fine, thanks"]
  

const humanReplyGreet = [...botReplyGreet]



sendBtn.addEventListener("click",()=>{
  if(input.value != ""){
setTimeout(()=>{
  

let div = document.createElement("div");
container.appendChild(div);
div.classList.add("user-message")


div.innerHTML = input.value;

input.value='';
},200);


if (botReplyGreet.includes(input.value)) {
  setTimeout(() => {

    botResponse1();

  }, 2000)
}
else if(botReplyQuestions.includes(input.value)){
  setTimeout(() => {
  
    botResponse2();
  
  }, 2000)
  }
  
  else if(devQuestions.includes(input.value)){
    setTimeout(() => {
    
      botResponse3();
    
    }, 2000)
  }

 else{
   setTimeout(() => {
   
     botResponse()
   
   }, 2000)
 }
}
})


function botResponse1(){
  let randomBotReply1= Math.floor(Math.random() * botReplyGreet.length);
  let botReply = botReplyGreet[randomBotReply1];
  
  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;
  
}

function botResponse2(){
  let randomBotReply2= Math.floor(Math.random() * botReplyQuestionAnswers.length);
  let botReply = botReplyQuestionAnswers[randomBotReply2];
  
  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;
  
}

function botResponse3(){
  let randomBotReply3= Math.floor(Math.random() * botDevAnswer.length);
  let botReply = botDevAnswer[randomBotReply3];
  
  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;
  
}


function botResponse(){
  let randomBotReply4= Math.floor(Math.random() * others.length);
  let botReply = others[randomBotReply4];
  
  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = botReply;
  
}

window.onload =()=>{
  if(time < 12){
    setTimeout(()=>{
      
    
  let reply = document.createElement("div");
  container.appendChild(reply);
  reply.classList.add("bot-message")
  reply.innerHTML = "good morning";
  
    },1000)
    
  }
  else if((time>=12 ) && (time<16)){
    setTimeout(() => {
      let reply = document.createElement("div");
      container.appendChild(reply);
      reply.classList.add("bot-message")
      reply.innerHTML = "Good Afternoon";
    
    }, 1000)
    
  }
  else if((time>=15 ) && (time<24)){
    setTimeout(() => {
      let reply = document.createElement("div");
      container.appendChild(reply);
      reply.classList.add("bot-message")
      reply.innerHTML = "Good Evening";
    
    }, 1000)
  }
}
