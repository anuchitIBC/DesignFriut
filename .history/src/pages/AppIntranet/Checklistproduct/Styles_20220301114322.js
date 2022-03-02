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
  import {COLORS} from '../../../css/Allcolors';
  import {fontSizes} from '../../../css/Allsizefont';
  const windowns = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
const screen = Dimensions.get('screen');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const Styles = StyleSheet.create({
    View1css: {marginHorizontal: 50},
    imglogo: {resizeMode: 'contain', width: 70, height: 70},
    LIcssview1: {
      flex: 1,
      justifyContent: 'center',
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
      fontWeight: 'bold',
      textAlign: 'center',
    },
   texttile: {color:COLORS.textcolorintable, fontSize:fontSizes.labelSize}




  });