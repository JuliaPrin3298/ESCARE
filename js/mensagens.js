function abrirChat(chat, elemento){

    const chats =
        document.querySelectorAll(".chat-box");

    chats.forEach(chat => {
        chat.classList.add("hidden");
    });

    document
        .getElementById("chat-" + chat)
        .classList.remove("hidden");

    const contatos =
        document.querySelectorAll(".contact");

    contatos.forEach(contato => {
        contato.classList.remove("active");
    });

    elemento.classList.add("active");
}