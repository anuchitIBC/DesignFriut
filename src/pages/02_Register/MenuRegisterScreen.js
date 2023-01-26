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
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import Headerss from '../../components/Headerss';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { IconBGChange24, IconChange24, IconCheckfalse, IconEmail, IconFackbook, IconGoogle, IconHidepass, IconMessage, IconPass } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../Css/AllFontfamily';
import { TextCSS } from '../../css/Font_Text';
import { COLORSFont } from '../../css/Allcolors';
// import {fontSizes} from '../../../css/Allsizefont';
// import Spinner from 'react-native-loading-spinner-overlay';

// css sizescreen
const windowns = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//  value

const DataCheckValida = [
  {
    id: 1,
    title: 'ABC',
    icon: true
  },
  {
    id: 2,
    title: 'abc',
    icon: true
  },
  {
    id: 3,
    title: '123',
    icon: true
  },
  {
    id: 4,
    title: '!@$',
    icon: true
  }, {
    id: 5,
    title: '>8ตัว',
    icon: true
  }

];

const MenuRegisterScreen = () => {

  const [spinner, setspinner] = useState(false)

  useEffect(() => {
    return () => {

      // setspinner(!spinner)

    };
  }, [])


  return (
    <ImageBackground
      source={require('../../images/BgRegister.png')}
      resizeMode={'cover'}
      style={{ height: '100%', backgroundColor: '#181920' }}>


      <Headerss
        badgeNumber="2"
        navigation={''}
        backScreen={false}
        ArrowColor={true}
        title={
          ''
        }
      />






      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView style={{ flex: 1 }}>




          <View style={{ backgroundColor: null, marginHorizontal: 16 }}>
            <View>
              <Text style={[TextCSS.Text24White_IBM_Regular, { marginBottom: 48 }]} >{'สมัครสมาชิก'}</Text>
            </View>

            <TouchableOpacity style={[styles.Btncss, { backgroundColor: '#F3F5F6' }]}>
              <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                <IconGoogle />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={TextCSS.Text16Black_IBM_Regular}>{'สมัครสมาชิกผ่าน Google'}</Text>
              </View>
            </TouchableOpacity>



            <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row' }]}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#0125E1', '#2084FC']}
                style={{

                  height: 48,
                  borderRadius: 12,
                  flexDirection: 'row'
                }}>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>



                  <View style={{ flex: 0.3, alignItems: 'flex-end' }}>
                    <IconFackbook />
                  </View>

                  <View style={{ width: 16 }}></View>

                  <View style={{ flex: 1 }}>
                    <Text style={[TextCSS.Text16White_IBM_Regular,]} >
                      {'สมัครสมาชิกผ่าน Facebook'}</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={[TextCSS.Text16White_IBM_Regular, { marginTop: 24, textAlign: 'center' }]}>{'หรือสมัครผ่านอีเมล'}</Text>

          </View>

          <View style={{ flex: 1, backgroundColor: null, marginHorizontal: 16 }}>

            <View style={{ marginBottom: 20 }}>
              <Text style={[TextCSS.Text14Gray01_IBM_Regular, { marginBottom: 5 }]}>{'อีเมล'}</Text>
              <View style={styles.ViewTextinput}  >
                <View style={{ justifyContent: 'center' }}>
                  <IconEmail />
                </View>
                <View style={{ width: 10 }}></View>
                <TextInput
                  placeholder='อีเมล'
                  style={TextCSS.Text16Gray_IBM_Regular}
                  placeholderTextColor="#404349"
                >

                </TextInput>
              </View>

            </View>

            <View style={{ marginBottom: 20 }}>
              <Text style={[TextCSS.Text14Gray01_IBM_Regular, { marginBottom: 5 }]}>{'รหัสผ่าน'}</Text>
              <View style={styles.ViewTextinput}  >
                <View style={{ justifyContent: 'center' }}>
                  <IconPass />
                </View>
                <View style={{ width: 10 }}></View>
                <TextInput
                  secureTextEntry={true}
                  placeholder='รหัสผ่าน'
                  style={[TextCSS.Text16Gray_IBM_Regular, { flex: 1 }]}
                  placeholderTextColor="#404349"
                >

                </TextInput>
                <TouchableOpacity style={{ marginHorizontal: 10, maxWidth: 10 }}>
                  <IconHidepass />
                </TouchableOpacity>


              </View>

            </View>

            <View style={{ flexDirection: 'row', width: '100%', marginBottom: 14 }}>
              {DataCheckValida.map(data => {
                return (
                  <View style={styles.ViewCheckValida}>
                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', }}>
                      <IconCheckfalse />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={TextCSS.Text14black01_IBM_Regular}>{data.title}</Text>
                    </View>
                  </View>
                )
              })}





            </View>

            <View>
              <Text style={[TextCSS.Text14Gray01_IBM_Regular, { marginBottom: 5 }]}>{'ยืนยันรหัสผ่าน'}</Text>
              <View style={styles.ViewTextinput}  >
                <View style={{ justifyContent: 'center' }}>
                  <IconPass />
                </View>
                <View style={{ width: 10 }}></View>
                <TextInput
                  secureTextEntry={true}
                  placeholder='ยืนยันรหัสผ่าน'
                  style={[TextCSS.Text16Gray_IBM_Regular, { flex: 1 }]}
                  placeholderTextColor="#404349"
                >

                </TextInput>
                <TouchableOpacity style={{ marginHorizontal: 10, maxWidth: 10 }}>
                  <IconHidepass />
                </TouchableOpacity>


              </View>

            </View>





          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{ flex: 0.15, backgroundColor: null, marginHorizontal: 16 }}>

        <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row' }]}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

            colors={['#2A2C31', '#2A2C31']}
            // colors={['#0125E1', '#2084FC']}
            style={{

              height: 48,
              borderRadius: 12,
              flexDirection: 'row'
            }}>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>

              <View style={{ flex: 1 }}>
                {/* <Text style={[TextCSS.Text16White_IBM_Regular,{textAlign:'center'}]} >
                  {'สมัครสมาชิก'}</Text> */}
                <Text style={[TextCSS.Text14Gray_IBM_Regular, { textAlign: 'center' }]} >
                  {'สมัครสมาชิก'}</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>







      </View>

    </ImageBackground>
  );
};

export default MenuRegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinnerTextStyle: {
    color: 'red'
  },
  carouselContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'Regular',
    textAlign: 'center',
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  Btncss: {
    height: 48,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16
  },
  ViewTextinput:
  {
    borderColor: COLORSFont.Gray01, borderWidth: 1, flexDirection: 'row',
    height: 48, padding: 12, borderRadius: 12
  },
  ViewCheckValida: { width: 64, borderRadius: 54, padding: 2, paddingRight: 4, flexDirection: 'row', marginHorizontal: 3, backgroundColor: '#FFF', }


});
