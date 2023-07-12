import IConsole from "./consoles/IConsole";
import Playstation from "./consoles/Playstation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./games/AdvancedPlay";
import Play from "./games/Play";

function startGame(consoles: IConsole){
    console.log("Aguarde...");
    const play = new Play(consoles);
    play.playing();
    play.result();
}

function startAdvancedGame(consoles: IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(consoles);
    play.playing();
    play.challenge();
    play.result();
}

startGame(new Xbox());
startAdvancedGame(new Playstation());