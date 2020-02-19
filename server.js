const cor = "branco"
const tamanho = 2.5

function verificarSeOCopoEstaSujo(sujo) {
    //logica para verificar se o copo esta sujo
    return `o copo: ${sujo}`
}

const copo = {
    cor,
    tamanho,
    verificarSeOCopoEstaSujo,
}

console.log(copo.verificarSeOCopoEstaSujo())

