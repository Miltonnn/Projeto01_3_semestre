import pegaArquivo from "./index.js";
import chalk from "chalk";
import validaURL from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

        if(caminho[3] === "valida"){
            console.log(chalk.bgGreen('Links Validados:'), await validaURL(resultado));
        }
        else{
            console.log (chalk.bgBlue('Lista de Links:'), resultado);
        }
}

processaTexto(caminho);