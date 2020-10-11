import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon, } from './styles';

const ChannelList: React.FC = () => {
   return (
      <Container>
        <Category>
           <span>Canais de texto</span>
           <AddCategoryIcon />
        </Category>

        <ChannelButton channelName="Chat-livre"/>
        <ChannelButton channelName="Trabalho"/>
        <ChannelButton channelName="Lolzinho"/>
        <ChannelButton channelName="Csgo"/>
        <ChannelButton channelName="Valorant"/>
      </Container>
   );
   
};

export default ChannelList;