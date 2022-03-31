document.addEventListener('DOMContentLoaded', event => {
    console.log('Agora posso ver o HTML')

    const requestFriendshipEl = document.querySelector("#request-friendship")

    requestFriendshipEl.addEventListener('click', event => {
        const clickedElement = event.target

        if (clickedElement.dataset.requestedFriendship === 'true') {
            clickedElement.innerText = "Solicitar amizade"

            clickedElement.classList.remove('button--active')
            /* clickedElement.style.backgroundColor = "#3f51b5"
            clickedElement.style.borderColor = "#29377e" */

            clickedElement.dataset.requestedFriendship = false
        } else {
            clickedElement.innerText = "Amizade solicitada"

            clickedElement.classList.add('button--active')
            /* clickedElement.style.backgroundColor = "green"
            clickedElement.style.borderColor = "darkGreen" */

            clickedElement.dataset.requestedFriendship = true
        }
    })

    const sendMessageEl = document.querySelector("#send-message")
    sendMessageEl.addEventListener("click", function (event) {
        const message = document.querySelector("#message")
        message.style.display = "block"
    })
})
