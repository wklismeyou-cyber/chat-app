function sendMessage(){
    let input = document.getElementById("message");
    let chatBox = document.getElementById("chat-box");

    if(input.value.trim() !== ""){
        let msg = document.createElement("div");
        msg.innerText = input.value;
        msg.style.background = "white";
        msg.style.padding = "10px";
        msg.style.margin = "5px";
        msg.style.borderRadius = "10px";

        chatBox.appendChild(msg);
        input.value = "";
    }
}
