import styled from "styled-components";

export const Container = styled.button`
    width: 65px;
    height: 65px;
    background-color: #0E0E0E;
    box-shadow: 2px 2px 6px 1px #080809, -2px -2px 6px 1px #18191B;
    border: none;
    border-radius: 20px;
    margin: 5px;
    font-size: 20px;
    color: white;

    &:active {
        box-shadow: inset 2px 2px 6px 1px #080809, inset -2px -2px 6px 1px #18191B;
    }
`