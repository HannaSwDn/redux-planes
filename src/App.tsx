import Input from './components/Input';
import styled from "styled-components";
import PlanesList from './components/PlanesList';

import { useSelector } from 'react-redux';
import { selectPlaneList } from './features/planeSlice';

function App() {
    const planes = useSelector(selectPlaneList);

    return (
        <Container className="App">
        <h1>Airplane app</h1>
        <Input />
        <PlanesList planes={selectPlaneList} />
        </Container>
    );
}

export default App;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: lightblue;
`;