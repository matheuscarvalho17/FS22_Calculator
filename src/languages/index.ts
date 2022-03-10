import {US} from './English';
import {PT} from './Portuguese';
import {language} from '../pages/Main';

const {name, string} = language === 'US' ? US : PT;

export {name, string};
