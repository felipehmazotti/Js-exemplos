conceito = prompt('Qual foi o seu conceito').toString()
result = conceito
switch (result.toUpperCase()) {
    case 'A':
        alert('Excelente')
        break
    case 'B':
        alert('Ótimo')
        break
    case 'C':
        alert('Bom')
        break
    case 'D':
        alert('Regular')
        break
    case 'E':
        alert('Ruim')
        break
    case 'F':
        alert('Nos vemos de novo ano que vem...')
        break
}