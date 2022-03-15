import {FS22} from './fs22';
import {Fendt} from './fendt';
import {JohnDeere} from './johnDeere';
import {NewHolland} from './newHolland';
import {MasseyFerguson} from './masseyFerguson';
import {apparence} from '../utils/storage';

const version = apparence;
const {name, colors} =
  version === 'FS22'
    ? FS22
    : version === 'MasseyFerguson'
    ? MasseyFerguson
    : version === 'NewHolland'
    ? NewHolland
    : version === 'Fendt'
    ? Fendt
    : JohnDeere;

export {name, colors};
