import s from './Counter.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from  './Controls'


class Counter extends Component {

static defaultProps ={
    initialValue :0,
}
static  propTypes ={
    initialValue:PropTypes.number,
}
    // constructor() {
    //     super();
    //     this.state={
    //         value:5,
    //     };
    // }

   state ={
    //    value:5,
      value: this.props.initialValue,
   }

    handleIncrement = (event)=> {
        console.log('Кликнули увеличить');
        // console.log(event.target);
        // const target = event.target
        // const {target} = event
        // console.log(target);

        this.setState(prevState=>({value:prevState.value+1}))

        // this.setState((prevState)=>{return{
        //     value:prevState.value+1,
        // }})
           }
    handleDecrement= (event)=>{
      console.log('Кликнули уменьшить');
      this.setState((prevState)=>{return{
        value:prevState.value-1,
    }})

    }
    render() {
       
    
        return (
          <div className={s.Counter}>
           <span className={s['Counter__value']}>{this.state.value}</span>
           <Controls 
           onIncrement={this.handleIncrement}
           onDecrement={this.handleDecrement}
           />



    
           {/* <div className={s['Counter__controls']}>
           <button type="button" 
           onClick={this.handleIncrement}>
              Увеличить на 1
                </button>
             <button type="button" 
             onClick={this.handleDecrement}>
             Уменьшить на 1
             </button>
            </div> */}
          </div>
        );
      }
}


export default Counter;