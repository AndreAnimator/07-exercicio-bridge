import IConsole from "./IConsole";

export default class Playstation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Playstation: jogo configurado.");
    }
    configureGame(): void {
        this.authToken();
        console.log("Playstation: configurando jogo...");
    }
    authToken(): void {
        console.log("Playstation: autorizando token...");
    }
}