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
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { IconBGChange24, IconChange24, IconCheckF, IconCheckfalse, IconCheckT, IconEmail, IconFackbook, IconGoogle, IconHidepass, IconMessage, IconPass, IconPhone, IconPreson } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../css/Allfontfamily';
import { TextCSS } from '../../css/Font_Text';
import { COLORSFont } from '../../css/Allcolors';
// import { ViewCss } from '../../css/Allcss';
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

const CELL_COUNT = 6;

const ConsentScreen = () => {



    const [spinner, setspinner] = useState(false)

    const [timerCount, setTimer] = useState(60);

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                return lastTimerCount - 1
            })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
    }, []);


    return (
        <View style={{
            backgroundColor: COLORSFont.bgColor, flex: 1,
        }} >


            <Headerss
                badgeNumber="2"
                navigation={''}
                backScreen={true}
                ArrowColor={true}
                title={
                    'การยินยอมให้ใช้ข้อมูลส่วนบุคคล'
                }
            />
            <ScrollView style={{ flex: 1 }}>

                <View style={{ marginHorizontal: 16 }}>
                    <Text style={[TextCSS.Text14White_IBM_Regular, { color: '#FFF', marginBottom: 10 }]}>
                        {
                            "ข้าพเจ้าขอแสดงเจตนาให้ ___\n" +
                            "ในการเก็บรวบรวมใช้ และเปิดเผยข้อมูลส่วนบุคคล เพื่อวัตถุประสงค์ ดังนี้"
                        }</Text>
                    <Text style={[TextCSS.Text14White_IBM_Regular, { color: '#FFF', marginBottom: 10 }]}>
                        {
                            "1. เพื่อแจ้งข้อมูลที่เป็นสิทธิพิเศษสำหรับท่าน : ให้ท่านได้รับ\n" +
                            "ประโยชน์จาก ข่าวสารสำคัญ โปรโมชั่น ประชาสัมพันธิ์\n" +
                            "ข้อมูลผลิตภัณฑ์หรือบริการที่เติมเต็มความต้องการของ\n" +
                            "ท่าน จากบริษัทรวมถึงพันธมิตรทางธุรกิจและนิติบุคคลอื่น *"
                        }</Text>
                </View>
                <View style={{ marginTop: 24, backgroundColor: null, flexDirection: 'row', marginHorizontal: 16 }}>
                    <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row', flex: 1 }]}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

                            // colors={['#2A2C31', '#2A2C31']}
                            colors={['#0125E1', '#2084FC']}
                            style={{
                                height: 48,
                                borderRadius: 12,
                                flexDirection: 'row'
                            }}>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                <View style={{ left: 50 }}>

                                    <IconCheckT />
                                </View>

                                <View style={{ flex: 1, left: 10 }}>

                                    <Text style={[TextCSS.Text16White_IBM_Regular, { textAlign: 'center' }]} >
                                        {'ยินยอม'}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={{ width: 10 }} ></View>
                    <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row', flex: 1 }]}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

                            colors={[COLORSFont.bgColor, COLORSFont.bgColor]}
                            // colors={['#0125E1', '#2084FC']}
                            style={{
                                height: 48,
                                borderRadius: 12,
                                flexDirection: 'row',
                                borderWidth: 2,
                                borderColor: '#A6A6AB'
                            }}>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>

                                <View style={{ left: 40 }}>
                                    <IconCheckF />
                                </View>

                                <View style={{ flex: 1, left: 10 }}>

                                    <Text style={[TextCSS.Text16White_IBM_Regular, { color: '#A6A6AB', textAlign: 'center' }]} >
                                        {'ไม่ยินยอม'}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* ///////////////// 2 /////////// */}
                <View style={{ marginHorizontal: 16, marginTop: 24 }}>

                    <Text style={[TextCSS.Text14White_IBM_Regular, { color: '#FFF', marginBottom: 10 }]}>
                        {
                            " 2. เพื่อแจ้งข้อมูลที่เป็นสิทธิพิเศษสำหรับท่าน : ให้ท่านได้รับ\n" +
                            "ประโยชน์จาก ข่าวสารสำคัญ โปรโมชั่น ประชาสัมพันธิ์\n" +
                            "ข้อมูลผลิตภัณฑ์หรือบริการที่เติมเต็มความต้องการของ\n" +
                            "ท่าน จากบริษัทรวมถึงพันธมิตรทางธุรกิจและนิติบุคคลอื่น *"
                        }</Text>
                </View>
                <View style={{ marginTop: 24, backgroundColor: null, flexDirection: 'row', marginHorizontal: 16 }}>
                    <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row', flex: 1 }]}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

                            // colors={['#2A2C31', '#2A2C31']}
                            colors={['#0125E1', '#2084FC']}
                            style={{
                                height: 48,
                                borderRadius: 12,
                                flexDirection: 'row'
                            }}>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                <View style={{ left: 50 }}>

                                    <IconCheckT />
                                </View>

                                <View style={{ flex: 1, left: 10 }}>

                                    <Text style={[TextCSS.Text16White_IBM_Regular, { textAlign: 'center' }]} >
                                        {'ยินยอม'}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={{ width: 10 }} ></View>
                    <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row', flex: 1 }]}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

                            colors={[COLORSFont.bgColor, COLORSFont.bgColor]}
                            // colors={['#0125E1', '#2084FC']}
                            style={{
                                height: 48,
                                borderRadius: 12,
                                flexDirection: 'row',
                                borderWidth: 2,
                                borderColor: '#A6A6AB'
                            }}>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>

                                <View style={{ left: 40 }}>
                                    <IconCheckF />
                                </View>

                                <View style={{ flex: 1, left: 10 }}>

                                    <Text style={[TextCSS.Text16White_IBM_Regular, { color: '#A6A6AB', textAlign: 'center' }]} >
                                        {'ไม่ยินยอม'}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                {/* ///////////////// 3 /////////// */}
                <View style={{ marginHorizontal: 16, marginTop: 24 }}>

                    <Text style={[TextCSS.Text14White_IBM_Regular, { color: '#FFF', marginBottom: 10 }]}>
                        {
                            " 2. เพื่อแจ้งข้อมูลที่เป็นสิทธิพิเศษสำหรับท่าน : ให้ท่านได้รับ\n" +
                            "ประโยชน์จาก ข่าวสารสำคัญ โปรโมชั่น ประชาสัมพันธิ์\n" +
                            "ข้อมูลผลิตภัณฑ์หรือบริการที่เติมเต็มความต้องการของ\n" +
                            "ท่าน จากบริษัทรวมถึงพันธมิตรทางธุรกิจและนิติบุคคลอื่น *"
                        }</Text>
                </View>
                <View style={{ marginTop: 24, backgroundColor: null, flexDirection: 'row', marginHorizontal: 16 }}>
                    <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row', flex: 1 }]}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

                            // colors={['#2A2C31', '#2A2C31']}
                            colors={['#0125E1', '#2084FC']}
                            style={{
                                height: 48,
                                borderRadius: 12,
                                flexDirection: 'row'
                            }}>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                <View style={{ left: 50 }}>

                                    <IconCheckT />
                                </View>

                                <View style={{ flex: 1, left: 10 }}>

                                    <Text style={[TextCSS.Text16White_IBM_Regular, { textAlign: 'center' }]} >
                                        {'ยินยอม'}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={{ width: 10 }} ></View>
                    <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row', flex: 1 }]}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

                            colors={[COLORSFont.bgColor, COLORSFont.bgColor]}
                            // colors={['#0125E1', '#2084FC']}
                            style={{
                                height: 48,
                                borderRadius: 12,
                                flexDirection: 'row',
                                borderWidth: 2,
                                borderColor: '#A6A6AB'
                            }}>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>

                                <View style={{ left: 40 }}>
                                    <IconCheckF />
                                </View>

                                <View style={{ flex: 1, left: 10 }}>

                                    <Text style={[TextCSS.Text16White_IBM_Regular, { color: '#A6A6AB', textAlign: 'center' }]} >
                                        {'ไม่ยินยอม'}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>


            </ScrollView>

            <View style={{ flex: 0.15, marginHorizontal: 16, marginBottom: 10 }}>
                <View style={{ marginBottom: 15 }}></View>

                <TouchableOpacity style={[{ backgroundColor: null, flexDirection: 'row', flex: 1 }]}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

                        colors={['#2A2C31', '#2A2C31']}
                        // colors={['#0125E1', '#2084FC']}
                        style={{
                            height: 48,
                            borderRadius: 12,
                            flexDirection: 'row'
                        }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>


                            <View style={{ flex: 1,}}>

                                <Text style={[TextCSS.Text16White_IBM_Regular, { color: '#404349', textAlign: 'center' }]} >
                                    {'ถัดไป'}</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>


            </View>





        </View>
    );
};

export default ConsentScreen;
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
        marginBottom: 16,
        flex: 1, borderWidth: 1
    },
    ViewTextinput:
    {
        borderColor: COLORSFont.Gray01, borderWidth: 1, flexDirection: 'row',
        height: 48, padding: 12, borderRadius: 12
    },
    ViewCheckValida: { width: 64, borderRadius: 54, padding: 2, paddingRight: 4, flexDirection: 'row', marginHorizontal: 3, backgroundColor: '#FFF', }

    , rightSwipeItem: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 30,
    },
    root: { padding: 20 },
    title: {
        textAlign: "center", fontSize: 30,
        justifyContent: 'center',
        fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular
    },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 48,
        height: 48,
        lineHeight: 40,
        fontSize: 24,
        // borderWidth: 1,
        color: '#F3F5F6',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        borderColor: '#FFF',
        textAlign: "center",
        fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
    },
    focusCell: {
        borderColor: "#2d6dc4",
    },

});
