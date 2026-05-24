const form = document.getElementById("formEndereco")
const logradouro = document.getElementById("logradouro")
const numero = document.getElementById("numero")
const cidade = document.getElementById("cidade")
const uf = document.getElementById("uf")
const cep = document.getElementById("cep")

cep.addEventListener("input", () => {
    let valor = cep.value.replace(/\D/g, "")

    if (valor.length > 8) {
        valor = valor.slice(0, 8)
    }

    valor = valor.replace(/^(\d{5})(\d{0,3})$/, "$1-$2")

    cep.value = valor
})

uf.addEventListener("input", () => {
    uf.value = uf.value.toUpperCase()
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (logradouro.value.trim() === "") {
        alert("O logradouro é obrigatório.")
        return
    }

    if (logradouro.value.trim().length < 5) {
        alert("O logradouro deve possuir no mínimo 5 caracteres.")
        return
    }

    if (numero.value.trim() === "") {
        alert("O número é obrigatório.")
        return
    }

    if (!/^\d+$/.test(numero.value)) {
        alert("O número deve conter apenas dígitos.")
        return
    }

    if (cidade.value.trim() === "") {
        alert("A cidade é obrigatória.")
        return
    }

    if (uf.value.trim() === "") {
        alert("A UF é obrigatória.")
        return
    }

    const regexUf = /^[A-Z]{2}$/

    if (!regexUf.test(uf.value)) {
        alert("A UF deve conter exatamente 2 letras maiúsculas.")
        return
    }

    if (cep.value.trim() === "") {
        alert("O CEP é obrigatório.")
        return
    }

    const regexCep = /^(\d{5})-(\d{3})$/;

    if (!regexCep.test(cep.value)) {
        alert("CEP inválido. Utilize o formato 00000-000.")
        return
    }
    
    alert("Endereço cadastrado com sucesso");
})