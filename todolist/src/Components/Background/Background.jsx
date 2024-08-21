import { Children } from 'react'
import '../Background/Background.css'

const Background = (props) => {
    return(
        <div className="background">
            {props.children}
        </div>
    )
}

export default Background;