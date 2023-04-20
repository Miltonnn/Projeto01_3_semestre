import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.bgRed(erro.code, "ESTE ARQUIVO NÃO APRESENTA NENHUM LINK"));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        console.log(chalk.whiteBright(texto));
    } catch(erro){
        trataErro(erro);
    }
}
pegaArquivo('./arquivos/texto.md');