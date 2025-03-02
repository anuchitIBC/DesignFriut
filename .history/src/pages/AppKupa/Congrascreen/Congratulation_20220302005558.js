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
  Easing,
} from 'react-native';
import Style from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import react from 'react';
import Allcss from '../../../css/Allcss';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../css/Allcolors';
import AppIntroSlider from '../../../lib_edit/react-native-app-intro-slider';

// css sizescreen
const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
import LottieView from 'lottie-react-native';

//  value

const Congratulationscreen = ({navigation}) => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;
  const [showRealApp, setshowRealApp] = useState(false);
  const [nextone, setnextone] = useState(0);

  const [showPassword, setshowPassword] = useState(true);

  const progress = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  _Nextone = () => {
    // setnextone(true);
  };

  return (
    <SafeAreaView style={[{backgroundColor: COLORS.white, flex: 1}]}>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <View style={{ flex: 1}}>
          {/* <LottieView source={require('../../../config/dataimgjson/1.json')} progress={progress}  /> */}
         

          <View style={{flex:1}}>
          <LottieView
            source={require('../../../config/dataimgjson/1.json')}
            autoPlay
            loop
          />
          


          </View>
          <View style={{flex:1}}>
              <Text style={{fontSize:22,fontWeight:'600', textAlign:'center',marginBottom:10}}>
                  {'Congratulations!'}
              </Text>
              <Text style={{textAlign:'center'}}>
                  {"Your account is complete, please enjoy the best \n menu from us. "}
              </Text>
          </View>
        </View>

        <TouchableOpacity 
         onPress={() => {
          navigation.replace('HomeStackScreen');
        }}
        style={Style.buttonlogin}>
          <Text style={Style.textbuttonlogin}>{'Get Started'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Congratulationscreen;
