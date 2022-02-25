import styled from "styled-components";

type ContaineProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContaineProps)=>(
    `
        display: flex;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;

        .item {
            color: aliceblue;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }

    `
));