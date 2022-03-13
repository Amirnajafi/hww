import React from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Theme} from '../../constants/theme';
import {useKeyboard} from '../../hooks/useKeyboard';
import {windowWidth} from '../../util';

interface Props {
  children: any;
}

const ScrolledView = ({children}: Props) => {
  const isKeyboardOpen = useKeyboard();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={isKeyboardOpen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>{children}</View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: Theme.Colors.Black,
  },
  inner: {
    paddingHorizontal: Theme.Dimensions.Default,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default ScrolledView;
