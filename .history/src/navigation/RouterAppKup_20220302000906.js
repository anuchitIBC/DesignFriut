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



import Routers from './Routers';
import Homefresh from '../pages/Home/Homefresh';
import Homekupascreen from '../pages/AppKupa/Homescreen/HomeKupascreen';
import {fontSizes} from '../css/Allsizefont';
import {COLORS} from '../css/Allcolors';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();


//  datamenu

///////// function ///////

///////// end function ///////
function RouterAppKup() {
    return (
      <NavigationContainer screenOptions={{tabBarVisible: false}}>
      <Tabs.Navigator
        //  showLabel={true}
        sceneContainerStyle={{}}
        screenOptions={{
          tabBarLabelStyle: {fontSize: fontSizes.labelSize},
          headerShown: false,
          showLabel: true,

          tabBarStyle: {
         
          },
        }}
        backBehavior="none">
        <Tabs.Screen
          name="Homescreen"
          component={Homekupascreen}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bgGrreen
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
          name="Checklistproducts1"
          component={Homekupascreen}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bgGrreen
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
         <Tabs.Screen
          name="Checklistproducts2"
          component={Homekupascreen}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bgGrreen
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
       
        <Tabs.Screen
          name="Checklistproducts"
          component={Homekupascreen}
          options={{
            tabBarLabel: ({tintColor, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused
                      ? COLORS.bgGrreen
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
    </NavigationContainer>
    );
  }


export default RouterAppKup;
const styles = StyleSheet.create({});
