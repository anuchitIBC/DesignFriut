
import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { Header, Avatar, Badge, Overlay } from "react-native-elements";
import { IconArrowBack } from "../Icon/Customs";
import LinearGradient from "react-native-linear-gradient";
import { COLORSFont } from "../css/Allcolors";
import { FONTFAMILY_ } from "../css/Allfontfamily";

const { height, width } = Dimensions.get("window");
class Headerss extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      containerHeight: 70,
      checkslideHeaderRow1: false,
      checkslideHeaderRow2: false,
      fadeAnim: new Animated.Value(1),
      fadeAnimRow1: new Animated.Value(0),
      fadeAnimRow2: new Animated.Value(0),
      backScreen: false,
      CountNoti: 0,
      Chect: false,
      ArrowColor: false,
      backScreen2: false,
      PopupLogout: false,
      index: null,
      index2: null,
      index3: null,
      checkScreenhome: null,
      checkPro: this.props.CheckAct === true ? true : false,
      Panel1: 70,
      Hide1: 70,
      Hide2: 317,
      backHome: false,
      title: "",
    };
  }


  render() {
    return (
      <View style={{}}>
        <Header
          //  statusBarProps={{ barStyle: 'light-content' }}
          //  barStyle="light-content" // or directly
          containerStyle={{
            backgroundColor: null,
            borderColor: null, marginTop: height * 0.08, marginHorizontal: 0,
            // borderWidth:1,
            borderBottomColor: null,
            borderBottomWidth: 0




          }}

          // backgroundImageStyle={''}
          // barStyle="dark-content"
          // ViewComponent={LinearGradient} // Don't forget this!
          // linearGradientProps={{
          //   colors: [null, null],
          //   start: { x: 0, y: 1 },
          //   end: { x: 1, y: 1 },
          // }}
          leftComponent={
            // <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            //   <IconArrowBack />
            // </TouchableOpacity>
              <>
                {this.props.backScreen === false ? (
                  <TouchableOpacity
                    onPress={() => {
                      // this.props.navigation.goBack();
                    }}
                    style={{padding:4, width: 50,
                      // borderWidth:1 
                    }}
                  >
                    <IconArrowBack />
                  </TouchableOpacity>
                ) : null}
              </>
          }
          centerComponent={
        
              <View>
                <Text
                numberOfLines={1}
                  style={{
                    color: COLORSFont.white,
                    fontSize: 16,
                    fontFamily: FONTFAMILY_.IBMPlexSansThaiMedium,
                    fontWeight:'600',
                    

                  
                  }}
                >
                  {this.props.title}
                </Text>
              </View>
          }
          rightComponent={<></>}
        />
      </View>
    );
  }
}

export default (Headerss);

const styles = StyleSheet.create({


})