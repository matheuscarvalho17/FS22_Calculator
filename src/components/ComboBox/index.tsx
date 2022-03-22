import {styles} from './styles';
import * as Styles from './styles';
import React, {useState} from 'react';
import {useFlavor} from '../../flavor';
import {Modal, ListRenderItem, ViewStyle} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
  setValue: (value: Data) => void;
}

const ComboBox: React.FC<IComboBoxProps> = ({
  data,
  value,
  style,
  setValue,
  modal_text,
  placeholder,
}) => {
  const {colors} = useFlavor();
  const [open, setOpen] = useState<boolean>(false);

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
      <Modal visible={open} animationType="fade" transparent>
        <Styles.ModalContainer colors={colors}>
          <Styles.ModalBox colors={colors}>
            <Styles.ModalIconView
              onPress={() => {
                setOpen(false);
              }}>
              <FontAwesome name="close" style={styles.iconExit} />
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
      <Styles.Box
        colors={colors}
        style={style}
        onPress={() => {
          setOpen(true);
        }}>
        <Styles.LabelView>
          <Styles.Label colors={colors}>
            {value.label || placeholder}
          </Styles.Label>
        </Styles.LabelView>
        <Styles.IconView>
          <FontAwesome5 name="angle-double-down" style={styles.icon} />
        </Styles.IconView>
      </Styles.Box>
    </>
  );
};

export default ComboBox;
