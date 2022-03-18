import {useStyle} from './styles';
import {Modal} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface ComboBoxProps {
  label: string;
  modal_text: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({label, modal_text}) => {
  const Styles = useStyle();
  const {styles} = useStyle();
  const [open, setOpen] = useState<boolean>(false);

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
          </Styles.ModalBox>
        </Styles.ModalContainer>
      </Modal>
      <Styles.Box
        onPress={() => {
          setOpen(true);
        }}>
        <Styles.LabelView>
          <Styles.Label>{label}</Styles.Label>
        </Styles.LabelView>
        <Styles.IconView>
          <FontAwesome5 name="angle-double-down" style={styles.icon} />
        </Styles.IconView>
      </Styles.Box>
    </>
  );
};

export default ComboBox;
