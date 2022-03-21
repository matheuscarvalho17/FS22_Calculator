import {useStyle} from './styles';
import {Modal} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export interface Data {
  id: number;
  value: string | null;
  label: string | null;
}

interface ComboBoxProps {
  value: Data;
  data: Array<Data>;
  modal_text: string;
  placeholder: string;
  setValue: (value: Data) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  data,
  value,
  setValue,
  modal_text,
  placeholder,
}) => {
  const Styles = useStyle();
  const {styles} = useStyle();
  const [open, setOpen] = useState<boolean>(false);

  const Item = ({item}: {item: Data}) => (
    <Styles.ItemButton
      onPress={() => {
        setValue(item);
        setOpen(false);
      }}>
      <Styles.ItemLabel>{item.label}</Styles.ItemLabel>
    </Styles.ItemButton>
  );

  return (
    <>
      <Modal visible={open} animationType="fade" transparent>
        <Styles.ModalContainer>
          <Styles.ModalBox>
            <Styles.ModalIconView
              onPress={() => {
                setOpen(false);
              }}>
              <FontAwesome name="close" style={styles.iconExit} />
            </Styles.ModalIconView>
            <Styles.ModalLabel>{modal_text}</Styles.ModalLabel>
            <Styles.FlatList
              data={data}
              renderItem={Item}
              showsVerticalScrollIndicator={false}
            />
          </Styles.ModalBox>
        </Styles.ModalContainer>
      </Modal>
      <Styles.Box
        onPress={() => {
          setOpen(true);
        }}>
        <Styles.LabelView>
          <Styles.Label>{value.label || placeholder}</Styles.Label>
        </Styles.LabelView>
        <Styles.IconView>
          <FontAwesome5 name="angle-double-down" style={styles.icon} />
        </Styles.IconView>
      </Styles.Box>
    </>
  );
};

export default ComboBox;
