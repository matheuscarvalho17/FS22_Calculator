import {US} from './English';
import {PT} from './Portuguese';

const version = 'PT';
const {name, string} = version === 'PT' ? PT : US;

export {name, string};
