import status from "./status.js";
import alfabeto from "../alfabeto";

export default function Letras(props) {
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
        console.log(letras_chutadas);
    }
    return(
        <div className="bottom" >
            <ul className="letras">
            {alfabeto.map( (letra) => 
            {if(props.Letters_guessed.includes(letra)) {
                return(<li key={letra}>
                <button 
                    className="letra" 
                    disabled={true}
                    onClick={() => chute(letra)}>
                    {letra} 
                </button>
                </li>);
            } else {
                return(<li key={letra}>
                <button className="letra" 
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