import React from 'react';

import {Container,Category,AddCategoryIcon} from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () =>{ // TS
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName = "chat-livre"/>
            <ChannelButton channelName = "trabalho"/>
            <ChannelButton channelName = "fifinha"/>
            <ChannelButton channelName = "valorant"/>
            <ChannelButton channelName = "CSGO"/>


        </Container>
    )
};

export default ChannelList;