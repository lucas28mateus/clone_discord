import React, {useRef, useEffect} from 'react';
import ChannelMessage, {Mention} from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
   
   useEffect(() => {
      const div = messagesRef.current;
      
      if (div) {
         div.scrollTop = div.scrollHeight;
      }
   }, [messagesRef]);

   return (
      <Container ref={messagesRef}>
        <Messages>
           {Array.from(Array(15).keys()).map((n) => (
              <ChannelMessage
              key={n}
              author="lucas mateus"
              date="28/09/2020"
              content="bora pro gamer ???"
               />
           ))}

            <ChannelMessage 
             author="Meliodas"
             date="28/09/2020"
             content={
                <>
                  <Mention>@Lucas mateus</Mention>, bora jogar pra subir rank ??
                </>
             }
             hasMentions
             isBot
           />
        </Messages>

        <InputWrapper>
           <Input type="text" placeholder="Conversar em #Chat-livre" />
           <InputIcon />
        </InputWrapper>
      </Container>
   );
   
};

export default ChannelData;