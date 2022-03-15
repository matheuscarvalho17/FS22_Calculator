import React, {useEffect} from 'react';
import {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AppContextData {
  flavor: string;
  language: string;
  SetFlavor: Function;
  SetLanguage: Function;
}
const AppContext = createContext<AppContextData>({} as AppContextData);
export function Context({children}: {children: any}) {
  //useStates
  const [flavor, setFlavor] = useState<string>('FS22');
  const [language, setLanguage] = useState<string>('US');

  //functions
  async function SetLanguage(newLanguage: string) {
    setLanguage(newLanguage);
    await AsyncStorage.setItem('@language', newLanguage);
  }
  async function SetFlavor(newFlavor: string) {
    setFlavor(newFlavor);
    await AsyncStorage.setItem('@flavor', newFlavor);
  }

  //on start
  useEffect(() => {
    (async () => {
      const valueL = await AsyncStorage.getItem('@language');
      const valueF = await AsyncStorage.getItem('@flavor');
      if (valueL) {
        setLanguage(valueL);
      }
      if (valueF) {
        setFlavor(valueF);
      }
    })();
  });

  return (
    <AppContext.Provider
      value={{
        flavor: flavor,
        language: language,
        SetFlavor: SetFlavor,
        SetLanguage: SetLanguage,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useContextApp must be used within an AuthProvider');
  }

  return context;
}
