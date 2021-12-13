import { Component } from "react";
import s from './CreatefeedbackButton.module.css';
import PropTypes from 'prop-types' 


class CreatefeedbackButton  extends Component {

    

render() 
{
    
    const { good, neutral, bad, clickButtonFeedback } = this.props;
return ( 
    
    <div>
        <button 
         className ={s.button}
         type= "button"
         name = {good}
         onClick = {clickButtonFeedback}   > 
           {good}
        </button>

        <button
          className ={s.button}
          type= "button"
          name = { neutral}
          onClick = {clickButtonFeedback} 
        >
          { neutral}
        </button>

        <button 
          className ={s.button}
          type= "button"
          name = { bad }
          onClick = {clickButtonFeedback}
        >
          {bad}
        </button>


    </div>
    )
  
}
}

CreatefeedbackButton.propTypes = {
good:PropTypes.number,
neutral:PropTypes.number,
bad:PropTypes.number,
total:PropTypes.func,
clickButtonFeedback:PropTypes.func,

}

export default CreatefeedbackButton;