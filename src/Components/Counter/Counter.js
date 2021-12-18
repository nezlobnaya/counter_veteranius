import { useState } from "react";
import Button from '../Button/Button';


const Counter = ({title}) => {
    // props used in your code: title
    
    
    const [counter, setCounter] = useState(0); //state

    //array  with all functions used in Counter
    const names =['Increment', 'Decrement', 'Reset', 'Add 10', 'Subtract 10', 'Multiply by 10', 'Divide by 10'];

    

    const increment = () => {
        setCounter(counter + 1);
    }
    
    const decrement = () => {
        setCounter(counter - 1);
    }
    
    const reset = () => {
        setCounter(0);
    }
    
    const add = () => {
        setCounter(counter + 10);
    }
    
    const subtract = () => {
        setCounter(counter - 10);
    }
    
    const multiply = () => {
        setCounter(counter * 10);
    }
    
    const divide = () => {
        setCounter(counter / 10);
    };

    return (
        <>
            <h1>{title}</h1>
            <h2>{counter}</h2>
            <div className='buttons' >
            {names.map((name, index) => (
                <Button key={index} name={name} onClick={
                    name === 'Increment' ? increment :
                    name === 'Decrement' ? decrement :
                    name === 'Reset' ? reset :
                    name === 'Add 10' ? add :
                    name === 'Subtract 10' ? subtract :
                    name === 'Multiply by 10' ? multiply :
                    name === 'Divide by 10' ? divide :
                    null 
                }/>
            ))}
            </div>
        </>
    );
}

export default Counter;

                {/* <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
                <Button onClick={reset}>Reset</Button>
                <Button onClick={add}>Add 10</Button>
                <Button onClick={subtract}>Subtract 10</Button>
                <Button onClick={multiply}>Multiply by 10</Button>
                <Button onClick={divide}>Divide by 10</Button> */}
