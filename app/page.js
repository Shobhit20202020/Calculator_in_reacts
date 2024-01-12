"use client"
import React, { useReducer } from 'react'

const actionTypes={
  CLEAR:'CLEAR',
  DELETE:"DELETE",
  EQUALS:"EQUALS",
  APPEND:"APPEND",
}

const calculotorReducer=(state,action)=>{
 switch(action.type){
  case actionTypes.CLEAR:
    return{previousOutput:"",currentOutput:""};
    case actionTypes.DELETE:
      return{...state,currentOutput:state.currentOutput.slice(0,-1)};
      case actionTypes.EQUALS:
        try{
          const result=eval(state.currentOutput);
          return{previousOutput:state.currentOutput,currentOutput:result.toString()};
        }
        catch(error){
          return{previousOutput:'',currentOutput:'Error'};
        }
        case actionTypes.APPEND:
          return{...state,currentOutput:state.currentOutput+action.payload};
          default:
            return state;
 }
};

 const page = () => {
  const initialState={previousOutput:'',currentOutput:''}

  const [state,dispatch]=useReducer(calculotorReducer,initialState);
  const handleButtonClick=(type,payload)=>{
    dispatch({type,payload})
  }
  return (

  
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{state.previousOutput}</div>
        <div className='current-operand'>{state.currentOutput}</div>
      </div>
      <button className='span-two' onClick={()=>handleButtonClick(actionTypes.CLEAR)}>AC</button>
      <button onClick={()=>handleButtonClick(actionTypes.DELETE)}>DEL</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'/')}>/</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'1')}>1</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'2')}>2</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'3')}>3</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'*')}>*</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'4')}>4</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'5')}>5</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'6')}>6</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'+')}>+</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'7')}>7</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'8')}>8</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'9')}>9</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'-')}>-</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'.')}>.</button>
      <button onClick={()=>handleButtonClick(actionTypes.APPEND,'0')}>0</button>
      <button className='span-two' onClick={()=>handleButtonClick(actionTypes.EQUALS)}>=</button>
    </div>
  )
}
export default page;
