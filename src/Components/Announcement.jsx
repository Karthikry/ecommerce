import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 10px;
`

const Announcement = () => {
  return (
    <Container>
        This is our first project
    </Container>
  );
}

export default Announcement;
