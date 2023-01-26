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
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import Headerss from '../../components/Headerss';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import ToggleSwitch from "toggle-switch-react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { IconAerrowDown, IconBGChange24, IconCarPin, IconChange24, IconChangeTool, IconCheckF, IconCheckfalse, IconCheckT, IconDeletepin, IconEmail, IconFace, IconFackbook, IconGoogle, IconHidepass, IconMenuSeting, IconMessage, IconPass, IconPhone, IconPointer, IconPreson, IconScan, Iconstopwatch } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../css/Allfontfamily';
import { TextCSS } from '../../css/Font_Text';
import { COLORSFont } from '../../css/Allcolors';
// import { ViewCss } from '../../Css/AllCss';
// import {fontSizes} from '../../../css/Allsizefont';
// import Spinner from 'react-native-loading-spinner-overlay';
import ReactNativePinView from "react-native-pin-view-edit"

// css sizescreen
const windowns = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);



//  value

const CELL_COUNT = 6;

const HomeScreen = () => {

    const [nontinewsActive, setnontinewsActive] = useState(false);
    const pinView = useRef(null)
    const [showRemoveButton, setShowRemoveButton] = useState(false)
    const [enteredPin, setEnteredPin] = useState("")
    const [showCompletedButton, setShowCompletedButton] = useState(false)
    const [spinner, setspinner] = useState(false)

    const [timerCount, setTimer] = useState(60);

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    useEffect(() => {
        if (enteredPin.length > 0) {
            setShowRemoveButton(true)
        } else {
            setShowRemoveButton(false)
        }
        if (enteredPin.length === 8) {
            setShowCompletedButton(true)
        } else {
            setShowCompletedButton(false)
        }
    }, [enteredPin])


    return (
        <ImageBackground
            source={require('../../images/BgHome.png')}
            resizeMode={'cover'}
            style={{ height: '100%', backgroundColor: '#181920' }}>
            <ScrollView style={{}}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <View style={{}}>
                            <Text style={TextCSS.Text12Gray01500_IBM_Regular}>{'ชื่อรถ'}</Text>

                        </View>
                        <View style={{}}>
                            <Text style={TextCSS.Text24White700_IBM_Regular} >{'XTEN’s Car'}</Text>
                            <Text style={TextCSS.Text12Gray01500_IBM_Regular}>{'Tesla model 3'}</Text>
                        </View>

                    </View>
                    <View style={{}}>
                        <TouchableOpacity style={{ width: '100%', paddingHorizontal: 10, paddingVertical: 10 }}>
                            <IconMenuSeting />
                        </TouchableOpacity>
                    </View>



                </View>
                <View style={{ backgroundColor: null }}>
                    <Image
                        source={require('../../images/CarModel.png')}
                        resizeMode={'cover'}
                        style={{ width: '110%', height: height * 0.33 }} />

                </View>

                <View style={[styles.ViewChange, { marginTop: -50 }]}  >
                    <IconChangeTool />
                </View>
                <View style={[styles.ViewChange, { marginBottom: 15 }]}  >
                    <Text style={TextCSS.Text14White_IBM_Regular} >{'Type2 DC EV Charger '}</Text>

                </View>

                <View style={{ flexDirection: 'row', flex: 1, backgroundColor: null, marginHorizontal: 16 }}>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={require('../../images/card.png')}
                            resizeMode={'contain'}
                            style={{ width: '100%', height: 107, marginBottom: 16 }}>

                            <TouchableOpacity>

                                <View style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 12 }}>
                                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: "center" }}>
                                        <IconPointer />
                                    </View>
                                    <View style={{ width: 10 }}></View>

                                    <View>
                                        <Text style={[TextCSS.Text14White_IBM_Regular, { textAlign: 'center' }]}>
                                            {'ระยะทางที่วิ่งได้'}
                                        </Text>
                                    </View>


                                </View>
                                <View style={{ marginHorizontal: 12 }}>


                                    <View>
                                        <Text style={[TextCSS.Text24White_IBM_Regular, {}]}>
                                            {'360'}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={[TextCSS.Text14White_IBM_Regular, {}]}>
                                            {'Km'}
                                        </Text>
                                    </View>


                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                        <ImageBackground source={require('../../images/card.png')}
                            resizeMode={'contain'}
                            style={{ width: '100%', height: 107 }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: "row", marginHorizontal: 12, marginTop: 12, marginBottom: 12 }}>
                                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: "center" }}>
                                        <Iconstopwatch />
                                    </View>
                                    <View style={{ width: 10 }}></View>
                                    <View style={{ flex: 1, }}>
                                        <Text style={[TextCSS.Text14White_IBM_Regular, {}]}>
                                            {'เวลาที่วิ่งได้'}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: 12 }}>
                                    <View>
                                        <Text style={[TextCSS.Text24White_IBM_Regular, {}]}>
                                            {'3:02:10'}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>


                    </View>
                    <View style={{ width: 16 }} ></View>
                    <View style={{ flex: 1 }}>
                        <ImageBackground
                            source={require('../../images/card2.png')}
                            resizeMode={'contain'}
                            style={{ width: '100%', height: '100%' }}>

                            <View style={{ marginHorizontal: 16, backgroundColor: null, height: 30,marginTop:12 }}>

                                <Text style={[TextCSS.Text14White_IBM_Regular, {}]}>
                                    {'เวลาที่วิ่งได้'}
                                </Text>
                                <Text style={[TextCSS.Text12Gray01500_IBM_Regular, {}]}>
                                    {'ชาร์จล่าสุด 12/01/65'}
                                </Text>


                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    {/* <ImageBackground
                                        source={require('../../images/Battery.png')}
                                        resizeMode={'contain'}
                                        style={{ width: '100%', height: 81 }}>




                                    </ImageBackground> */}

                                </View>
                                <View style={{ flex: 1,}}>

                                </View>



                            </View>
                            <View style={{ marginHorizontal:16, flex: 1,flexDirection:'row' }}>
                                <View style={{justifyContent:'center',flex:1}}>
                                <Text style={[TextCSS.Text14White_IBM_Regular, {fontSize:12}]}>
                                    {'ประหยัดพลังงาน'}
                                </Text>
                                </View>
                                <View style={{justifyContent:'center',}}>
                                <ToggleSwitch
                                    isOn={nontinewsActive}
                                    onColor="#12C576"
                                    offColor="#f2f2f2"
                                    onToggle={(ison) => {
                                        //  console.log(ison);
                                        // if (nontinewsActive === false) {
                                        //     setnontinewsActive(true);
                                        //     statusNoti = 1;
                                        // } else if (nontinewsActive === true) {
                                        //     setnontinewsActive(false);
                                        // }

                                    }}
                                />

                                </View>

                              

                            </View>


                        </ImageBackground>
                    </View>


                </View>
            </ScrollView>













        </ImageBackground>
    );
};

export default HomeScreen;
const styles = StyleSheet.create({
    ViewChange: {
        marginHorizontal: 16, flexDirection: 'row-reverse'
    },
    container: {
        flexDirection: 'row', marginTop: Platform.OS ==='android'?30: 80, flex: 0.14, backgroundColor: null, marginHorizontal: 16

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
    box: {
        width: 300,
        height: 30,
        marginVertical: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 7.0,
    },

});
