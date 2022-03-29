import * as Styles from './styles';
import React, {useState} from 'react';
import {useFlavor} from '../../flavor';
import {Modal, ListRenderItem, ViewStyle} from 'react-native';

//*  It is the ComboBox component.
//*  This (component) allow users to select data through a modal.

//* Default Data and ComboBox Interface
export interface Data {
  id: number;
  value: string | null;
  label: string | null;
}
interface IComboBoxProps {
  value: Data;
  data: Array<Data>;
  style?: ViewStyle;
  modal_text: string;
  placeholder: string;
  placeholderType?: 'label' | 'value';
  setValue: (value: Data) => void;
}

const ComboBox: React.FC<IComboBoxProps> = ({
  data,
  value,
  style,
  setValue,
  modal_text,
  placeholder,
  placeholderType,
}) => {
  //* Flavor hook declaration
  const {colors} = useFlavor();

  //* useState declaration
  const [open, setOpen] = useState<boolean>(false);

  //* ListRenderItem declaration
  const Item = ({item}: {item: Data}) => (
    <Styles.ItemButton
      colors={colors}
      onPress={() => {
        setValue(item);
        setOpen(false);
      }}>
      <Styles.ItemLabel colors={colors}>{item.label}</Styles.ItemLabel>
    </Styles.ItemButton>
  );

  return (
    <>
      {/* //* Modal to view the data list to select */}
      <Modal visible={open} animationType="fade" transparent>
        <Styles.ModalContainer colors={colors}>
          <Styles.ModalBox colors={colors}>
            <Styles.ModalIconView
              onPress={() => {
                setOpen(false);
              }}>
              <Styles.IconFA colors={colors} name="close" />
            </Styles.ModalIconView>
            <Styles.ModalLabel colors={colors}>{modal_text}</Styles.ModalLabel>
            <Styles.FlatList
              data={data}
              renderItem={Item as ListRenderItem<unknown>}
              showsVerticalScrollIndicator={false}
            />
          </Styles.ModalBox>
        </Styles.ModalContainer>
      </Modal>
      {/* //* Box to view the selected data and open the modal */}
      <Styles.Box
        colors={colors}
        style={style}
        onPress={() => {
          setOpen(true);
        }}>
        <Styles.LabelView>
          <Styles.Label colors={colors}>
            {(placeholderType === 'value' ? value.value : value.label) ||
              placeholder}
          </Styles.Label>
        </Styles.LabelView>
        <Styles.IconView>
          <Styles.IconFA5 colors={colors} name="angle-double-down" />
        </Styles.IconView>
      </Styles.Box>
    </>
  );
};

export default ComboBox;
