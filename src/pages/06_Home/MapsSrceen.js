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
    Platform,
    Button
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
import { IconAerrowDown, IconBGChange24, IconCarPin, IconChange24, IconChanger1, IconChanger2, IconChangeTool, IconCheckF, IconCheckfalse, IconCheckT, IconDeletepin, IconEmail, IconFace, IconFackbook, IconGoogle, IconHidepass, IconLocation1, IconLocation2, IconMenuSeting, IconMessage, IconPass, IconPhone, IconPointer, IconPreson, IconReload, IconScan, IconSearch, Iconstopwatch, } from '../../Icon/Customs';
import { FONTFAMILY_ } from '../../css/Allfontfamily';
import { TextCSS } from '../../css/Font_Text';
import { COLORSFont } from '../../css/Allcolors';
// import { ViewCss } from '../../Css/AllCss';
// import {fontSizes} from '../../../css/Allsizefont';
// import Spinner from 'react-native-loading-spinner-overlay';
import ReactNativePinView from "react-native-pin-view-edit"
import RBSheet from "react-native-raw-bottom-sheet";

import { Modalize } from 'react-native-modalize';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// css sizescreen
const windowns = Dimensions.get('window');
const { height, width } = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);



//  value

const CELL_COUNT = 6;

const MapsSrceen = () => {

    const [nontinewsActive, setnontinewsActive] = useState(false);
    const pinView = useRef(null)
    const [showRemoveButton, setShowRemoveButton] = useState(false)
    const [enteredPin, setEnteredPin] = useState("")
    const [showCompletedButton, setShowCompletedButton] = useState(false)
    const [spinner, setspinner] = useState(false)

    const [timerCount, setTimer] = useState(60);
    const refRBSheet = useRef();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const handleClose = dest => {
        if (modalizeRef.current) {
            modalizeRef.current.close(dest);
        }
    };

    const getData = () => (
        {
            name: 'ฝึกอบรม',
            code: 1
        },
        {
            name: 'สัมมนา',
            code: 2
        },
        {
            name: 'ฝีกอบรม และสัมมนา',
            code: 3
        },
        {
            name: 'เสวนา',
            code: 1
        },
        {
            name: 'E-Learning',
            code: 1
        }
    );

    const renderItem = (item) => (
        <View>
            <Text>{item.heading}</Text>
        </View>
    );


    useEffect(() => {
       
    }, [])


    return (

        <View style={{ flex: 1,  backgroundColor: COLORSFont.Gray01 }}>
            {/* <StatusBar/> */}
            <StatusBar
                barStyle={'dark-content'}

            />
            <View style={{}}>
                {/* <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView> */}
            </View>

            <View style={{
                alignSelf: 'center',
                borderWidth: 1, position: 'absolute',
                width: '90%', backgroundColor: '#181920',
                borderRadius: 8,
                marginTop: '13%',
                height: 48,
                flexDirection: 'row',


            }}>

                <View style={{ justifyContent: 'center', marginHorizontal: 15 }}>
                    <IconSearch />
                </View>
                <View style={{ justifyContent: 'center', flex: 1 }} >
                    <TextInput

                        style={[TextCSS.Text16Gray_IBM_Regular, { flex: 1 }]}
                        placeholderTextColor={COLORSFont.Gray01}
                        placeholder={'ค้นหาสถานี'}
                        returnKeyType={'search'}
                        returnKeyLabel={'ค้นหา'}
                    />


                </View>

            </View>

            <Modalize
                ref={modalizeRef}
                modalStyle={styles.content__modal}
                alwaysOpen={height * 0.5}
                handlePosition="inside"
                handleStyle={{ backgroundColor: '#FFF' }}
                rootStyle={{
                    backgroundColor: null,


                }}
                overlayStyle={{
                    backgroundColor: COLORSFont.Gray01
                }}
                childrenStyle={{
                    backgroundColor: '#181920',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                }}

            >


                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: 'row', marginTop: 24, marginHorizontal: 16, }}>
                        <View style={{ flex: 1 }}>
                            <Text style={TextCSS.Text20White500_IBM_Regular} >{'กรุงเทพมหานคร'}</Text>
                            <Text style={TextCSS.Text12Gray01500_IBM_Regular} >{'3 สถานีชาร์จใกล้คุณ'}</Text>

                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 10, }} >
                                <IconReload />
                            </TouchableOpacity>
                        </View>


                    </View>
                    <ScrollView style={{ height: height * 0.8, flex: 1, }}>
                        <View style={[styles.content__card, { marginTop: 16, marginHorizontal: 16, }]}>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20 }} >
                                <View style={{ flex: 1 }} >
                                    <Text style={TextCSS.Text20White500_IBM_Regular} >{'PTT เอกมัย สถานี 2'}</Text>
                                    <Text style={TextCSS.Text14Gray01_IBM_Regular} >{'ถนนเอกมัยซอย 10'}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ height: '70%', borderRadius: 27, flexDirection: 'row', borderWidth: 1, borderColor: '#FFF', paddingHorizontal: 15 }}>
                                        <View style={{ justifyContent: 'center' }} >
                                            <IconLocation2 />

                                        </View>
                                        <View style={{ width: 10 }} ></View>
                                        <View style={{ justifyContent: 'center' }} >
                                            <Text style={TextCSS.Text16White_IBM_Regular}>{'5.3km'}</Text>

                                        </View>
                                    </TouchableOpacity>

                                </View>





                            </View>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 5 }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <IconChanger2 />
                                </View>
                                <View style={{ width: 8 }} ></View>
                                <View style={{ justifyContent: 'center' }} >
                                    <Text style={TextCSS.Text14White500_IBM_Regular} >{'190 kW - 19 นาทีถึง 100%'}</Text>

                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 5 }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <IconChanger1 />
                                </View>
                                <View style={{ width: 8 }} ></View>
                                <View style={{ justifyContent: 'center' }} >
                                    <Text style={TextCSS.Text14green500_IBM_Regular} >{'2  ที่ว่าง'}</Text>

                                </View>

                            </View>
                            <View style={{ marginBottom: 15, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 5, }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <IconLocation1 />
                                    </View>
                                    <View style={{ width: 8 }} ></View>
                                    <View style={{ justifyContent: 'center' }} >
                                        <Text style={TextCSS.Text14White500_IBM_Regular} >{'12 นาที '}</Text>

                                    </View>

                                </View>
                                <TouchableOpacity style={{ flex: 1, }}>

                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}


                                        colors={['#0125E1', '#2084FC']}
                                        style={{
                                            width: '100%',
                                            height: 48,
                                            borderRadius: 28,
                                            flexDirection: 'row',
                                            flex: 1
                                        }}>
                                        <View style={{ justifyContent: 'center',  width: '100%' }}>

                                            <Text style={[TextCSS.Text16white_IBM_Regular, { textAlign: 'center' }]} >
                                                {'นำทาง'}</Text>

                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>


                            </View>

                        </View>

                    </ScrollView>


                </View>
            </Modalize>

        </View>
    );
};

export default MapsSrceen;
const styles = StyleSheet.create({
    ViewChange: {
        marginHorizontal: 16, flexDirection: 'row-reverse'
    },
    container: {
        flexDirection: 'row', marginTop: 80, flex: 0.14, backgroundColor: null, marginHorizontal: 16

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

    content__modal: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 16,
    },
    content__card: {
        shadowColor: '#FFF',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 16,
        backgroundColor: '#181920',
        borderRadius: 10
    },


    content__subheading: {
        marginBottom: 2,

        fontSize: 16,
        fontWeight: '600',
        color: '#ccc',
    },

    content__heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
    },

    content__description: {
        paddingTop: 10,
        paddingBottom: 10,

        fontSize: 15,
        fontWeight: '200',
        lineHeight: 22,
        color: '#666',
    },

});
