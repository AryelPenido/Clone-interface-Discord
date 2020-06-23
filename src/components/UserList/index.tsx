import React from 'react';

import {Container,User,Avatar,Role} from './styles';

interface UserProps{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps>= ({nickname,isBot}) =>{
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () =>{ // TS
    return(
        <Container>
           <Role>Disponivel - 1</Role>
           <UserRow nickname = "Aryelp"/>

           <Role>Offline - 18</Role>
           <UserRow nickname = "Diego Fernandes" isBot/>
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />
           <UserRow nickname = "Fulano" />

           


        </Container>
    )
};

export default UserList;