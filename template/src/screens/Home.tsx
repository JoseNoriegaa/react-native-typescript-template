import React from 'react';
import styled from 'styled-components/native';

const HomeScreen: React.FC = () => (
  <Container>
    <Title>
      Home screen
    </Title>
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export default HomeScreen;
