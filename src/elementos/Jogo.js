import palavras from "../palavras.js"
import status from "./status.js";

export default function Jogo(props) {
    function pickWord(){
        if (!props.restart) {
            const random = Math.floor(Math.random() * palavras.length);
            props.setWord(palavras[random]);
            let traços = [];
            for(let i = 0; i < palavras[random].length; i++){
                traços.push("_");
            }
            props.setGS(traços);
            props.setDSB(true);
            props.setDLB(false);
            console.log(palavras[random]);

            /* ajuste: restart */
            props.setResult('Adivinhando');
            props.setLG([]);
            props.setRT(1); /* ok */
            props.setWR(1); /* ok */
        } else if(props.restart) {
            props.setIndex(0); /* ok */
            props.setStatus1(status[props.index]); /* ok */
            props.setWord(''); /* ok */
            props.setDSB(false); /* ok */
            props.setDLB(true); /* ok */
            props.setRT(1); /* ok */
            props.setWR(1); /* ok */
            props.setGS([]); /* ok */
            props.setLG([]);
            props.setResult('Adivinhando'); /* ok */
            props.setRestart(false); /* ok */
            
        }

    }
    return(
        <div className="GameSpace">
            <img data-test="game-image" className="img_status" alt="Imagem de status" src={props.status1} />
            <button data-test="choose-word" disabled={props.disabled_start_buttons} onClick={pickWord} className="pickword"> Escolher Palavra </button>
            <div data-test="word" className={props.result} > {props.Guess_Status} </div>
        </div>
    );
}