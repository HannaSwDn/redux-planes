import styled from 'styled-components';

interface Plane {
  name: string
};

interface Props {
  plane: Plane
};

function PlaneItem({ plane }: Props) {
  return (
    <Container>
      <Data>Model: {plane.name}</Data>
    </Container>
  );
};

export default PlaneItem;

const Container = styled.div``;

const Data = styled.div``;