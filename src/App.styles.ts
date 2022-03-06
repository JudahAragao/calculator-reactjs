import styled from 'styled-components'

export const GlobalContainer = styled.div`
    height: 100vh;
    background-color: #0E0E0E;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BodyCalculator = styled.div`
    width: 330px;
    height: 500px;
    background-color: #0E0E0E;
    box-shadow: 15px 15px 25px 1px #080809, -15px -15px 25px 1px #18191B;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 260px;
    height: 70px;
    background-color: #0E0E0E;
    box-shadow: inset 5px 5px 10px 1px #080809, inset -5px -5px 10px 1px #18191B;
    border: none;
    border-radius: 25px;
    margin: 25px 0 0 0;
    padding: 0 20px;
    font-size: 20px;
    color: transparent;
    text-shadow: 0 0 0 gray;
    text-align: right;

    &:focus {
        outline: 0;
    }
`

export const GroupButtons = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Line = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    button:nth-child(4) {
        background-color: #d46114;
        box-shadow: 2px 2px 6px 1px #1f0c00, -2px -2px 6px 1px #4a2b17;
    }

    button:nth-child(4):active {
        box-shadow: inset 2px 2px 6px 1px #993e00, inset -2px -2px 6px 1px #ff9906;
    }

    &:nth-child(5) button {
        width: 290px;
    }
`