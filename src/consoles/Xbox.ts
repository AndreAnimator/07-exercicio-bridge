import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox: jogo configurado.");
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: configurando jogo...");
    }
    authToken(): void {
        console.log("Xbox: autorizando token...");
    }
}