// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click' , cloneField)

function cloneField() {
    
    const fields = document.querySelector('.schedule-item').cloneNode(true)


    document.querySelector('#schedule-items').appendChild(fields)
}


  


    