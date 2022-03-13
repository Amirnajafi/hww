import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {RouteScreenName} from '../constants/route.screens';
import {Theme} from '../constants/theme';
import HomeIcon from '../components/icons/homeIcon';
import Welcome from '../screens/welcome';
import Phrase from '../screens/phrase';

export interface BottomTabIcon {
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle: style.tabBarStyle,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name={RouteScreenName.Welcome}
        component={Welcome}
        options={(route: any) => ({
          tabBarLabel: '',
          tabBarIcon: ({color, ...rest}: BottomTabIcon) => (
            <HomeIcon color={color} route={route} {...rest} />
          ),
        })}
      />
      <Tab.Screen
        name={RouteScreenName.Phrase}
        component={Phrase}
        options={(route: any) => ({
          tabBarLabel: '',
          tabBarIcon: ({color, ...rest}: BottomTabIcon) => (
            <HomeIcon color={color} route={route} {...rest} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    backgroundColor: Theme.Colors.Black,
  },
  tabBarStyle: {
    borderTopWidth: Theme.sizes.size0,
    paddingBottom: Theme.sizes.size10,
    paddingTop: Theme.sizes.size20,
    height: Theme.sizes.size50,
    backgroundColor: Theme.Colors.White,
  },
});

export default BottomTabs;
