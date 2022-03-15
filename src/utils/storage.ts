import AsyncStorage from '@react-native-community/async-storage';

export let language: string = 'US';
export let apparence: string = 'FS22';

export async function start() {
  const value = await AsyncStorage.getItem('@language');
  if (value) {
    language = value;
  }
}

export function setLanguage(value: string) {
  language = value;
}
