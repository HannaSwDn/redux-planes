import styled from 'styled-components';
import PlaneItem from './PlaneItem';

interface Plane {
    name: string
};

interface Props {
    planes: Plane[]
}

const PlanesList = ({ planes }: Props) => {
    const addTimeStampToPlane = <T extends Plane>(planes: T[]): any => {
        planes.forEach(plane => {
            return {...plane, addedAt: Date.now()}
        });
    };

    return (    
        <Container>
            {planes.map((plane: Plane) => {
                return <PlaneItem plane={plane} key={Math.floor(Math.random() * 584908504380)} />
            })}
        </Container>
    );
};

export default PlanesList;

const Container = styled.div``;