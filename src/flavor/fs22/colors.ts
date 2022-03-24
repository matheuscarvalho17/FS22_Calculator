export interface IColors {
  primary: string;
  secondary: string;
  background: string;
  background_glass: string;
  text_light: string;
  text_highlight: string;
  border_buttons: string;
  checkbox_bg: string;
}

export interface IColorsProps {
  colors: IColors;
}

const colors: IColors = {
  primary: '#2f414b',
  secondary: '#19e0fd',
  background: '#2F414B',
  background_glass: '#27251Faa',
  text_light: '#FFFFFF',
  text_highlight: '#FFFF00',
  border_buttons: '#27251F',
  checkbox_bg: '#CFCFCF',
};

export {colors};
