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

//stacksceen
import Skipscreen from '../pages/AppKupa/SkipScreen/Skipscreen';
import LoginscreenAppkupa from '../pages/AppKupa/Loginscreen/Loginscreen'
import Signupscreen from '../pages/AppKupa/Loginscreen/Signupscreen';
import Verificationscreen from '../pages/AppKupa/Loginscreen/Verificationscreen';
import Congratulationscreen from '../pages/AppKupa/Congrascreen/Congratulation';
import Forgotpassword from '../pages/AppKupa/Forgotpassword/Forgotpassword';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';

//  datamenu

///////// function ///////

///////// end function ///////
const RouterAppKup = ({}) => {
  const AppStack = createStackNavigator();

  const Tabs = createBottomTabNavigator();

  function AppKupStackScreen() {
    return(
      <AppStack.Navigator initialRouteName="HomeStackScreen" headerMode="none">
        <AppStack.Screen name='HomeStackScreen' component={HomeStackScreen}/>
      </AppStack.Navigator>
    )
  }
  function AppSkipscreen() {
    return(
      <AppStack.Navigator  initialRouteName="Skipscreen" headerMode="none">
        <AppStack.Screen name='Skipscreen' component={Skipscreen}/>
        <AppStack.Screen name='HomeStackScreen' component={HomeStackScreen}/>
        <AppStack.Screen name='Signupscreen' component={Signupscreen}/>
        <AppStack.Screen name='Loginscreen' component={LoginscreenAppkupa}/>
        <AppStack.Screen name='Verificationscreen' component={Verificationscreen}/>
        <AppStack.Screen name='Congratulationscreen' component={Congratulationscreen}/>
        <AppStack.Screen name='Forgotpassword' component={Forgotpassword}/>
        
        
        
        
      </AppStack.Navigator>
    )


  }

  function HomeStackScreen(navigation) {
    return (
      <Tabs.Navigator
        //  showLabel={true}
        initialRouteName="Homescreen"
        sceneContainerStyle={{}}
        screenOptions={{
          tabBarLabelStyle: {fontSize: fontSizes.labelSize},
          headerShown: false,
          showLabel: true,

          tabBarStyle: {},
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
    );
  }

  return (
    <NavigationContainer
     
      screenOptions={{tabBarVisible: false}}>
        <AppSkipscreen/>
      </NavigationContainer>
  );
};

export default RouterAppKup;
const styles = StyleSheet.create({});
