import React, {useEffect, useState, useRef} from 'react';

// import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {CurvedBottomBar} from 'react-native-utils-navigation-bar';

// import screen //////

import Homescreen from '../pages/AppIntranet/Home/Homescreen';
import Checklistproducts from '../pages/AppIntranet/Checklistproduct/Checklistproducts';
import Loginscreen from '../pages/AppIntranet/Login/Loginscreen';

import IconEntypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../css/Allcolors';
import {fontSizes} from '../css/Allsizefont';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  datamenu

///////// function ///////

///////// end function ///////

const Routers = ({}) => {
  const AppStack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  function AppSack() {
    return (
      <AppStack.Navigator initialRouteName="Loginscreen" headerMode="none">
        <AppStack.Screen name="Loginscreen" component={Loginscreen} />
        <AppStack.Screen name="Tabshome" component={AppTabs} />
      </AppStack.Navigator>
    );
  }
  function AppTabs(navigation) {
    return (
      <Tabs.Navigator
        showLabel={true}
        sceneContainerStyle={{}}
        screenOptions={{
          tabBarLabelStyle: {fontSize: fontSizes.labelSize},
          headerShown: false,
          showLabel: true,

          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              // height: 2,
              height: Platform.OS === 'ios' ? -3 : 10,
            },
            shadowOpacity: Platform.OS === 'ios' ? 0.06 : 0.25,

            shadowRadius: 3.84,
          },
        }}
        backBehavior="none">
        <Tabs.Screen
          name="Homescreen"
          component={Homescreen}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bglinearblue
                      : COLORS.placeholderTextColor,
                  }}>
                  {'หน้าแรก'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View>
                <Image
                  style={{resizeMode: 'contain', width: 30, height: 30}}
                  source={require('../../src/pages/image/home.png')}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Checklistproducts"
          component={Checklistproducts}
          options={{
            tabBarLabel: () => <View />,
            tabBarIcon: ({tintColor, focused}) => (
              <View
                style={
                  focused
                    ? {
                        justifyContent: 'center',
                        marginTop: -40,
                        borderRadius: 50,
                        height: 80,
                        width: 80,
                        backgroundColor: COLORS.bggray,
                        shadowColor: COLORS.bglinearblue,
                        shadowOffset:
                          Platform.OS === 'ios'
                            ? {
                                width: 0,
                                height: 0,
                              }
                            : {
                                width: 0,
                                height: 1,
                              },
                        shadowOpacity: 0.58,
                        shadowRadius: 6.0,

                        elevation: 24,
                      }
                    : {
                        justifyContent: 'center',
                        marginTop: -40,
                        borderRadius: 50,
                        height: 80,
                        width: 80,
                        backgroundColor: COLORS.bggray,
                        shadowColor: COLORS.bglinearblue,
                      }
                }>
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.bglinearblue,
                    borderRadius: 50,
                    height: 65,
                    width: 65,
                  }}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      resizeMode: 'contain',
                      width: 30,
                      height: 30,
                    }}
                    source={require('../../src/pages/image/qrcode.png')}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Checklistproducts1"
          component={Checklistproducts}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bglinearblue
                      : COLORS.placeholderTextColor,
                  }}>
                  {'ประวัติ'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View>
                <Image
                  style={{resizeMode: 'contain', width: 30, height: 30}}
                  source={require('../../src/pages/image/history.png')}
                />
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <NavigationContainer screenOptions={{tabBarVisible: false}}>
      <AppSack />
    </NavigationContainer>
  );
};

export default Routers;
const styles = StyleSheet.create({});
