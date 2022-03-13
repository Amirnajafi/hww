import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Theme} from '../../constants/theme';
import StyledText from '../StyleText';

interface Props {
  icon?: any;
  heading: string;
  children?: any;
  showChild?: boolean;
  onPress?: () => void;
}

const TreeView = ({
  icon,
  heading,
  children,
  showChild = false,
  ...props
}: Props) => {
  return (
    <TouchableOpacity {...props} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {icon && icon}
          <StyledText style={{marginLeft: Theme.sizes.size15}}>
            {heading}
          </StyledText>
        </View>
        {showChild && children && <View>{children}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  subContainer: {
    flexDirection: 'row',
    marginBottom: Theme.sizes.size6,
  },
});
export default TreeView;
