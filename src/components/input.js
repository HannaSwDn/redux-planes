import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { savePlane } from "../features/planeSlice";

const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addPlane = () => {
        console.log('adding plane');
        dispatch(savePlane({
            item: input,
            done: false
        }));
    };

    return (
        <Container className="input">
            <TextField type="text" value={input} onChange={e => setInput(e.target.value)} />
            <Add onClick={addPlane}>Add plane</Add>
        </Container>
        
    );
};

export default Input;

const Container = styled.div``;

const TextField = styled.input``;

const Add = styled.button``;