import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  Linking,
  Platform,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  AsyncStorage,
  NativeModules,
  Animated,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Avatar, ListItem, Overlay } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
import Styles from "./Styles";
import Style from "../IdentityScreen/Styles";
import Icon from "react-native-vector-icons/Feather";

// import SegmentedControlTab from 'react-native-segmented-control-tab';

// import ScrollableTabView, {
//   ScrollableTabBar,
// } from '../../lib_edit/react-native-scrollable-tab-view';

import { launchCamera, launchImageLibrary } from "react-native-image-picker";

import { RNCamera } from "react-native-camera";
import ImagePicker from "react-native-image-picker";
import Headers from "../../components/Headers";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import { getDeepLink } from "../../config/utilities";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ReactNativeBlobUtil from "react-native-blob-util";

//import ReactNativeBlobUtil from 'react-native-blob-util'

import SafeArea from "react-native-safe-area";
import { getDeepLinkAutoMem } from "../../config/utilities";
import {
  getActivity,
  getActivitySme,
  getSmeauthority,
  getCountries,
  getAwardType,
  master_award,
} from "../../actions/data.actions";
import SlideDownPanel from "../../lib_edit/react-native-slide-down-panel";
import { ScoreLogin } from "../../actions/data.actions";
import { EditeProfile, getInfo, logoutUser } from "../../actions/auth.actions";

import I18n from "../../utils/I18n";
import CountryPicker from "../../lib_edit/react-native-country-picker-modal";
import RNPickerSelect from "react-native-picker-select";
import IconDown from "react-native-vector-icons/AntDesign";
import SegmentedControlTab from "react-native-segmented-control-tabedit";
import LinearGradient from "react-native-linear-gradient";
import Activities from "./Activities";
import SmeAct from "./SmeActivity";
import { ViewScale } from "../../config/ViewScale";
import { COLORbg, COLORSFont } from "../../css/AllColor";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { FONTFAMILY_ } from "../../css/AllFontfamily";
import Tabprofiles from "./Tabprofiles";

import Headerprofiles from "../../components/Headerprofiles";
import HeaderHome from "../../components/HeaderHome";

// const ReactNativeBlobUtil = NativeModules.ReactNativeBlobUtil;
// console.log("ReactNativeBlobUtil: ==== "+JSON.stringify(ReactNativeBlobUtil))

