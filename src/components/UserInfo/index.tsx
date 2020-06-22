import React from 'react';

import {Container, MicrophoneIcon, AudioIcon, SettingsIcon,Avatar,UserData,Profile,Icons} from './styles';


const UserInfo: React.FC = () =>{ // TS
    return(
        <Container>
           <Profile>
                <Avatar/>
                <UserData>
                    <strong>Aryelp</strong>
                    <span>#1111</span>
                </UserData>
           </Profile>
                
            
            <Icons>
                <MicrophoneIcon/>
                <AudioIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>
    )
};

export default UserInfo;