import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {RouteScreenName} from '../constants/route.screens';

import {StyleSheet} from 'react-native';
import {Theme} from '../constants/theme';

import Welcome from '../screens/welcome';
import Pharse from '../screens/phrase';
import React from 'react';
import Generate from '../screens/generateWallet';
import RecoverWallet from '../screens/recoverWallet';
import TestPassword from '../screens/testPassword';
import BackIcon from '../components/icons/backIcon';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const screenOptions: any = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  const headerOption: any = {
    headerStyle: styles.header,
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerTitle,
    cardStyle: styles.cardStyle,
    headerTintColor: Theme.Colors.White,
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerLeft: props => <BackIcon {...props} />,
        ...headerOption,
      }}>
      <Stack.Screen
        name={RouteScreenName.Welcome}
        component={Welcome}
        options={{...screenOptions, ...headerOption, headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreenName.Generate}
        component={Generate}
        options={{...screenOptions, headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreenName.Phrase}
        component={Pharse}
        options={{...screenOptions, ...headerOption, headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreenName.RecoverWallet}
        component={RecoverWallet}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'Recover Wallet',
        }}
      />
      <Stack.Screen
        name={RouteScreenName.TestPassword}
        component={TestPassword}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'Test Password',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    backgroundColor: Theme.Colors.Black,
    height: Theme.sizes.size100,
    borderColor: 'none',
  },
  headerTitle: {
    fontSize: Theme.sizes.size20,
    fontFamily: Theme.Fonts.Primary,
  },
  title: {
    fontFamily: Theme.Fonts.Primary,
  },
});

export default StackNavigation;
