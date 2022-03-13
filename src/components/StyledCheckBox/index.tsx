import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import StyledText from '../StyleText';
import CheckBox from 'react-native-check-box';
import {Theme} from '../../constants/theme';

interface Props {
  isChecked: boolean;
  text: string;
  onClick: () => void;
}

const StyledCheckBox = ({isChecked, text, ...props}: Props) => {
  return (
    <View style={styles.checkBoxContainer}>
      <CheckBox checkBoxColor="#fff" isChecked={isChecked} {...props} />
      {text && (
        <StyledText style={[styles.text, styles.checkBox]}>{text}</StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Theme.FontSizes.Small,
  },
  checkBox: {
    marginTop: Theme.sizes.size4,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    marginBottom: Theme.sizes.size10,
    marginTop: Theme.sizes.size40,
  },
});
export default StyledCheckBox;
