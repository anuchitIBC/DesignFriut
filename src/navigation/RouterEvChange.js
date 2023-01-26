import React, { useEffect, useState, useRef } from 'react';

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

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';

// import screen //////

import Homescreen from '../pages/AppIntranet/Home/Homescreen';
import Checklistproducts from '../pages/AppIntranet/Checklistproduct/Checklistproducts';

import IconEntypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../css/Allcolors';
import { fontSizes } from '../css/Allsizefont';
import {
  IconChange24, IconCheckSucess, IconDrive, IConMenuScan, Iconpupm,
  IconStorytime, IconProfiles
} from '../Icon/Customs';
import { FONTFAMILY_ } from '../css/Allfontfamily';
import LoginWithEmail from '../pages/01_Login/LoginWithEmailScreen';
import MenuLoginSrceen from '../pages/01_Login/MenuLoginSrceen'
import SkinSrceen from '../pages/01_Login/SkinSrceen'
import MenuRegisterScreen from '../pages/02_Register/MenuRegisterScreen'
import OtpScreen from '../pages/02_Register/OtpScreen'
import RegisterProfileScreen from '../pages/02_Register/RegisterProfileScreen'
import ConsentScreen from '../pages/03_ConsentPersonal/ConsentScreen';
import ComponentResetpassSucess from '../pages/04_PIN/ComponentResetpassSucessScreen'
import LoginPinScreen from '../pages/04_PIN/LoginPinScreen'
import MenuFingerprintScanScreen from '../pages/04_PIN/MenuFingerprintScanScreen'
import CarInfoemation from '../pages/05_CarInformation/CarInfoemationScreen';
import HomeEV from '../pages/06_Home/HomeScreen'
import MapsSrceen from '../pages/06_Home/MapsSrceen'



// css sizescreen
const windowns = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);


import { createStackNavigator } from '@react-navigation/stack';
import { TextCSS } from '../css/Font_Text';
//  datamenu

///////// function ///////

///////// end function ///////

const RouterEvChange = () => {

  const AppStack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  // function AppEVStackScreen() {
  //   return(
  //     <AppStack.Navigator initialRouteName="HomeStackScreen" headerMode="none">
  //       <AppStack.Screen name='HomeStackScreen' component={TabHomeStackScreen}/>
  //     </AppStack.Navigator>
  //   )
  // }

  function AppSkipscreen() {
    return (
      <AppStack.Navigator initialRouteName="SkinSrceen" headerMode="none">
        <AppStack.Screen name='SkinSrceen' component={SkinSrceen} />
        <AppStack.Screen name='MenuLoginSrceen' component={MenuLoginSrceen} />
        <AppStack.Screen name='MenuRegisterScreen' component={MenuRegisterScreen} />
        <AppStack.Screen name='OtpScreen' component={OtpScreen} />
        <AppStack.Screen name='LoginPinScreen' component={LoginPinScreen} />
        <AppStack.Screen name='ConsentScreen' component={ConsentScreen} />
        <AppStack.Screen name='MenuFingerprintScanScreen' component={MenuFingerprintScanScreen} />
        <AppStack.Screen name='CarInfoemation' component={CarInfoemation} />
        <AppStack.Screen name='LoginWithEmail' component={LoginWithEmail} />
        <AppStack.Screen name='MapsSrceen' component={MapsSrceen} />
        <AppStack.Screen name='HomeStackScreen' component={TabHomeStackScreen} />



      </AppStack.Navigator>
    )


  }

  function TabHomeStackScreen(navigation) {
    return (


      <Tabs.Navigator
        //  showLabel={true}

        sceneContainerStyle={{}}
        
        screenOptions={{
          tabBarLabelStyle: { fontSize: fontSizes.labelSize },
          headerShown: false,
          showLabel: true,
          lazyLoad: true,
        
          tabBarStyle: {
            
            
            // backgroundColor: 'transparent',
            backgroundColor:'#181920',
            borderTopColor: 'transparent',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: COLORS.bglinearblue,
            shadowOffset: {
              width: 0,
              // height: 2,
              height: Platform.OS === 'ios' ? -3 : 10,
            },
            shadowOpacity: Platform.OS === 'ios' ? 0.06 : 0.25,

            shadowRadius: 3.84,
            



           height:80,
            // left: -6,
            // right: -6,
            bottom: -1,
            // paddingHorizontal:20



          },
          tabBarPosition: 'bottom',

          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
              backgroundColor: 'red',
              height: 22,
              position: 'absolute',
              top: '50%',
              marginTop: -11
            },
            activeTintColor: 'white',
            pressColor: 'white',
            style: {
              backgroundColor: 'red',
              height: 44,
              width
            }
          }

        }}
        backBehavior="none">
        <Tabs.Screen
          name="HomeStackScreen1"
          component={HomeEV}
          options={{
            tabBarLabel: ({ tintColor, focused }) => (
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={TextCSS.Text12blue02500_IBM_Regular}>
                  {'หน้าแรก'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View style={{ top: 5 }}>
                <IconDrive />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="MapsSrceen"
          component={MapsSrceen}
          options={{
            tabBarLabel: ({ tintColor, focused }) => (
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={TextCSS.Text12Gray02400_IBM_Regular}>
                  {'สเตชั่น'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View style={{ top: 5 }}>
                <Iconpupm />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Homescreen1"
          component={HomeEV}
          options={{
            tabBarLabel: () => <View />,
            tabBarIcon: ({ tintColor, focused }) => (
              <View
                style={focused ? {
                  justifyContent: 'center',
                  marginTop: -40,
                  borderRadius: 50,
                  height: 80,
                  width: 80,

                  shadowColor: COLORS.bglinearblue,
                  shadowOffset:
                    Platform.OS === 'ios' ?
                      {
                        width: 0,
                        height: 0,
                      } : {
                        width: 0,
                        height: 1
                      },
                  shadowOpacity: 0.58,
                  shadowRadius: 6.00,

                  elevation: 24,
                } : {
                  justifyContent: 'center',
                  marginTop: -40,
                  borderRadius: 50,
                  height: 80,
                  width: 80,

                  shadowColor: COLORS.bglinearblue,

                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',

                    borderRadius: 50,
                    height: 65,
                    width: 65,

                  }}>
                  <IConMenuScan />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="HomeStackScreen12"
          component={HomeEV}
          options={{
            tabBarLabel: ({ tintColor, focused }) => (
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={TextCSS.Text12Gray02400_IBM_Regular}>
                  {'ประวัติ'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View style={{ top: 5 }}>
                <IconStorytime />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="HomeStackScreen13"
          component={HomeEV}
          options={{
            tabBarLabel: ({ tintColor, focused }) => (
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={TextCSS.Text12Gray02400_IBM_Regular}>
                  {'โปรไฟล์'}
                </Text>
              </View>
            ),
            tabBarIcon: () => (
              <View style={{ top: 5 }}>
                <IconProfiles />
              </View>
            ),
          }}
        />
      </Tabs.Navigator>

    )
  }









  return (
    <NavigationContainer
    

      screenOptions={{ tabBarVisible: false }}>
      {/* <MenuRegisterScreen/> */}
      {/* <AppSkipscreen /> */}
      <TabHomeStackScreen />
    </NavigationContainer>
  )
};

export default RouterEvChange;
const styles = StyleSheet.create({});
