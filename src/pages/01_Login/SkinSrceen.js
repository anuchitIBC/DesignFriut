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
    Platform,
} from 'react-native';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { IconArrowRight, IconBGChange24, IconChange24, IconFackbook, IconGoogle, IconMessage } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../css/Allfontfamily';
import { TextCSS } from '../../css/Font_Text';
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

// const Dataproducts = [
//   {
//     key: 1,
//     title: 'All Your favorites foods',
//     price: '$19.99',
//     image: require('../../image/img11.jpeg'),
//   },
//   {
//     key: 2,
//     title: 'Get delivery at your \n doorstep',
//     price: '$19.99',
//     image: require('../../image/img22.jpeg'),
//   },
//   {
//     key: 3,
//     title: 'Get delivery at your \n doorstep',
//     price: '$19.99',
//     image: require('../../image/foodskip.png'),
//   },
//   {
//     key: 4,
//     title: 'Get delivery at your \n doorstep',
//     price: '$19.99',
//     image: require('../../image/foodskip.png'),
//   },
// ];

const SkinSrceen = ({navigation}) => {

    const [spinner, setspinner] = useState(false)

    useEffect(() => {
        return () => {

            // setspinner(!spinner)

        };
    }, [])


    return (
        <ImageBackground
            source={require('../../images/Bgskin.png')}
            resizeMode={'cover'}
            style={{ height: '100%', backgroundColor: '#181920' }}>

            <View style={{ flex: 1, backgroundColor: null }}>
                <View style={{ marginTop:Platform.OS==='android'?80: 108, marginHorizontal: 20 }}>
                    <Text style={TextCSS.Text24White_IBM_Regular}>{'ค้นหาสถานี'}</Text>
                    <Text style={[TextCSS.Text14White_IBM_Regular, { marginTop: 8 }]}>
                        {'จุดหมายปลายทางของคุณอยู่ใกล้แค่เอื้อม\nเปิดแอปและป้อนตำแหน่งที่คุณต้องการไป'}</Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: null, }}>
                <Image
                    style={{ width: '80%', height: '110%',left:'30%' }}
                    source={require('../../images/car24.png')}
                    resizeMode={'contain'}
                />
            </View>

            <View style={styles.ViewBtncss}>
                <TouchableOpacity 

                onPress={()=>{
                    navigation.navigate('MenuLoginSrceen');
                }}


                style={[{ backgroundColor: null, flexDirection: 'row' }]}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#0125E1', '#2084FC']}
                        style={{
                            width: '100%',
                            height: 48,
                            borderRadius: 12,
                            flexDirection: 'row'
                        }}>


                        <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center' }}>
                            <Text style={[TextCSS.Text16White_IBM_Regular,]} >
                                {'ถัดไป'}</Text>
                        </View>
                        <View style={{ width: 16 }}></View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <IconArrowRight />
                        </View>

                    </LinearGradient>
                </TouchableOpacity>



            </View>

        </ImageBackground>
    );
};

export default SkinSrceen;
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: 'red'
    },
    Btncss: {
        height: 48,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24
    },
    ViewBtncss: {
        marginHorizontal: 20, flex: 0.4, marginTop: 15,
        backgroundColor: null, justifyContent: 'center'
    }


});
