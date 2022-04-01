document.addEventListener('DOMContentLoaded', event => {
    const requestFriendshipEl = document.querySelector("#request-friendship")

    requestFriendshipEl.addEventListener('click', event => {
        const clickedElement = event.target

        if (clickedElement.dataset.requestedFriendship === 'true') {
            clickedElement.innerText = "Solicitar amizade"
            clickedElement.classList.remove('button--active')
            clickedElement.dataset.requestedFriendship = false
        } else {
            clickedElement.innerText = "Amizade solicitada"
            clickedElement.classList.add('button--active')
            clickedElement.dataset.requestedFriendship = true
        }
    })
    document.querySelectorAll(".post-save").forEach(save =>
        save.addEventListener('click', event => {
            const clickSave = event.currentTarget

            if (clickSave.dataset.save === 'false') {
                clickSave.querySelector('span').innerText = 'Salvo'
                clickSave.querySelector('svg').style.fill = 'red'
                clickSave.dataset.save = true
            }
            else {
                clickSave.querySelector('span').innerText = 'Salvar'
                clickSave.querySelector('svg').style.fill = 'none'
                clickSave.dataset.save = false
            }

            const saveCount = Array.from(document.querySelectorAll(".post-save")).filter(post => post.innerText === 'SALVO').length
            const count = document.querySelector('#count')
            count.innerText = saveCount
        }))

    const writeMessageEl = document.querySelector("#write-message")
    writeMessageEl.addEventListener("click", function () {
        const message = document.querySelector("#message")
        message.style.display = "block"
    })

    const sendMessageEl = document.querySelector("#send-message")
    sendMessageEl.addEventListener("click", function (event) {
        const texto = document.querySelector("#text")
        if (texto.value == '') {
            alert(`escreve a mensagem né!`)
        }
        else {
            alert(`${texto.value} Tua mensagem foi enviada`)
            const writeMessageEl = document.querySelector("#message")
            writeMessageEl.style.display = 'none'
            texto.value = ''
        }
    })

})

