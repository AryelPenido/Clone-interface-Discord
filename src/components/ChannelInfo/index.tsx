import React from 'react';

import {Container, Title, HIcon,Description, Bar} from './styles';


const ChannnelInfo: React.FC = () =>{ // TS
    return(
        <Container>
            <HIcon/>
            <Title>chat-livre</Title>
            <Bar/>
            <Description>Canal aberto para conversas</Description>
        </Container>
    )
};

export default ChannnelInfo;