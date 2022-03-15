import AsyncStorage from '@react-native-community/async-storage';

export let language: string = 'US';
export let apparence: string = 'FS22';

export async function start() {
  const v = await AsyncStorage.getItem('@language');
  if (v) {
    language = v;
  }
}

export function setLanguage(value: string) {
  language = value;
}
