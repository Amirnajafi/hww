import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import { windowWidth } from '../../util';
import WalletIcon from '../icons/walletIcon';
import StyledText from '../StyleText';

const StyleHeader = () => {
  return (
    <View style={styles.container}>
     <StyledText></StyledText>
      <StyledText>hdhdhdhdhh</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    
  }
});

export default StyleHeader;
