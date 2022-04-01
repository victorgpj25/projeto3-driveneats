function selectMain (orderMain) {
    let alreadySelected = document.querySelector(".main > .selected")

    if (alreadySelected !== null && alreadySelected !== orderMain) {
        alreadySelected.classList.remove("selected");
    }
    orderMain.classList.toggle("selected");
    if (document.querySelectorAll(".selected").length === 3) {
        document.querySelector(".open").disabled = false
        document.querySelector(".open").innerHTML = "Fechar pedido"
    }
    else {
        document.querySelector(".open").disabled = true
        document.querySelector(".open").innerHTML = "Selecione os 3 itens <br> para fechar o pedido"
    }
}
function selectDrink (orderDrink) {
    let alreadySelected = document.querySelector(".drink > .selected")

    if (alreadySelected !== null && alreadySelected !== orderDrink) {
        alreadySelected.classList.remove("selected");
    }
    orderDrink.classList.toggle("selected");
    if (document.querySelectorAll(".selected").length === 3) {
        document.querySelector(".open").disabled = false
        document.querySelector(".open").innerHTML = "Fechar pedido"
    }
    else {
        document.querySelector(".open").disabled = true
        document.querySelector(".open").innerHTML = "Selecione os 3 itens <br> para fechar o pedido"
    }
}
function selectDessert (orderDessert) {
    let alreadySelected = document.querySelector(".dessert > .selected")

    if (alreadySelected !== null && alreadySelected !== orderDessert) {
        alreadySelected.classList.remove("selected");
    }
    orderDessert.classList.toggle("selected");
    if (document.querySelectorAll(".selected").length === 3) {
        document.querySelector(".open").disabled = false
        document.querySelector(".open").innerHTML = "Fechar pedido"
    }
    else {
        document.querySelector(".open").disabled = true
        document.querySelector(".open").innerHTML = "Selecione os 3 itens <br> para fechar o pedido"
    }
}

function openConfirmationScreen() {
    let confirmationScreen = document.querySelector("confirmationScreen")
    confirmationScreen.classList.remove("hidden")
    let body = document.querySelector("body")
    body.classList.add("disableScroll")

    document.querySelector("mainName").innerHTML = document.querySelector(".main > .selected > dish").innerHTML
    document.querySelector("mainPrice").innerHTML = document.querySelector(".main > .selected > price").innerHTML.slice(3)

    document.querySelector("drinkName").innerHTML = document.querySelector(".drink > .selected > dish").innerHTML
    document.querySelector("drinkPrice").innerHTML = document.querySelector(".drink > .selected > price").innerHTML.slice(3)

    document.querySelector("dessertName").innerHTML = document.querySelector(".dessert > .selected > dish").innerHTML
    document.querySelector("dessertPrice").innerHTML = document.querySelector(".dessert > .selected > price").innerHTML.slice(3)

    document.querySelector("confirmationsTotalPrice").innerHTML = "R$ " + (((Number(document.querySelector(".main > .selected > price").innerHTML.slice(3).replace(",", ".")) + Number(document.querySelector(".drink > .selected > price").innerHTML.slice(3).replace(",", ".")) + Number(document.querySelector(".dessert > .selected > price").innerHTML.slice(3).replace(",", "."))).toFixed(2)).replace(".",","))
}

function closeConfirmationScreen() {
    let confirmationScreen = document.querySelector("confirmationScreen")
    confirmationScreen.classList.add("hidden")
    let body = document.querySelector("body")
    body.classList.remove("disableScroll")
}
function finish() {
    let clientName = prompt("Insira seu nome:")
    let clientAdress = prompt("Insira seu endereço")
    let message = `Olá, gostaria de fazer o pedido:%0A- Prato: ${document.querySelector(".main > .selected > dish").innerHTML}%0A- Bebida: ${document.querySelector(".drink > .selected > dish").innerHTML}%0A- Sobremesa: ${document.querySelector(".dessert > .selected > dish").innerHTML}%0ATotal: R$ ${(Number(document.querySelector(".main > .selected > price").innerHTML.slice(3).replace(",", ".")) + Number(document.querySelector(".drink > .selected > price").innerHTML.slice(3).replace(",", ".")) + Number(document.querySelector(".dessert > .selected > price").innerHTML.slice(3).replace(",", "."))).toFixed(2)}%0A%0ANome: ${clientName}%0AEndereço: ${clientAdress}`
    window.open(`https://wa.me/?text=${message}`, '_blank').focus();
    window.location.reload()
}