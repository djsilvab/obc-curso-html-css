const lstProgramadores = ["David", "Pamela", "Gonzalo", "Lourdes", "Pamela"]

//programación imperativa
let nombres = []
lstProgramadores.forEach((item, index) => nombres[index] = item)

//programación declarativa
//console.log([... lstProgramadores])
let nombresUnicos = [...new Set(lstProgramadores)]

console.log(nombresUnicos)