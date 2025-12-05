document.getElementById("userInput").addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    const text = e.target.value;
    addChat("User", text);
    bot(text);
    e.target.value = "";
  }
});

function addChat(sender, msg){
  document.getElementById("chatbox").innerHTML += `<p><b>${sender}:</b> ${msg}</p>`;
}

function bot(msg){
  if(msg.includes("cuaca")){
    addChat("Bot","Sedang mengecek cuaca lokasi kamu...");
  } else {
    addChat("Bot","Silahkan bertanya tentang cuaca, rute, macet, atau saran perjalanan.");
  }
}
