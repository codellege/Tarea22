let b = document.getElementById('button')
let l = document.getElementById('list')
b.addEventListener('click', () => {

    let pago = 10;
    let total = 10;
    
    for (let i = 1; i <= 20; i++) {

        l.innerHTML += `
        <li class="list-group-item">${i}: Mensual: <strong>$${pago}</strong> | Total: $${total} </li>
        `

        pago += pago;
        total += pago

    }
})