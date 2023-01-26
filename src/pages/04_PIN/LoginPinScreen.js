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
import { IconBGChange24, IconCarPin, IconChange24, IconCheckF, IconCheckfalse, IconCheckT, IconDeletepin, IconEmail, IconFackbook, IconGoogle, IconHidepass, IconMessage, IconPass, IconPhone, IconPreson } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../css/Allfontfamily';
import { TextCSS } from '../../css/Font_Text';
import { COLORSFont } from '../../css/Allcolors';
// import { ViewCss } from '../../css/AllCss';
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

const LoginPinScreen = () => {


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
            source={require('../../images/BgRegister.png')}
            resizeMode={'cover'}
            style={{ height: '100%', backgroundColor: '#181920' }}>

            <View style={{ marginTop: 100, alignSelf: 'center' }}>

                <IconCarPin />
            </View>
            <View style={{ flex: 0.1, backgroundColor: null, marginHorizontal: 16 }}>
                <Text style={[TextCSS.Text20White600_IBM_Regular, { marginTop: 24, textAlign: 'center' }]}>{'กำหนดรหัส PIN'}</Text>

            </View>


            <View
                style={{ flex: 1, backgroundColor: null, justifyContent: "center", alignItems: "center" }}>

                <ReactNativePinView
                    inputSize={16}
                    ref={pinView}
                    pinLength={6}
                    buttonSize={60}
                    onValueChange={value => setEnteredPin(value)}
                    buttonAreaStyle={{
                        marginTop: 24,
                    }}
                    inputAreaStyle={{
                        marginBottom: 24,
                    }}
                    inputViewEmptyStyle={{
                        backgroundColor: "transparent",
                        borderWidth: 1,
                        backgroundColor:'#FFF',
                        borderColor: "#FFF",
                    }}
                    inputViewFilledStyle={{
                        backgroundColor: "#2084FC",
                    }}
                    buttonViewStyle={{
                        // borderWidth: 1,
                        borderColor: "#2084FC",
                        
                    }}
                    buttonTextStyle={{
                        color: "#FFF",
                     
                        fontFamily: FONTFAMILY_.IBMPlexSansThaiRegular,
                        fontSize: 24,
                        fontWeight: '400',
                        
                    }}
                    onButtonPress={key => {
                        if (key === "custom_left") {
                            pinView.current.clear()
                        }
                        if (key === "custom_right") {
                           
                        }
                        if (key === "three") {
                           
                        }
                    }}
                    customLeftButton={showRemoveButton ? <IconDeletepin/>
                     : undefined}
                    customRightButton={showCompletedButton ? <Icon name={"ios-unlock"} size={36} color={"#FFF"} />
                     : undefined}
                />
            </View>












        </ImageBackground>
    );
};

export default LoginPinScreen;
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
