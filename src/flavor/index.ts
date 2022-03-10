import {FS22} from './fs22';
import {Fendt} from './fendt';
import {JohnDeere} from './johnDeere';
import {NewHolland} from './newHolland';
import {MasseyFerguson} from './masseyFerguson';

const version = 'JohnDeere';
const {name, colors} =
  version === 'JohnDeere'
    ? JohnDeere
    : version === 'MasseyFerguson'
    ? MasseyFerguson
    : version === 'NewHolland'
    ? NewHolland
    : version === 'Fendt'
    ? Fendt
    : FS22;

export {name, colors};
