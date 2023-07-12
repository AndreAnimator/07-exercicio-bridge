import IConsole from "../consoles/IConsole";
import IGames from "./IGames";

export default class Play implements IGames{
    constructor(private console : IConsole){}
    playing(): void {
        console.log("Iniciando jogatina!");
    }
    result(): void {
        console.log("------resultados do jogo------");
    }
}