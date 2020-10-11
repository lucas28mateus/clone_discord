import React from 'react';

import Logo from '../../assets/logo.svg';
import {Button} from './styles';

export interface Props {
    Selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?:number;
}

const ServerButton: React.FC<Props> =  ({
  Selected,
  isHome,
  hasNotifications,
  mentions
}) => {
    return(
        <Button
           isHome={isHome}
           hasNotifications={hasNotifications}
           mentions={mentions}
           className={Selected ? 'active' : ''}
        >
          {isHome && <img src={Logo} alt="Rocketseat"/>}
        </Button>
    )
};

export default ServerButton;