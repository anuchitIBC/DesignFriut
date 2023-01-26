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
import { IconBGChange24, IconChange24, IconCheckfalse, IconEmail, IconFackbook, IconGoogle, IconHidepass, IconMessage, IconPass, IconPhone, IconPreson } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../css/Allfontfamily';
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



const RegisterProfile = () => {

    const [spinner, setspinner] = useState(false)

    useEffect(() => {
        return () => {

            // setspinner(!spinner)

        };
    }, [])


    return (
        <ImageBackground
            source={require('../../images/BgRegister.png')}
            resizeMode={'contain'}
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
                            <Text style={[TextCSS.Text24White_IBM_Regular, { marginBottom: 48 }]} >{'ข้อมูลส่วนตัว'}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, backgroundColor: null, marginHorizontal: 16 }}>

                        <View style={{ marginBottom: 20 }}>
                            <Text style={[TextCSS.Text14Gray01_IBM_Regular, { marginBottom: 5 }]}>{'ชื่อ'}</Text>
                            <View style={styles.ViewTextinput}  >
                                <View style={{ justifyContent: 'center' }}>
                                   <IconPreson/>
                                </View>
                                <View style={{ width: 10 }}></View>
                                <TextInput
                                    placeholder='ชื่อ'
                                    style={TextCSS.Text16Gray_IBM_Regular}
                                    placeholderTextColor="#404349"
                                >

                                </TextInput>
                            </View>

                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <Text style={[TextCSS.Text14Gray01_IBM_Regular, { marginBottom: 5 }]}>{'นามสกุล'}</Text>
                            <View style={styles.ViewTextinput}  >
                                <View style={{ justifyContent: 'center' }}>
                                <IconPreson/>
                                </View>
                                <View style={{ width: 10 }}></View>
                                <TextInput
                                    // secureTextEntry={true}
                                    placeholder='นามสกุล'
                                    style={[TextCSS.Text16Gray_IBM_Regular, { flex: 1 }]}
                                    placeholderTextColor="#404349"
                                >

                                </TextInput>
                              


                            </View>

                        </View>



                        <View>
                            <Text style={[TextCSS.Text14Gray01_IBM_Regular, { marginBottom: 5 }]}>{'เบอร์โทรศัพท์'}</Text>
                            <View style={styles.ViewTextinput}  >
                                <View style={{ justifyContent: 'center' }}>
                                 <IconPhone/>
                                </View>
                                <View style={{ width: 10 }}></View>
                                <TextInput
                                keyboardType='numeric'
                                    // secureTextEntry={true}
                                    placeholder='เบอร์โทรศัพท์'
                                    style={[TextCSS.Text16Gray_IBM_Regular, { flex: 1 }]}
                                    placeholderTextColor="#404349"
                                >

                                </TextInput>
                               


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

export default RegisterProfile;
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
