import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultados.push({ [temp[1]] : [temp[2]]})
    }
    return arrayResultados.length === 0 ? "ESTE ARQUIVO NÃO APRESENTA NENHUM LINK" : arrayResultados;
}

function trataErro(erro){
    throw new Error(chalk.bgRed(erro.code, "ERRO NO PROGRAMA"));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        return(extraiLinks(texto))
    } catch(erro){
        trataErro(erro);
    }
}
export default pegaArquivo;