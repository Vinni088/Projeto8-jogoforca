import status from "./status.js";
import alfabeto from "../alfabeto.js";

export default function Controles(props) {
    function error() {
        if( props.index <= 5) {
            let nextindex = props.index + 1;
            props.setIndex(nextindex);
            props.setStatus1(status[nextindex]);
        } else {
            let nextindex = 0;
            props.setIndex(nextindex);
            props.setStatus1(status[nextindex]);
        }
    }
    function chute(letra){
        let letras_chutadas = [...props.Letters_guessed, letra];
        props.setLG(letras_chutadas);
        let tracinhos = [...props.Guess_Status];
        let atualize1 = 0 + props.rights;
        let atualize2 = 0 + props.wrongs;
        if( props.word.includes(letra)){
            for (let i = 0; i < tracinhos.length; i++) {
                if (letra === props.word[i]) {
                    tracinhos[i] = letra;
                    atualize1 += 1;
                }
            }
            props.setRT(atualize1);
            props.setGS(tracinhos);
        } else {
            atualize2 += 1;
            error();
            props.setWR(atualize2);
        }
        if( props.rights === props.word.length ){
            props.setResult('Adivinhando win');
            props.setDLB(true);
            props.setDSB(false);
        } else if( props.wrongs === 6 ){
            props.setResult('Adivinhando lose');
            props.setDLB(true);
            props.setDSB(false);
        }
    }
    return(
        <div className="bottom" >
            <ul className="letras">
            {alfabeto.map( (letra) => 
            {if(props.Letters_guessed.includes(letra)) {
                return(<li key={letra}>
                <button data-test="letter"
                    className="letra" 
                    disabled={true}
                    onClick={() => chute(letra)}>
                    {letra} 
                </button>
                </li>);
            } else {
                return(<li key={letra}>
                <button data-test="letter"
                className="letra" 
                disabled={props.disabled_letter_buttons}
                onClick={() => chute(letra)}>
                    {letra} 
                </button>
                </li>)}
            }
                 ) 
            }
            </ul>
        </div>
    );
}