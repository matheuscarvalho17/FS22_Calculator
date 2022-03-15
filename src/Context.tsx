import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect} from 'react';
import {createContext, useContext, useState} from 'react';

interface AppContextData {
  language: string;
  SetLanguage: Function;
}
const AppContext = createContext<AppContextData>({} as AppContextData);
export function Context({children}: {children: any}) {
  //useStates
  const [language, setLanguage] = useState<string>('US');
  //functions
  async function SetLanguage(newLanguage: string) {
    setLanguage(newLanguage);
    await AsyncStorage.setItem('@language', newLanguage);
  }
  //on start
  useEffect(() => {
    (async () => {
      const v = await AsyncStorage.getItem('@language');
      if (v) {
        setLanguage(v);
      }
    })();
  });
  return (
    <AppContext.Provider
      value={{
        language: language,
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
