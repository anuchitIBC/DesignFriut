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

const CELL_COUNT = 6;

const OtpScreen = () => {



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
                            <Text style={[TextCSS.Text24White_IBM_Regular, { marginBottom: 16 }]} >
                                {'ยืนยันเบอร์โทรศัพท์'}</Text>
                            <Text style={[TextCSS.Text16White_IBM_Regular, { marginBottom: 16 }]} >
                                {'ป้อนรหัสยืนยัน 6 หลัก \nที่ส่งไปยังเบอร์โทรศัพท์ของคุณ'}</Text>
                            <Text style={[TextCSS.Text16white_IBM_Regular, { marginBottom: 16 }]}>
                                {'095-123-4567'}</Text>
                            <Text style={[TextCSS.Text16white400_IBM_Regular, { marginBottom: 16, }]}>
                                {'Ref : RhDs'}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, backgroundColor: null, marginHorizontal: 0 }}>


                        <View style={styles.root}>
                            <CodeField
                                ref={ref}
                                {...props}
                                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="numeric"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <View
                                        style={{
                                            borderBottomWidth: 4,
                                            borderColor: '#EEEEEE',
                                            borderRightColor: 2
                                        }}
                                    >
                                        <Text
                                            key={index}
                                            style={[styles.cell, isFocused && styles.focusCell]}
                                            onLayout={getCellOnLayoutHandler(index)}
                                        >
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>

                        <View style={{ marginHorizontal: 20, marginTop: 48,  flexDirection: 'row' }}>
                            <TouchableOpacity style={{flex:1}}>
                                <Text style={TextCSS.Text14Gray01_IBM_Regular}>{'ส่งรหัสยืนยันอีกครั้ง'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={TextCSS.Text14White_IBM_Regular}>{timerCount}{ ' วิ '}</Text>
                            </TouchableOpacity>

                        </View>



                    </View>
                </ScrollView>
            </KeyboardAvoidingView>


        </ImageBackground>
    );
};

export default OtpScreen;
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
