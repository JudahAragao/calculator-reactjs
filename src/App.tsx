import React, { useState } from 'react';
import * as math from "mathjs";

import Button from './components/Buttons';

import * as S from './App.styles'

function App() {

  const operators = ['*', '/', '+', '.', '-']

  const [ expression, setExpression ] = useState('')

  const insertNum = (val: any) => {
    setExpression(expression + val)
  }

  const insertOperator = (operator: any) => {
    setExpression(expression + operator)
  }

  const calculate = () => {
    if (expression === "0" || operators.includes(expression[expression.length - 1])) {
      return expression;
    } else {
      setExpression(math.evaluate(expression));
    }
  }

  return (
    <S.GlobalContainer>
      <S.BodyCalculator>

        <S.Input value={expression} readOnly/>

        <S.GroupButtons>
          
          <S.Line>
            <Button onClick={insertNum}>7</Button>
            <Button onClick={insertNum}>8</Button>
            <Button onClick={insertNum}>9</Button>
            <Button onClick={(operator: any) => insertOperator(operator)}>/</Button>
          </S.Line>
          <S.Line>
            <Button onClick={insertNum}>4</Button>
            <Button onClick={insertNum}>5</Button>
            <Button onClick={insertNum}>6</Button>
            <Button onClick={(operator: any) => insertOperator(operator)}>*</Button>
          </S.Line>
          <S.Line>
            <Button onClick={insertNum}>1</Button>
            <Button onClick={insertNum}>2</Button>
            <Button onClick={insertNum}>3</Button>
            <Button onClick={(operator: any) => insertOperator(operator)}>+</Button>
          </S.Line>
          <S.Line>
            <Button onClick={insertNum}>.</Button>
            <Button onClick={insertNum}>0</Button>
            <Button onClick={() => setExpression("")}>C</Button>
            <Button onClick={(operator: any) => insertOperator(operator)}>-</Button>
          </S.Line>
          <S.Line>
            <Button onClick={calculate}>=</Button>
          </S.Line>

        </S.GroupButtons>
        
      </S.BodyCalculator>
    </S.GlobalContainer>
  );
}

export default App;