const ProfileActivity = ({
  navigation,
  getUser,
  authData,
  dispatch,
  route,
  getStatus,
  getImg,
  getNotification,
  props,
}) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [bottom, setbottom] = useState(30);

  //ipad
  var aspectRatio = 1.6;
  if (height / width > 1.6) {
    //iphone
    aspectRatio = 3;
  }
  var aspectRatio2 = "100%";
  if (height / width > 1.6) {
    //iphone
    aspectRatio2 = "70%";
  }

  if (route.params == undefined) {
    var index = 0;
  } else {
    var index = route.params.index;
  }

  ////////////////get All data////////////////
  useEffect(() => {
    return () => {
      // _getActivity();
    };
  });

  //////////////////////////////////////
  const [DataRegister, setDataRegister] = useState([]);
  const [url, seturl] = useState(
    getImg.img == "http://one.ditp.go.th/uploads/member_profile/profile_new.png"
      ? "https://adminshop.kwanpat.com/theme/test_uploads/accounnull.png"
      : getImg.img
  );
  const [SmeAuth, setSmeAuth] = useState([]);
  //////////////////////////////////////
  const [company, setcompany] = useState(
    getUser.userDetails.res_result.company != undefined
      ? getUser.userDetails.res_result.company.nameTh
      : ""
  );
  const [companyEN, setcompanyEN] = useState(
    getUser.userDetails.res_result.company != undefined
      ? getUser.userDetails.res_result.company.nameEn
      : ""
  );
  const [corporate, setcorporate] = useState(
    getUser.userDetails.res_result.corporate != undefined
      ? getUser.userDetails.res_result.corporate.name
      : ""
  );
  const [address, setaddress] = useState(
    getUser.userDetails.res_result.addressTh != undefined
      ? getUser.userDetails.res_result.addressTh.address
      : ""
  );
  const [subdistrict, setsubdistrict] = useState(
    getUser.userDetails.res_result.addressTh != undefined
      ? getUser.userDetails.res_result.addressTh.subdistrict
      : ""
  );
  const [district, setdistrict] = useState(
    getUser.userDetails.res_result.addressTh != undefined
      ? getUser.userDetails.res_result.addressTh.district
      : ""
  );
  const [province, setprovince] = useState(
    getUser.userDetails.res_result.addressTh != undefined
      ? getUser.userDetails.res_result.addressTh.province
      : ""
  );
  const [postcode, setpostcode] = useState(
    getUser.userDetails.res_result.addressTh != undefined
      ? getUser.userDetails.res_result.addressTh.postcode
      : ""
  );
  //////////////////////////////////////
  const [contactAdress, setcontactAdress] = useState(
    getUser.userDetails.res_result.contact != undefined
      ? getUser.userDetails.res_result.contact.address
      : ""
  );
  const [contactsubdistrict, setcontactsubdistrict] = useState(
    getUser.userDetails.res_result.contact != undefined
      ? getUser.userDetails.res_result.contact.subdistrict
      : ""
  );
  const [contactdistrict, setcontactdistrict] = useState(
    getUser.userDetails.res_result.contact != undefined
      ? getUser.userDetails.res_result.contact.district
      : ""
  );
  const [contactprovince, setcontactprovince] = useState(
    getUser.userDetails.res_result.contact != undefined
      ? getUser.userDetails.res_result.contact.province
      : ""
  );
  const [contactpostcode, setcontactpostcode] = useState(
    getUser.userDetails.res_result.contact != undefined
      ? getUser.userDetails.res_result.contact.postcode
      : ""
  );

  ////////////////////////////////////
  const [addressEN, setaddressEN] = useState(
    getUser.userDetails.res_result.addressEn != undefined
      ? getUser.userDetails.res_result.addressEn.address
      : ""
  );
  const [subdistrictEN, setsubdistrictEN] = useState(
    getUser.userDetails.res_result.addressEn != undefined
      ? getUser.userDetails.res_result.addressEn.subdistrict
      : ""
  );
  const [districtEN, setdistrictEN] = useState(
    getUser.userDetails.res_result.addressEn != undefined
      ? getUser.userDetails.res_result.addressEn.district
      : ""
  );
  const [provinceEN, setprovinceEN] = useState(
    getUser.userDetails.res_result.addressEn != undefined
      ? getUser.userDetails.res_result.addressEn.province
      : ""
  );
  const [postcodeEN, setpostcodeEN] = useState(
    getUser.userDetails.res_result.addressEn != undefined
      ? getUser.userDetails.res_result.addressEn.postcode
      : ""
  );
  //////////////////////////////////////
  const [address4, setaddress4] = useState(
    getUser.userDetails.res_result.address != undefined
      ? getUser.userDetails.res_result.address.address
      : ""
  );
  const [country4, setcountry4] = useState(
    getUser.userDetails.res_result.address != undefined
      ? getUser.userDetails.res_result.address.country
      : ""
  );
  const [tabindex, settabindex] = useState(0);
  const [Srcolling, setSrcolling] = useState(true);
  const window = Dimensions.get("window");

  //console.log("LLLLL", getImg.img);

  return (
    <View style={[Styles.SafeArea]}>
      <ParallaxScrollView
        style={[
          Platform.OS === "android"
            ? Styles.parallaxView
            : Styles.parallaxViewios,
        ]}
        scrollEnabled={true}
        backgroundColor={COLORbg.bgcolor}
        contentBackgroundColor={COLORbg.bgcolor}
        headerBackgroundColor={COLORbg.bgcolor}
        stickyHeaderHeight={
          Platform.OS === "android" ? 86 : height <= 669 ? ViewScale(140) : 120
        }
        scrollEvent={(text) => {
          // console.log(text.nativeEvent.contentOffset.y);
          // setSrcolling()
          if(text.nativeEvent.contentOffset.y > 100){
            setSrcolling(false)

          }else{
            setSrcolling(true)
          }
        }}
        parallaxHeaderHeight={
          Platform.OS === "android"
            ? ViewScale(395)
            : getUser.userDetails.res_result.type === 1 ||
              getUser.userDetails.res_result.type == 2
            ? ViewScale(395)
            : ViewScale(350)
          // Platform.OS === "android" ? ViewScale(290) : ViewScale(310)
        }
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background" style={{}}>
            <LinearGradient
              colors={[COLORbg.LinearGradient1, COLORbg.LinearGradient2]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={{
                height: "100%",
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                overflow: "hidden",
              }}
            />
          </View>
        )}
        renderForeground={() => (
          <View
            key="parallax-header"
            style={{ marginTop: height * 0.1, overflow: "hidden" }}
          >
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 13,
                // borderWidth:1
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                {/* <View style={{ flex: 0.2 }} /> */}
                <View style={{ flex: 1 }}>
                  <View style={{ alignItems: "center" }}>
                    <Avatar
                      //  onPress={() => {
                      //   // alert('lll')
                      //   // pageSet(1);
                      //   // setTimeout(() => {
                      //   //   RBsheet1.open();
                      //   // }, 200);
                      // }}
                      containerStyle={{
                        borderWidth: 3,
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      }}
                      size={ViewScale(120)}
                      overlayContainerStyle={{
                        borderWidth: 2,
                        borderColor: "#FFFFFF",
                      }}
                      rounded
                      source={{ uri: url }}
                    />
                    <Avatar
                      containerStyle={Styles.AvatarContainer2}
                      onPress={() => {
                        // alert('lll')
                        // pageSet(1);
                        // setTimeout(() => {
                        //   RBsheet1.open();
                        // }, 200);
                      }}
                      size={ViewScale(35)}
                      rounded
                      overlayContainerStyle={Styles.overlayContainer}
                      icon={{
                        name: "photo-camera",
                        type: "material",
                        color: "#FFF",
                        size: ViewScale(20),
                      }}
                    />
                  </View>
                  {getUser.isSuccess ? (
                    <View
                      style={{
                        width: "100%",
                        overflow: "hidden",
                        marginTop: ViewScale(-30),
                        marginBottom: 10,
                      }}
                    >
                      {getUser.userDetails.res_result.type === 1 && (
                        <View>
                          <View style={{ width: "100%" }}>
                            <Text
                              numberOfLines={1}
                              style={Styles.fontDetailProfile3}
                            >
                              {getUser.userDetails.res_result.sub_member
                                .titleTh +
                                " " +
                                getUser.userDetails.res_result.sub_member
                                  .nameTh +
                                " " +
                                getUser.userDetails.res_result.sub_member
                                  .lastnameTh}
                            </Text>
                          </View>

                          {getStatus.isResult != undefined ? (
                            <View
                              style={{
                                alignItems: "center",
                                flexDirection: "row",
                              }}
                            >
                              <View
                                style={{
                                  justifyContent: "center",
                                  flexDirection: "row",
                                  flex: 1,
                                  flexWrap: "wrap",
                                  // borderWidth:1,
                                  height: 50,
                                }}
                              >
                                <Text
                                  numberOfLines={2}
                                  style={[Styles.fontCompayProfile]}
                                >
                                  {
                                    getUser.userDetails.res_result.company
                                      .nameTh
                                  }
                                </Text>

                                {getStatus.isResult.status_ditp.status !=
                                  "not active ditp" &&
                                getStatus.isResult.status_ditp.status !=
                                  undefined ? (
                                  <View
                                    style={{
                                      flexDirection: "row",
                                      marginTop: 4,
                                      left: ViewScale(10),
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    <View
                                      style={{
                                        borderColor: "#FFF",
                                        borderRadius: 5.92,
                                        width: 20,
                                        height: 20,
                                        borderWidth: 1,
                                        justifyContent: "center",

                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.2)",
                                      }}
                                    >
                                      <Text
                                        style={{
                                          textAlign: "center",
                                          fontSize: 12,
                                          color: "#ffffff",
                                          fontWeight: "400",
                                          fontFamily: FONTFAMILY_.MitrLight,
                                        }}
                                      >
                                        {getStatus.isResult.status_ditp.nameEn}
                                      </Text>
                                    </View>
                                    <View
                                      style={{
                                        borderColor: "#FFF",
                                        borderRadius: 5.92,
                                        width: 20,
                                        height: 20,
                                        borderWidth: 1,
                                        justifyContent: "center",
                                        marginHorizontal: 5,
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.2)",
                                      }}
                                    >
                                      <Image
                                        style={{
                                          width: 11.11,
                                          height: 9.36,
                                          alignSelf: "center",
                                        }}
                                        source={require("../../image/logoMM.png")}
                                      />
                                    </View>
                                  </View>
                                ) : (
                                  <View />
                                )}
                              </View>
                            </View>
                          ) : (
                            <View />
                          )}
                        </View>
                      )}

                      {getUser.userDetails.res_result.type === 3 && (
                        <View>
                          <View style={{ width: "100%" }}>
                            <Text
                              numberOfLines={1}
                              style={Styles.fontDetailProfile3}
                            >
                              {getUser.userDetails.res_result.member.titleTh +
                                " " +
                                getUser.userDetails.res_result.member.nameTh +
                                " " +
                                getUser.userDetails.res_result.member
                                  .lastnameTh}
                            </Text>
                          </View>
                        </View>
                      )}
                    </View>
                  ) : (
                    <View />
                  )}
                </View>
            
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",

                marginBottom: 30,

                position: "relative",
                marginHorizontal: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  settabindex(0);
                }}
                style={[
                  Styles.tabtouch,
                  {
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4,
                  },
                ]}
              >
                <View
                  style={{
                    height: 44,
                    width: "100%",
                    backgroundColor: tabindex === 0 ? "#FFF" : null,
                    borderRadius: 4,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTFAMILY_.MitrRegular,
                      fontSize: 16,
                      color: tabindex === 0 ? COLORSFont.Primary500 : "#FFF",
                      textAlign: "center",
                    }}
                  >
                    {I18n.t("translate_Memberinformation")}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  settabindex(1);
                }}
                style={[
                  Styles.tabtouch,
                  {
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                  },
                ]}
              >
                <View
                  style={{
                    height: 44,
                    width: "100%",
                    backgroundColor: tabindex === 1 ? "#FFF" : null,
                    borderRadius: 4,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTFAMILY_.MitrRegular,
                      fontSize: 16,
                      color: tabindex === 1 ? COLORSFont.Primary500 : "#FFF",
                      textAlign: "center",
                    }}
                  >
                    {I18n.t("translate_Activities")}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        // stickyHeaderHeight={80}
        renderStickyHeader={() => (
          <LinearGradient
            colors={[COLORbg.LinearGradient1, COLORbg.LinearGradient2]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={
              {
                // borderWidth: 1,
                // height: height <= 669 ? ViewScale(135) : ViewScale(150),
              }
            }
          >
            <View
              key="sticky-header"
              // style={styles.stickySection}
              style={{ marginTop: Platform.OS === "android" ? 35 : 65 }}
            >
              <View
                style={{
                  flexDirection: "row",

                  marginBottom: 30,

                  position: "relative",
                  marginHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    settabindex(0);
                  }}
                  style={[
                    Styles.tabtouch,
                    {
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: 44,
                      width: "100%",
                      backgroundColor: tabindex === 0 ? "#FFF" : null,
                      borderRadius: 4,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTFAMILY_.MitrRegular,
                        fontSize: 16,
                        color: tabindex === 0 ? COLORSFont.Primary500 : "#FFF",
                        textAlign: "center",
                      }}
                    >
                      {I18n.t("translate_Memberinformation")}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    settabindex(1);
                  }}
                  style={[
                    Styles.tabtouch,
                    {
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: 44,
                      width: "100%",
                      backgroundColor: tabindex === 1 ? "#FFF" : null,
                      borderRadius: 4,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTFAMILY_.MitrRegular,
                        fontSize: 16,
                        color: tabindex === 1 ? COLORSFont.Primary500 : "#FFF",
                        textAlign: "center",
                      }}
                    >
                      {I18n.t("translate_Activities")}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        )}
        renderFixedHeader={() => (
          <></>
          // <View key="fixed-header" style={styles.fixedSection}>

          // </View>
        )}
      >
        {/* importTabcheng */}
        <View style={{ marginTop: 10 }} />

        {/* <Tabprofiles
          tabindex={tabindex}
          DataRegister={DataRegister}
          navigation={navigation}
        /> */}

        {/* importTabcheng */}
      </ParallaxScrollView>
      {Srcolling === true && <Headerprofiles navigation={navigation} />}
    </View>
  );
};

