import React from 'react';
import Input from './components/input';
import styled from "styled-components";

function App() {
    return (
        <Container className="App">
        <h1>Airplane app</h1>
        <Input />
        </Container>
    );
}

export default App;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: lightblue;
`;