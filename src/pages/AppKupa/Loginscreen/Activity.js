import React from "react";
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
  Alert,
  Button,
  Animated,
} from "react-native";
import Styles from "./Styles";
import I18n from "../../utils/I18n";
import { ListItem, Overlay } from "react-native-elements";
import { getActivity, CheckRegisterActivity } from "../../actions/data.actions";
import { connect } from "react-redux";
import SegmentedControlTab from "react-native-segmented-control-tab";
import ScrollableTabView, {
  ScrollableTabBar,
} from "../../lib_edit/react-native-scrollable-tab-view";
import InAppBrowser from "react-native-inappbrowser-reborn";

import { getDeepLink } from "../../config/utilities";
import { getDeepLinkelearn } from "../../config/utilities";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { getDeepLinkAct } from "../../config/utilities";
import { ViewScale } from "../../config/ViewScale";

import ProgressBarAnimated from "react-native-progress-bar-animated";

import { getDeepLinkAutoMem } from "../../config/utilities";
import { COLORbg, COLORSFont } from "../../css/AllColor";
import { FONTFAMILY_ } from "../../css/AllFontfamily";
import { Editregister, IconSurvey, Penciledit } from "../../icon/Customs";

import SmeActivity from "./SmeActivity";
import { formatdate, _getFormsSurvey } from "../../config/Allfunction";
const height = Dimensions.get("window").height;
const { width } = Dimensions.get("window");
class Activities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heightTab: 0,
      Page: 3,
      Selec: [],
      Page3: 3,
      Page4: 3,
      Page5: 3,
      Page6: 3,
      ActivityAccept: [],
      SelecIndexYear: 0,
      year1: null,
      year2: null,
      year3: null,
      year4: null,
      ActivityYear: [],
      ActivityYearNew: [],
      ActivityYear2022length: [],
      ActivityYear2021length: [],
      ActivityYear2020length: [],
      ActivityYear2019length: [],
      Activityregisterlength: [],
      Activityprocesslength: [],
      idAct: "",
      ckhide: false,
      checkHide: true,
      popupEditregister: false,
      IDcard:
        this.props.getUser.userDetails.res_result.member != undefined
          ? this.props.getUser.userDetails.res_result.naturalId
          : this.props.getUser.userDetails.res_result.naturalId,

      active: 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0),
      translateXTabOne: new Animated.Value(0),
      translateXTabTwo: new Animated.Value(width),
      translateY: -1000,
      DatatoHistory: [],
    };
  }

  ///////////////////////// funtion Edit ////////////////////

  // EditregisterHHHH() {
  //   this.setState({popupEditregister: true});
  //   // this.setState({Detailact:true})
  //   // alert('ooooo')
  // }

  ///////////////////////// funtion register ////////////////////

  componentDidMount() {
    const { navigation, DataRegister } = this.props;

    if (DataRegister.res_code === "00") {
      // console.log(
      //   'result.not_active' + JSON.stringify(DataRegister.result.not_active),
      // );
      this.setState({
        DatatoHistory: DataRegister,
        ActivityAccept: DataRegister.result.active,
        ActivityYear: DataRegister.result.not_active,
      });

      //นับจำนวน รอยื่นใบสมัคร
      DataRegister.result.active.map((data, index) => {
        if (data.participate_status_code === "0") {
          this.state.Activityregisterlength.push(data);
        }
      });

      // นับจำจวนอยู่ระหว่างการสมัครกิจกกรม

      DataRegister.result.active.map((data, index) => {
        if (
          data.participate_status_code === "1" ||
          data.participate_status_code === "2"
        ) {
          this.state.Activityprocesslength.push(data);
        }
      });

      DataRegister.result.not_active[2022].map((data, index) => {
        if (data.participate_status_code === "3") {
          this.state.ActivityYear2022length.push(data);
        }
      });

      DataRegister.result.not_active[2021].map((data, index) => {
        if (data.participate_status_code === "3") {
          this.state.ActivityYear2021length.push(data);
        }
      });

      DataRegister.result.not_active[2020].map((data, index) => {
        if (data.participate_status_code === "3") {
          this.state.ActivityYear2020length.push(data);
        }
      });

      DataRegister.result.not_active[2019].map((data, index) => {
        if (data.participate_status_code === "3") {
          this.state.ActivityYear2019length.push(data);
        }
      });

      const Yearall = Object.keys(DataRegister.result.not_active);

      const Year1 = parseInt(Yearall[0]);
      const Year2 = parseInt(Yearall[1]);
      const Year3 = parseInt(Yearall[2]);
      const Year4 = parseInt(Yearall[3]);

      console.log("Year1", Year1);
      this.setState({ year1: Year1 });
      this.setState({ year2: Year2 });
      this.setState({ year3: Year3 });
      this.setState({ year4: Year4 });
    }
    // this._getActivity();
  }
  // _getActivity = async (value) => {
  //   try {
  //     // const payload = this.props.authData.token;
  //     // const respones = await this.props.dispatch(
  //     //   getActivity({
  //     //     token: payload,
  //     //   })
  //     // );

  //   } catch (error) {}
  // };
  DataAct2 = (values) => {
    // alert(values)
    try {
      const dataregister0 = [];
      const dataprocess1 = [];

      const ActivityAccept2 = this.state.ActivityAccept;

      this.state.ActivityAccept.map((data, index) => {
        if (data.participate_status_code === "0") {
          dataregister0.push(data);
        }
      });
      this.state.ActivityAccept.map((data, index) => {
        if (data.participate_status_code !== "0") {
          console.log("CCCFCFFCFCFFCC" + JSON.stringify(data, index));
          dataprocess1.push(data);
        }
      });

      var number = [];

      if (values == 1) {
        if (dataregister0.length > this.state.Page) {
          for (let index = 0; index < this.state.Page; index++) {
            number.push(dataregister0[index]);
          }

          return number;
        } else {
          number.push(dataregister0);
          return number[0];
        }
      } else if (values === 2) {
        if (dataprocess1.length > this.state.Page) {
          for (let index = 0; index < this.state.Page; index++) {
            number.push(dataprocess1[index]);
          }

          return number;
        } else {
          number.push(dataprocess1);
          return number[0];
        }
      }
    } catch (error) {
      return "ไม่แสดงข้อมูล";
    }
  };

  ///////////////////////// render compont////////////////////
  ListDataAct1 = ({ item, index }) => {
    var Props = this.props;
    var state = this.state;

    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#FFF",

          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{}}>
            <>
              {item.activity_list_type === 43 ? (
                <Image
                  source={require("../../image/Elrean.png")}
                  style={Styles.imgElearing}
                />
              ) : (
                <>
                  {item.formTypeActivity === 1 ? (
                    <Image
                      source={require("../../image/imgDevnew.png")}
                      style={Styles.imgElearing}
                    />
                  ) : (
                    <Image
                      resizeMode={"cover"}
                      source={{
                        uri:
                          item.activity_list_logo_thumb === ""
                            ? "http://one.ditp.go.th/dist/img/icon/no-image.png"
                            : item.activity_list_logo_thumb,
                      }}
                      style={
                        item.activity_list_logo_thumb === ""
                          ? Styles.ImgList1
                          : Styles.ImgList
                      }
                    />
                  )}
                </>
              )}
            </>
          </View>
          <View style={{ marginHorizontal: 15, flex: 1 }}>
            <Text
              numberOfLines={2}
              style={{
                color: COLORSFont.textblack,
                fontFamily: FONTFAMILY_.MitrRegular,
              }}
            >
              {item.activity_name_th}
            </Text>

            <TouchableOpacity onPress={() => {}} style={Styles.BTregisteragain}>
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Editregister />
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={Styles.textregisteragain}>{"กรอกใบสมัครต่อ"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  ListDataprocess = ({ item, index }) => {
    var Props = this.props;
    var state = this.state;
    const { navigation, DataRegister } = this.props;

    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#FFF",

          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{}}>
            <>
              {item.activity_list_type === 43 ? (
                <Image
                  source={require("../../image/Elrean.png")}
                  style={Styles.imgElearing}
                />
              ) : (
                <>
                  {item.formTypeActivity === 1 ? (
                    <Image
                      source={require("../../image/imgDevnew.png")}
                      style={Styles.imgElearing}
                    />
                  ) : (
                    <Image
                      resizeMode={"cover"}
                      source={{
                        uri:
                          item.activity_list_logo_thumb === ""
                            ? "http://one.ditp.go.th/dist/img/icon/no-image.png"
                            : item.activity_list_logo_thumb,
                      }}
                      style={
                        item.activity_list_logo_thumb === ""
                          ? Styles.ImgList1
                          : Styles.ImgList
                      }
                    />
                  )}
                </>
              )}
            </>
          </View>
          <View style={{ marginHorizontal: 15, flex: 1 }}>
            <Text
              numberOfLines={2}
              style={{
                color: COLORSFont.textblack,
                fontFamily: FONTFAMILY_.MitrRegular,
              }}
            >
              {item.activity_name_th}
            </Text>
            <Text style={Styles.TextDateList}>
              {I18n.t("translate_Join")}
              {"  "}

              {formatdate(item.regis_date)}
            </Text>

            <TouchableOpacity onPress={() => {}} style={{}}>
              {item.activity_status.map((data, index) => {
                return (
                  <>
                    {data.status_active === "Y" ? (
                      <>
                        {data.status_name !== "ทำแบบประเมิน" && (
                          <View
                            style={{
                              justifyContent: "center",
                            }}
                          >
                            <Text
                              style={{
                                color: COLORSFont.yellow,
                                fontSize: 13,
                                fontFamily: FONTFAMILY_.MitrRegular,
                              }}
                            >
                              {data.status_name}
                            </Text>
                          </View>
                        )}

                        {data.status_name === "ทำแบบประเมิน" && (
                          <View
                            style={{
                              justifyContent: "center",
                            }}
                          >
                            <Text
                              style={{
                                color: COLORSFont.textblack,
                                fontSize: 13,
                                fontFamily: FONTFAMILY_.MitrLight,
                                marginBottom: 5,
                              }}
                            >
                              {data.status_name}
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                _getFormsSurvey(
                                  item,
                                  this.props.dispatch,
                                  navigation
                                );
                                // alert(item.id_list)
                                // _getFormsSurvey
                                // navigation.navigate("SurveyForm1imgDevnew", {
                                //   Dataitem: item,
                                // });
                              }}
                              style={{
                                width: "50%",
                                height: 37,
                                backgroundColor: COLORSFont.Primary700,
                                borderRadius: 8,
                                justifyContent: "center",
                                marginBottom: 10,
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "center",
                                }}
                              >
                                <View
                                  style={{
                                    marginHorizontal: 5,
                                    justifyContent: "center",
                                    top: 2,
                                  }}
                                >
                                  <IconSurvey />
                                </View>
                                <View style={{}}>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontFamily: FONTFAMILY_.MitrLight,
                                      color: COLORSFont.white,
                                    }}
                                  >
                                    {"ประเมิน"}
                                  </Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </View>
                        )}
                      </>
                    ) : (
                      <View style={{ height: 0 }} />
                    )}
                  </>
                );
              })}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  handleSlide = (type) => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 10,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 10,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 10,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 10,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 10,
        }).start(),
      ]);
    }
  };

  render() {
    const { navigation, DataRegister, DataSmeAuth } = this.props;

    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
      DatatoHistory,
      Activityprocesslength,
    } = this.state;

    return (
      <View style={{ width: "100%" }}>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <View style={{ marginBottom: 16, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={Styles.textTitlepro2}>{"กิจกรรมกรม"}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ActivityHistory", {
                  _DatatoHistory: DatatoHistory,
                });
              }}
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text style={Styles.textTitlepro}>
                  {"ประวัติการร่วมกิจกรรม"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* tab select menu  */}
          <View
            style={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <View
              style={{
                flexDirection: "row",

                height: 44,
                position: "relative",
                marginHorizontal: 0,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 44,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  backgroundColor: "#FFF",
                  borderRadius: 4,
                  borderRightWidth: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onPress={() => this.setState({ active: 0 })}
              >
                <View
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: COLORbg.bggray,
                    width: "100%",
                  }}
                >
                  <View style={{ justifyContent: "center", marginVertical: 9 }}>
                    <Text
                      style={{
                        fontFamily:
                          active === 0
                            ? FONTFAMILY_.MitrRegular
                            : FONTFAMILY_.MitrLight,
                        fontSize: 14,
                        color:
                          active === 0
                            ? COLORSFont.textblack
                            : COLORSFont.textblackholo,

                        textAlign: "center",
                      }}
                    >
                      {"กำลังกรอกใบสมัคร"}
                    </Text>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    {active === 0 && (
                      <LinearGradient
                        onLayout={(event) =>
                          this.setState({
                            xTabOne: event.nativeEvent.layout.x,
                          })
                        }
                        colors={[
                          COLORbg.LinearGradient1,
                          COLORbg.LinearGradient2,
                        ]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                          height: 3,
                          borderBottomLeftRadius: active === 0 ? 20 : 0,

                          width: "100%",
                        }}
                      />
                    )}
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  backgroundColor: "#FFF",
                  borderRadius: 4,
                  borderLeftWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  flexDirection: "row",
                }}
                onPress={() => this.setState({ active: 1 })}
              >
                <View
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: COLORbg.bggray,
                    width: "100%",
                  }}
                >
                  <View style={{ justifyContent: "center", marginVertical: 9 }}>
                    <Text
                      style={{
                        fontFamily:
                          active === 1
                            ? FONTFAMILY_.MitrRegular
                            : FONTFAMILY_.MitrLight,
                        fontSize: 14,
                        color:
                          active === 1
                            ? COLORSFont.textblack
                            : COLORSFont.textblackholo,

                        textAlign: "center",
                      }}
                    >
                      {"อยู่ระหว่างดำเนินงาน"}
                    </Text>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    {active === 1 && (
                      <LinearGradient
                        onLayout={(event) =>
                          this.setState({
                            xTabOne: event.nativeEvent.layout.x,
                          })
                        }
                        colors={[
                          COLORbg.LinearGradient1,
                          COLORbg.LinearGradient2,
                        ]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                          height: 3,
                          borderBottomRightRadius: active === 1 ? 20 : 0,

                          width: "100%",
                        }}
                      />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <Animated.View
                style={{
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onLayout={(event) =>
                  this.setState({
                    translateY: event.nativeEvent.layout.height,
                  })
                }
              >
                {/* import componect ActivityList กำลังสมัครใบสมัคร */}
                {active === 0 && (
                  <View style={{ width: "100%" }}>
                    <View style={{ flex: 1 }}>
                      <FlatList
                        scrollEnabled={false}
                        style={{}}
                        renderItem={this.ListDataAct1}
                        data={this.DataAct2(1)}
                        keyExtractor={(item, index) => index}
                      />

                      {this.state.Activityregisterlength.length > 3 && (
                        <TouchableOpacity
                          style={Styles.BThide}
                          onPress={() => {
                            this.state.ActivityAccept.length === this.state.Page
                              ? this.setState({ Page: 3 })
                              : this.setState({
                                  Page: this.state.ActivityAccept.length,
                                });
                          }}
                        >
                          <Text style={Styles.TextHide}>
                            {" "}
                            {this.state.ActivityAccept.length ===
                            this.state.Page
                              ? I18n.t("translate_Hide")
                              : I18n.t("translate_See_more")}
                          </Text>
                        </TouchableOpacity>
                        // </View>
                      )}
                    </View>

                    <View />
                  </View>
                )}
              </Animated.View>

              <Animated.View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {active === 1 && (
                  <View style={{ width: "100%" }}>
                    <View style={{ flex: 1 }}>
                      <FlatList
                        scrollEnabled={false}
                        style={{}}
                        renderItem={this.ListDataprocess}
                        data={this.DataAct2(2)}
                        keyExtractor={(item, index) => index}
                      />

                      {/* <View style={{}}> */}
                      {this.state.Activityprocesslength.length > 3 && (
                        // <View style={Styles.ViewSub12}>
                        <TouchableOpacity
                          style={Styles.BThide}
                          onPress={() => {
                            // alert(this.state.ActivityAccept.length)
                            this.state.ActivityAccept.length === this.state.Page
                              ? this.setState({ Page: 3 })
                              : this.setState({
                                  Page: this.state.ActivityAccept.length,
                                });
                          }}
                        >
                          <Text style={Styles.TextHide}>
                            {" "}
                            {this.state.ActivityAccept.length ===
                            this.state.Page
                              ? I18n.t("translate_Hide")
                              : I18n.t("translate_See_more")}
                          </Text>
                        </TouchableOpacity>
                        // </View>
                      )}
                    </View>

                    <View />
                  </View>
                )}
              </Animated.View>
            </ScrollView>
          </View>

          {/* tab select menu  */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  getUser: state.userReducer.getUser,
  authData: state.authReducer.authData,
  getImg: state.authReducer.getImg,
  getStatus: state.dataReducer.getStatus,
  getNotification: state.authReducer.getNotification,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activities);
