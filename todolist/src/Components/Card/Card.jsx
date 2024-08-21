import { useState } from 'react';
import '../Card/Card.css'
import x from '../../assets/img/x_black.svg'
import editar from '../../assets/img/editar_black.svg'
import selecionado from '../../assets/img/Vector.svg'
import editar_white from '../../assets/img/editar_white.svg'
import x_white from '../../assets/img/x_white.svg'


const Card = (props) => {
    const [card, setCard] = useState("card")
    const [button, setButton] = useState("buttonSelect")
    const [buttonEdits, setButtonEdits] = useState("button")

    return (
        <div className={card}>
            <button className={button} onClick={() => card == "card" ? setCard('cardSelected') & setButton("buttonSelected") & setButtonEdits("buttonEdits") : setCard("card") & setButton("buttonSelect") & setButtonEdits("button")}>
                {
                    card == "cardSelected"
                    ? <img src={selecionado} alt="" />
                    : null
                }
            </button>
            <p>{props.text}</p>
            <div>
                <button onClick={props.onClick} style={{paddingTop:5 }}  className={buttonEdits}>
                    {
                        card == "cardSelected"
                        ?<img src={x_white} alt="" />
                        : <img src={x} alt="" /> 
                    }
                   
                </button>   
                <button onClick={props.onClickEdit} style={{paddingTop:5 }}  className={buttonEdits}>
                    {   
                        card == "cardSelected"
                        ?<img src={editar_white} alt="" />
                        :  <img src={editar} alt="" /> 
                    }
                   
                </button>
            </div>
        </div>
    )
}

export default Card;