

import Section from "./Section/Section.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import {Component} from 'react';


class App extends Component {
state ={
  good : 0,
  neutral :0,
  bad:0,
}

countTotalFeedback =()=>{
  const {good, neutral, bad } = this.state;
  return good+neutral+bad;
}

countPositiveFeedbackPercentage=()=>{
  const { good } = this.state;
  return Math.floor((good / this.countTotalFeedback()) * 100);
}


  render()  {
   const {good, neutral , bad } = this.state;

    return (
      <>
  
            <Section title = "ksgksdfgk"/>
            <Section title="Statistics"/>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback} // Передаем в компонент статистики подсчет всех отзывов
              positivePercentage={this.countPositiveFeedbackPercentage} // Туда же передаем подсчет хороших отзывов
            />
        
     
   </>
    );
  };
  
}




export default App;