const mapStateToProps = (state) => ({
  getUser: state.userReducer.getUser,
  authData: state.authReducer.authData,
  getImg: state.authReducer.getImg,
  getStatus: state.dataReducer.getStatus,
  getNotification: state.authReducer.getNotification,
});

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 30;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    // width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
    // backgroundColor:'red'
  },
  stickySection: {
    height: Platform.OS === "android" ? 86 : 120,
    marginTop: 40,

    width: "100%",
    justifyContent: "flex-end",
  },
  stickySectionText: {
    color: "red",
    fontSize: 20,
    // margin: 10,
    textAlign: "center",
    // marginTop: Platform.OS === "android" ? 0 : 50,
    position: "absolute",
  },
  fixedSection: {
    //marginTop:Platform.OS ==="android"?0:50
    // position: "absolute",
    // bottom: 10,
    // right: 10,
    // backgroundColor:'red'
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20,
  },
  parallaxHeader: {
    // alignItems: "center",
    flex: 1,
    // flexDirection: "column",
    paddingTop: Platform.OS === "android" ? 90 : ViewScale(120),
    marginHorizontal: ViewScale(10),
  },
  avatar: {
    marginBottom: ViewScale(10),
    borderRadius: AVATAR_SIZE / 2,
  },
  sectionSpeakerText: {
    color: "white",
    fontSize: 24,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: "hidden",
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  rowText: {
    fontSize: 20,
  },
});

export default connect(
  mapStateToProps,
  null
)(ProfileActivity);
