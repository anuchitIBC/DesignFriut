import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
  ActivityIndicator,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet,
  Share,
  Alert,
  Animated,
  RefreshControl,
} from "react-native";
import { connect } from "react-redux";
import Styles from "../../Develop/Styles";
import Headers from "../../../components/Headers";
import Styless from "./Styles";

import { CheckBox, Overlay, ListItem, Header } from "react-native-elements";
import { Getformattachment } from "../../../actions/data.actions";
import I18n from "../../../utils/I18n";
import LinearGradient from "react-native-linear-gradient";
import { COLORbg, COLORrgb, COLORSFont } from "../../../css/AllColor";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { ViewScale } from "../../../config/ViewScale";
import { FONTFAMILY_ } from "../../../css/AllFontfamily";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon0 from "react-native-vector-icons/Ionicons";
import {
  Star_Date,
  End_Datet,
  End_DatetFull,
} from "../../../config/Allfunction";
import {
  Arrowright,
  ICONLocation,
  Icononline,
  Icononlinered,
  Penciledit,
  Iconclose,
  IconchooseMonth,
  Arrowback,
  IconUpload,
  IconFilesupload,
  IconFilesup1,
  IconImageup1,
} from "../../../icon/Customs";

import {
  idcard,
  Phonenumber,
  showTitlename,
} from "../../../config/Allfunction";
import RBSheet from "react-native-raw-bottom-sheet";
import DataProvices from "../../../Data/DataProvices";
import DataDistricts from "../../../Data/DataDistricts";
import Datasubdistricts from "../../../Data/Datasubdistricts";
import DataCountry from "../../../Data/DataCountry";
import DataTitlename from "../../../Data/DataTitlename";
import { Root, Popup, Toast } from "../../../lib_edit/popup-ui";
import { ref } from "yup";
import { TextCSS } from "../../../css/Allcss";
import Icon2 from "react-native-vector-icons/Foundation";
import ReactNativeBlobUtil from "react-native-blob-util";
import DocumentPicker from "react-native-document-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const height = Dimensions.get("window").height;
const { width } = Dimensions.get("window");
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 30;
const Datatest = [
  {
    res_code: "00",
    res_text: "success",
    res_result: [
      {
        Title: "เอกสารที่บังคับ",
        Items: [
          {
            Type: "List",
            Name: "ActivityAttachments",
            Label: "",
            Data: [
              {
                Tid: 8,
                FileType: "Company Profile",
                FileUpload: "",
                FileUrl: "",
              },
              {
                Tid: 9,
                FileType: "Catalogue/Brochure หรือรูปภาพของสินค้า",
                FileUpload: "",
                FileUrl: "",
              },
              {
                Tid: 10,
                FileType:
                  "หนังสือรับรองการจดทะเบียนเป็นนิติบุคคล ไม่เกิน6เดือน",
                FileUpload: "",
                FileUrl: "",
              },
              {
                Tid: 13,
                FileType: "สำเนาใบรับรองมาตรฐานสินค้าจากหน่วยงานที่เกี่ยวข้อง",
                FileUpload: "",
                FileUrl: "",
              },
              {
                Tid: 14,
                FileType: "สำเนาการจดทะเบียนสิทธิบัตร เครื่องหมายการค้า",
                FileUpload: "",
                FileUrl: "",
              },
            ],
            IsRequired: true,
            IsArray: false,
            MaxArray: 0,
          },
        ],
      },
      {
        Title: "เอกสารอื่นๆ (หากมี) เพื่อประกอบการพิจารณาเข้าร่วมงาน",
        Items: [
          {
            Type: "List",
            Name: "ActivityAttachmentsOther",
            Label: "",
            Data: [
              {
                Tid: 106,
                FileType: "หนังสือบริคณห์สนธิ",
                FileUpload: "",
                FileUrl: "",
              },
              {
                Tid: 107,
                FileType:
                  "บัญชีรายชื่อผู้ถือหุ้น (โดยจะต้องมีสัดส่วนผู้ถือหุ้นที่มีสัญชาติไทยไม่น้อยกว่าร้อยละ 51)",
                FileUpload: "",
                FileUrl: "",
              },
            ],
            IsRequired: false,
            IsArray: false,
            MaxArray: 0,
          },
        ],
      },
      {
        Title: "หมายเหตุ",
        Items: [
          {
            Type: "Text",
            Name: "Remark1",
            Label:
              "กรณีที่บริษัทไม่ได้ทำการผลิตสินค้าเอง จะต้องมีจดหมายรับรองจากบริษัทที่ผลิตสินค้าให้ว่าได้ทำการผลิตสินค้าให้ พร้อมทั้งแนบสำเนาหนังสือรับรองคุณภาพมาตรฐานสินค้าจากหน่วยงานที่เกี่ยวข้องของบริษัทที่ผลิตสินค้าให้ (ทุกรายการที่บริษัทที่ผลิตสินค้าให้ได้รับการรับรองคุณภาพมาตรฐานสินค้า) เอกสารทุกฉบับจะต้องมีการเซ็นรับรองสำเนาถูกต้องโดยผู้มีอำนาจลงนามของบริษัทที่ทำการผลิตสินค้าให้ และประทับตราบริษัทที่ทำการผลิตสินค้าให้",
            Data: null,
            IsRequired: true,
            IsArray: false,
            MaxArray: 0,
          },
          {
            Type: "List",
            Name: "Remark2",
            Label:
              "เอกสารที่ใช้ยื่นในการสมัครเข้าร่วมงาน จะต้องไม่หมดอายุก่อนวันเข้าร่วมงานแสดงสินค้า",
            Data: null,
            IsRequired: false,
            IsArray: false,
            MaxArray: 0,
          },
        ],
      },
    ],
  },
];

class TradeActivityFrom6Attachment extends React.Component {
  constructor(props) {
    const getDate = new Date();
    super(props);
    this.state = {
      refreshing: false,
      parallaxHeight: 220,
      parallaxHeightandroid: 250,
      Select: [],
      hidetitle: false,
      //////////////////////data profiles///////
      Dataformattachment1: [],
      Dataformattachment2: [],
      Dataformattachment3: [],
      FileNameCompany: "",
      FileDataCompany: "",
      FileNameCompany1: "",
      FileDataCompany1: "",
      FileNameCompany2: "",
      FileDataCompany2: "",
      FileNameCompany3: "",
      FileDataCompany3: "",
      FileNameCompany4: "",
      FileDataCompany4: "",
      FileNameCompany5: "",
      FileDataCompany5: "",
      FileNameCompany6: "",
      FileDataCompany6: "",
      /////////// image /////////////
      ImageNameCatagory: "",
      ImageCatagoryURL: "",
    };
  }

  //////////////// zone function /////////////////////

  componentDidMount() {
    //  const {PID,TYPE,ACTIVITICODE,IDCARD,TOKEN} = this.props.route.params
    //  console.log(PID,TYPE ,ACTIVITICODE,IDCARD,TOKEN)
    // this._Getformattachment();

    this.setState({
      Dataformattachment1: Datatest[0].res_result[0].Items[0].Data,
      Dataformattachment2: Datatest[0].res_result[1].Items[0].Data,
      Dataformattachment3: Datatest[0].res_result[2].Items,
    });
  }
  //ActivityParticipantInfoOverseasFairs
  _Getformattachment = async (value) => {
    const {
      Dataitem,
      PID,
      TYPE,
      ACTIVITICODE,
      IDCARD,
      TOKEN,
      FORMTYPE,
    } = this.props.route.params;

    try {
      const { authData } = this.props;
      const token = authData.token;
      const payload = {
        result: {
          activity_code: ACTIVITICODE,
          formtype: FORMTYPE,
          pid: PID,
        },
        token: TOKEN,
      };
      const response = await this.props.dispatch(Getformattachment(payload));
      // console.log('ถถถถถถถ');
      console.log("Getformattachment ===>", JSON.stringify(response));

      // if (response.res_text === "success") {
      //   this.setState({
      //     Dataformattachment1: response.res_result[0].Items[0].Data,
      //     Dataformattachment2: response.res_result[1].Items[0].Data,
      //     Dataformattachment3: response.res_result[2].Items,
      //   });
      // } else {
      // }
    } catch (error) {
      console.log("GFFF", error);
    }
  };

  open_ConpanyFiles = async (valus) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const source = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (source.size <= 4000000) {
        this.setState({
          FileNameCompany: source.name,
          FileDataCompany: source.uri,
        });
      } else {
        console.log("Files over size");
      }

      console.log(
        // source.uri,+"TYPE"+
        //  source.type,
        source.name
        //  source.size,
      );
    } catch (error) {
      console.log(error);
    }
  };
  open_ConpanyFiles1 = async (valus) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const source = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (source.size <= 4000000) {
        this.setState({
          FileNameCompany1: source.name,
          FileDataCompany1: source.uri,
        });
      } else {
        console.log("Files over size");
      }

      console.log(
        // source.uri,+"TYPE"+
        //  source.type,
        source.name
        //  source.size,
      );
    } catch (error) {
      console.log(error);
    }
  };
  open_ConpanyFiles2 = async (valus) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const source = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (source.size <= 4000000) {
        this.setState({
          FileNameCompany2: source.name,
          FileDataCompany2: source.uri,
        });
      } else {
        console.log("Files over size");
      }

      console.log(
        // source.uri,+"TYPE"+
        //  source.type,
        source.name
        //  source.size,
      );
    } catch (error) {
      console.log(error);
    }
  };
  open_ConpanyFiles3 = async (valus) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const source = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (source.size <= 4000000) {
        this.setState({
          FileNameCompany3: source.name,
          FileDataCompany3: source.uri,
        });
      } else {
        console.log("Files over size");
      }

      console.log(
        // source.uri,+"TYPE"+
        //  source.type,
        source.name
        //  source.size,
      );
    } catch (error) {
      console.log(error);
    }
  };
  open_ConpanyFiles4 = async (valus) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const source = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (source.size <= 4000000) {
        this.setState({
          FileNameCompany4: source.name,
          FileDataCompany4: source.uri,
        });
      } else {
        console.log("Files over size");
      }

      console.log(
        // source.uri,+"TYPE"+
        //  source.type,
        source.name
        //  source.size,
      );
    } catch (error) {
      console.log(error);
    }
  };

  open_ConpanyFiles5 = async (valus) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const source = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (source.size <= 4000000) {
        this.setState({
          FileNameCompany5: source.name,
          FileDataCompany5: source.uri,
        });
      } else {
        console.log("Files over size");
      }

      console.log(
        // source.uri,+"TYPE"+
        //  source.type,
        source.name
        //  source.size,
      );
    } catch (error) {
      console.log(error);
    }
  };

  open_ConpanyFiles6 = async (valus) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const source = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (source.size <= 4000000) {
        this.setState({
          FileNameCompany6: source.name,
          FileDataCompany6: source.uri,
        });
      } else {
        console.log("Files over size");
      }

      console.log(
        // source.uri,+"TYPE"+
        //  source.type,
        source.name
        //  source.size,
      );
    } catch (error) {
      console.log(error);
    }
  };

  imageGalleryLaunch_catagory = () => {
    const options2 = {
      title: "Select video",
      mediaType: "photo",
      path: "photo",
      quality: 0.1,
    };
    launchImageLibrary(options2, (response) => {
      if (!response.didCancel) {
        let responses = response;
        let path = responses.uri;

        if (Platform.OS === "ios") {
          path = "~" + path.substring(path.indexOf("/Documents"));
        }
        if (!responses.fileName) {
          responses.fileName = path.split("/").pop();
        }

        console.log(responses);
        if (responses.fileSize <= 4000000) {
          if (this.state.TypeOpenFiles === 0) {
            this.setState({
              // ImageNameCatagory: responses.fileName,
              // ImageCatagoryURL: responses.uri,
              FileNameCompany: responses.fileName,
              FileDataCompany: responses.uri,
            });
          } else if (this.state.TypeOpenFiles === 1) {
            this.setState({
              // ImageNameCatagory: responses.fileName,
              // ImageCatagoryURL: responses.uri,
              FileNameCompany1: responses.fileName,
              FileDataCompany1: responses.uri,
            });
          } else if (this.state.TypeOpenFiles === 2) {
            this.setState({
              // ImageNameCatagory: responses.fileName,
              // ImageCatagoryURL: responses.uri,
              FileNameCompany2: responses.fileName,
              FileDataCompany2: responses.uri,
            });
          } else if (this.state.TypeOpenFiles === 3) {
            this.setState({
              // ImageNameCatagory: responses.fileName,
              // ImageCatagoryURL: responses.uri,
              FileNameCompany3: responses.fileName,
              FileDataCompany3: responses.uri,
            });
          } else if (this.state.TypeOpenFiles === 4) {
            this.setState({
              // ImageNameCatagory: responses.fileName,
              // ImageCatagoryURL: responses.uri,
              FileNameCompany4: responses.fileName,
              FileDataCompany4: responses.uri,
            });
          }
        } else {
          console.log("Files over size");
        }
      }
    });
  };

  //////////////// zone function /////////////////////

  //////////////// zone function /////////////////////

  //////////////// zone components จังหวัด /////////////////////

  //////////////// zone components แก้ไข ข้อมูลสผู้ประกอบการ /////////////////////

  //////////////// zone components /////////////////////
  /// render page///////
  render() {
    // this.props.navigation.navigate

    const {
      FormDataProfiles,
      FormDatatype1addnress,
      FormDatatype1contact,
      Dataitem,
      PID,
      TYPE,
      ACTIVITICODE,
      IDCARD,
      TOKEN,
      dataProfiles,
      FORMTYPE,
    } = this.props.route.params;

    const {
      Dataformattachment1,
      Dataformattachment2,
      Dataformattachment3,
    } = this.state;
    // console.log(DataParticipantInfoOverseasFairs2);

    return (
      <Root>
        <View style={Styles.ViewSub1}>
          {/* FROM EDIT ฟอมแก้ไข ข้อมูลส่วนตัว */}

          {/* FROM EDIT ฟอมแก้ไข ข้อมูลส่วนตัว */}

          <Header
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: [COLORbg.LinearGradient1, COLORbg.LinearGradient2],
              start: { x: 0, y: 1 },
              end: { x: 1, y: 1 },
            }}
            leftComponent={
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate(
                    "TradeActivityDetailScreen",
                    {}
                  );
                }}
                style={{}}
              >
                <Arrowback />
              </TouchableOpacity>
            }
            centerComponent={
              <View style={{}}>
                <Text
                  style={{
                    color: COLORSFont.WhiteFF,
                    fontSize: 16,
                    fontFamily: FONTFAMILY_.MitrRegular,
                  }}
                >
                  {I18n.locale === "th"
                    ? this.props.getUser.userDetails.res_result.type === 1 ||
                      this.props.getUser.userDetails.res_result.type === 2
                      ? "สมัครร่วมกิจกรรม (นิติบุคคล)"
                      : "สมัครร่วมกิจกรรม (บุคคลทั่วไป)"
                    : "Apply for the event"}
                </Text>
              </View>
            }
            rightComponent={<></>}
          />

          <ParallaxScrollView
            // SCROLLVIEW_REF = 'ScrollView'
            // outputScaleValue={0}
            // scrollElement={ref =>{
            //   this.ref = ref
            //   console.log("ll",ref)
            // }}
            backgroundColor={COLORbg.bgcolor}
            contentBackgroundColor={COLORbg.bgcolor}
            headerBackgroundColor={COLORbg.bgcolor}
            style={{
              marginTop: Platform.OS === "android" ? -1 : 0,
              overflow: "hidden",
              backgroundColor: COLORbg.bgcolor,
              // height:20
            }}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={this.state.refreshing}
            //     onRefresh={this._onRefresh.bind(this)}
            //   />
            // }
            scrollEnabled={true}
            parallaxHeaderHeight={
              Platform.OS === "android"
                ? ViewScale(this.state.parallaxHeightandroid)
                : this.state.parallaxHeight
            }
            backgroundSpeed={80}
            renderBackground={() => (
              <View
                key="background"
                style={{
                  // overflow: "hidden",
                  backgroundColor: COLORbg.bgcolor,
                }}
              >
                <LinearGradient
                  colors={[COLORbg.LinearGradient1, COLORbg.LinearGradient2]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    height: "100%",

                    //   overflow: "hidden",
                  }}
                />
              </View>
            )}
            renderForeground={() => (
              <View
                key="parallax-header"
                style={{
                  flex: 1,
                  // borderWidth:1
                }}
              >
                <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                  <View
                    style={{
                      marginBottom: 15,
                      flexDirection: "row",
                    }}
                  >
                    <View style={{}}>
                      <Image
                        resizeMode="cover"
                        style={Styless.imgcss}
                        // source={
                        //   Dataitem.activity_list_type_id === 43
                        //     ? require("../../../image/Elrean.png")
                        //     : require("../../../image/imgDevnew.png")
                        // }
                        source={{ uri: Dataitem.activity_list_logo_thumb }}
                      />
                    </View>
                    <View
                      style={{ flex: 1, marginHorizontal: 15, height: 100 }}
                    >
                      <Text numberOfLines={2} style={Styless.yexytitledetail}>
                        {Dataitem.activity_list_topic_th}
                      </Text>
                      <View style={{ marginBottom: 5 }}>
                        <Text style={Styless.textwhite14}>
                          {End_DatetFull(Dataitem.activity_list_end_date)}
                        </Text>
                      </View>

                      <View style={{ marginBottom: 5, flexDirection: "row" }}>
                        <View
                          style={{
                            justifyContent: "center",
                            marginHorizontal: 0,
                          }}
                        >
                          {Dataitem.activity_list_location_en === "Online" ? (
                            <Icononlinered />
                          ) : (
                            <ICONLocation />
                          )}
                        </View>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            left: 10,
                          }}
                        >
                          <Text style={Styless.textwhite14} numberOfLines={1}>
                            {Dataitem.activity_list_location_th}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ borderTopColor: "#FFF", borderTopWidth: 1 }}>
                  <TouchableOpacity
                    onPress={() => {
                      // this.setState({parallaxHeight:300})
                      // this.SelecOnOff(1);
                      // this.setState({
                      //   parallaxHeight: 450,
                      //   parallaxHeightandroid: 520,
                      //   hidetitle: true,
                      // });
                    }}
                    style={{ marginHorizontal: 23, marginTop: 20 }}
                  >
                    <View style={Styless.Viewselect}>
                      <View style={{ flex: 1, left: 5 }}>
                        <Text style={Styless.textwhite16}>{"เอกสารแนบ"}</Text>
                      </View>
                      {this.state.hidetitle === false ? (
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewicongreen}>
                              <View style={{ alignSelf: "center" }}>
                                <Icon1 name="check" size={12} color={"#FFF"} />
                              </View>
                            </View>
                          </View>

                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewiconwhiteline} />
                          </View>

                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewicongreen}>
                              <View style={{ alignSelf: "center" }}>
                                <Icon1 name="check" size={12} color={"#FFF"} />
                              </View>
                            </View>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewiconwhiteline} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewicongreen}>
                              <View style={{ alignSelf: "center" }}>
                                <Icon1 name="check" size={12} color={"#FFF"} />
                              </View>
                            </View>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewiconwhiteline} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewicongreen}>
                              <View style={{ alignSelf: "center" }}>
                                <Icon1 name="check" size={12} color={"#FFF"} />
                              </View>
                            </View>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewiconwhiteline} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewicongreen}>
                              <View style={{ alignSelf: "center" }}>
                                <Icon1 name="check" size={12} color={"#FFF"} />
                              </View>
                            </View>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewiconwhiteline} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <View style={Styless.viewiconwhite} />
                          </View>
                        </View>
                      ) : (
                        <></>
                      )}

                      <View
                        style={{
                          marginHorizontal: 5,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Icon0
                          style={{}}
                          name={
                            this.state.hidetitle === false
                              ? "chevron-down"
                              : "chevron-up"
                          }
                          size={16}
                          color={COLORSFont.white}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            stickyHeaderHeight={80}
            renderStickyHeader={() => (
              <LinearGradient
                colors={[COLORbg.LinearGradient1, COLORbg.LinearGradient2]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{}}
              >
                <View key="sticky-header" style={{ marginBottom: 20 }}>
                  <View style={{ borderTopColor: "#FFF", borderTopWidth: 1 }}>
                    <View style={{ marginTop: 15 }} />
                    <TouchableOpacity
                      onPress={() => {
                        // this.setState({parallaxHeight:300})
                        // this.SelecOnOff(1);
                        // this.setState({
                        //   parallaxHeight: 450,
                        //   parallaxHeightandroid: 520,
                        //   hidetitle: true,
                        // });
                      }}
                      style={{ marginHorizontal: 23 }}
                    >
                      <View style={Styless.Viewselect}>
                        <View style={{ flex: 1, left: 5 }}>
                          <Text style={Styless.textwhite16}>{"เอกสารแนบ"}</Text>
                        </View>
                        {this.state.hidetitle === false ? (
                          <View style={{ flexDirection: "row" }}>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewicongreen}>
                                <View style={{ alignSelf: "center" }}>
                                  <Icon1
                                    name="check"
                                    size={12}
                                    color={"#FFF"}
                                  />
                                </View>
                              </View>
                            </View>

                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewiconwhiteline} />
                            </View>

                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewicongreen}>
                                <View style={{ alignSelf: "center" }}>
                                  <Icon1
                                    name="check"
                                    size={12}
                                    color={"#FFF"}
                                  />
                                </View>
                              </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewiconwhiteline} />
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewicongreen}>
                                <View style={{ alignSelf: "center" }}>
                                  <Icon1
                                    name="check"
                                    size={12}
                                    color={"#FFF"}
                                  />
                                </View>
                              </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewiconwhiteline} />
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewicongreen}>
                                <View style={{ alignSelf: "center" }}>
                                  <Icon1
                                    name="check"
                                    size={12}
                                    color={"#FFF"}
                                  />
                                </View>
                              </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewiconwhiteline} />
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewicongreen}>
                                <View style={{ alignSelf: "center" }}>
                                  <Icon1
                                    name="check"
                                    size={12}
                                    color={"#FFF"}
                                  />
                                </View>
                              </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewiconwhiteline} />
                            </View>
                            <View style={{ justifyContent: "center" }}>
                              <View style={Styless.viewiconwhite} />
                            </View>
                          </View>
                        ) : (
                          <></>
                        )}

                        <View
                          style={{
                            marginHorizontal: 5,
                            justifyContent: "flex-end",
                          }}
                        >
                          <Icon0
                            style={{}}
                            name={
                              this.state.hidetitle === false
                                ? "chevron-down"
                                : "chevron-up"
                            }
                            size={16}
                            color={COLORSFont.white}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            )}
          >
            {/* แบบฟอมข้อมูลส่วนตัว */}
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Text style={TextCSS.Text16black_MitrRegular}>
                {"เอกสารเพื่อประกอบการพิจารณา"}
              </Text>
              <Text style={TextCSS.Text14black_MitrLight}>
                {"*เฉพาะไฟล์ .JPEG ,.PNG ,.GIF ,.PDF ขนาดไม่เกิน 4 MB"}
              </Text>
              {Dataformattachment1 !== undefined && (
                <View>
                  {Dataformattachment1.map((Data, index) => {
                    return (
                      <View
                        style={[
                          Styless.Viewbgfrom,
                          { padding: 15, marginTop: 10 },
                        ]}
                      >
                        <Text style={TextCSS.Text16black_MitrExtraLight}>
                          {Data.FileType}
                        </Text>
                        {index === 0 && (
                          <View style={{ marginTop: 10 }}>
                            <TouchableOpacity
                              onPress={() => {
                                // this.open_ConpanyFiles();
                                this.setState({ TypeOpenFiles: 0 });
                                this.modelimgandfiles1.open();
                              }}
                              style={Styless.BORDER_UPLOAD_FILE}
                            >
                              <View
                                style={{
                                  alignSelf: "center",
                                  marginBottom: 10,
                                }}
                              >
                                <IconUpload />
                              </View>
                              <View style={{ alignSelf: "center" }}>
                                <Text
                                  style={TextCSS.Text14Primary500_MitrLight}
                                >
                                  {"อัปโหลดไฟล์"}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            {this.state.FileNameCompany !== "" && (
                              <View style={Styless.BORDER_FILENAME_}>
                                <View style={{ justifyContent: "center" }}>
                                  <IconFilesupload />
                                </View>
                                <View style={Styless.BORDER_VIEWTEXTNAME}>
                                  <Text
                                    style={[
                                      TextCSS.Text14Primary600_MitrLight,
                                      {
                                        textDecorationLine: "underline",
                                      },
                                    ]}
                                  >
                                    {this.state.FileNameCompany}
                                  </Text>
                                </View>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({
                                      FileNameCompany: "",
                                      FileDataCompany: "",
                                    });
                                  }}
                                  style={{
                                    marginHorizontal: 10,
                                    justifyContent: "center",
                                  }}
                                >
                                  <Icon2
                                    style={{ padding: 3, marginHorizontal: 10 }}
                                    name={"trash"}
                                    size={15}
                                    color={"#FF5D5D"}
                                  />
                                </TouchableOpacity>
                              </View>
                            )}
                          </View>
                        )}
                        {index === 1 && (
                          <View style={{ marginTop: 10 }}>
                            <TouchableOpacity
                              onPress={() => {
                                // this.open_ConpanyFiles1();
                                this.setState({ TypeOpenFiles: 1 });
                                this.modelimgandfiles1.open();
                              }}
                              style={Styless.BORDER_UPLOAD_FILE}
                            >
                              <View
                                style={{
                                  alignSelf: "center",
                                  marginBottom: 10,
                                }}
                              >
                                <IconUpload />
                              </View>
                              <View style={{ alignSelf: "center" }}>
                                <Text
                                  style={TextCSS.Text14Primary500_MitrLight}
                                >
                                  {"อัปโหลดไฟล์"}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            {this.state.FileNameCompany1 !== "" && (
                              <View style={Styless.BORDER_FILENAME_}>
                                <View style={{ justifyContent: "center" }}>
                                  <IconFilesupload />
                                </View>
                                <View style={Styless.BORDER_VIEWTEXTNAME}>
                                  <Text
                                    style={[
                                      TextCSS.Text14Primary600_MitrLight,
                                      {
                                        textDecorationLine: "underline",
                                      },
                                    ]}
                                  >
                                    {this.state.FileNameCompany1}
                                  </Text>
                                </View>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({
                                      FileNameCompany1: "",
                                      FileDataCompany1: "",
                                    });
                                  }}
                                  style={{
                                    marginHorizontal: 10,
                                    justifyContent: "center",
                                  }}
                                >
                                  <Icon2
                                    style={{ padding: 3, marginHorizontal: 10 }}
                                    name={"trash"}
                                    size={15}
                                    color={"#FF5D5D"}
                                  />
                                </TouchableOpacity>
                              </View>
                            )}
                          </View>
                        )}
                        {index === 2 && (
                          <View style={{ marginTop: 10 }}>
                            <TouchableOpacity
                              onPress={() => {
                                // this.open_ConpanyFiles2();
                                this.setState({ TypeOpenFiles: 2 });
                                this.modelimgandfiles1.open();
                              }}
                              style={Styless.BORDER_UPLOAD_FILE}
                            >
                              <View
                                style={{
                                  alignSelf: "center",
                                  marginBottom: 10,
                                }}
                              >
                                <IconUpload />
                              </View>
                              <View style={{ alignSelf: "center" }}>
                                <Text
                                  style={TextCSS.Text14Primary500_MitrLight}
                                >
                                  {"อัปโหลดไฟล์"}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            {this.state.FileDataCompany2 !== "" && (
                              <View style={Styless.BORDER_FILENAME_}>
                                <View style={{ justifyContent: "center" }}>
                                  <IconFilesupload />
                                </View>
                                <View style={Styless.BORDER_VIEWTEXTNAME}>
                                  <Text
                                    style={[
                                      TextCSS.Text14Primary600_MitrLight,
                                      {
                                        textDecorationLine: "underline",
                                      },
                                    ]}
                                  >
                                    {this.state.FileNameCompany2}
                                  </Text>
                                </View>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({
                                      FileNameCompany2: "",
                                      FileDataCompany2: "",
                                    });
                                  }}
                                  style={{
                                    marginHorizontal: 10,
                                    justifyContent: "center",
                                  }}
                                >
                                  <Icon2
                                    style={{ padding: 3, marginHorizontal: 10 }}
                                    name={"trash"}
                                    size={15}
                                    color={"#FF5D5D"}
                                  />
                                </TouchableOpacity>
                              </View>
                            )}
                          </View>
                        )}
                        {index === 3 && (
                          <View style={{ marginTop: 10 }}>
                            <TouchableOpacity
                              onPress={() => {
                                // this.open_ConpanyFiles3();
                                this.setState({ TypeOpenFiles: 3 });
                                this.modelimgandfiles1.open();
                              }}
                              style={Styless.BORDER_UPLOAD_FILE}
                            >
                              <View
                                style={{
                                  alignSelf: "center",
                                  marginBottom: 10,
                                }}
                              >
                                <IconUpload />
                              </View>
                              <View style={{ alignSelf: "center" }}>
                                <Text
                                  style={TextCSS.Text14Primary500_MitrLight}
                                >
                                  {"อัปโหลดไฟล์"}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            {this.state.FileDataCompany3 !== "" && (
                              <View style={Styless.BORDER_FILENAME_}>
                                <View style={{ justifyContent: "center" }}>
                                  <IconFilesupload />
                                </View>
                                <View style={Styless.BORDER_VIEWTEXTNAME}>
                                  <Text
                                    style={[
                                      TextCSS.Text14Primary600_MitrLight,
                                      {
                                        textDecorationLine: "underline",
                                      },
                                    ]}
                                  >
                                    {this.state.FileNameCompany3}
                                  </Text>
                                </View>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({
                                      FileNameCompany3: "",
                                      FileDataCompany3: "",
                                    });
                                  }}
                                  style={{
                                    marginHorizontal: 10,
                                    justifyContent: "center",
                                  }}
                                >
                                  <Icon2
                                    style={{ padding: 3, marginHorizontal: 10 }}
                                    name={"trash"}
                                    size={15}
                                    color={"#FF5D5D"}
                                  />
                                </TouchableOpacity>
                              </View>
                            )}
                          </View>
                        )}
                        {index === 4 && (
                          <View style={{ marginTop: 10 }}>
                            <TouchableOpacity
                              onPress={() => {
                                // this.open_ConpanyFiles4();
                                this.setState({ TypeOpenFiles: 4 });
                                this.modelimgandfiles1.open();
                              }}
                              style={Styless.BORDER_UPLOAD_FILE}
                            >
                              <View
                                style={{
                                  alignSelf: "center",
                                  marginBottom: 10,
                                }}
                              >
                                <IconUpload />
                              </View>
                              <View style={{ alignSelf: "center" }}>
                                <Text
                                  style={TextCSS.Text14Primary500_MitrLight}
                                >
                                  {"อัปโหลดไฟล์"}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            {this.state.FileDataCompany4 !== "" && (
                              <View style={Styless.BORDER_FILENAME_}>
                                <View style={{ justifyContent: "center" }}>
                                  <IconFilesupload />
                                </View>
                                <View style={Styless.BORDER_VIEWTEXTNAME}>
                                  <Text
                                    style={[
                                      TextCSS.Text14Primary600_MitrLight,
                                      {
                                        textDecorationLine: "underline",
                                      },
                                    ]}
                                  >
                                    {this.state.FileNameCompany4}
                                  </Text>
                                </View>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({
                                      FileNameCompany4: "",
                                      FileDataCompany4: "",
                                    });
                                  }}
                                  style={{
                                    marginHorizontal: 10,
                                    justifyContent: "center",
                                  }}
                                >
                                  <Icon2
                                    style={{ padding: 3, marginHorizontal: 10 }}
                                    name={"trash"}
                                    size={15}
                                    color={"#FF5D5D"}
                                  />
                                </TouchableOpacity>
                              </View>
                            )}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}

              {Dataformattachment2 !== undefined && (
                <View style={{ marginTop: 25 }}>
                  <Text style={TextCSS.Text16black_MitrRegular}>
                    {"เอกสารอื่นๆ (หากมี) เพื่อประกอบการพิจารณาเข้าร่วมงาน"}
                  </Text>
                  {Dataformattachment2.map((Data, index) => {
                    return (
                      <>
                        {index === 0 && (
                          <View
                            style={[
                              Styless.Viewbgfrom,
                              { padding: 15, marginTop: 10 },
                            ]}
                          >
                            <Text style={TextCSS.Text16black_MitrExtraLight}>
                              {Data.FileType}
                            </Text>

                            <View style={{ marginTop: 10 }}>
                              <TouchableOpacity
                                onPress={() => {
                                  this.open_ConpanyFiles5();
                                }}
                                style={{
                                  height: 84,
                                  borderWidth: 1,
                                  borderRadius: 8,
                                  borderColor: COLORSFont.Primary500,
                                  justifyContent: "center",
                                }}
                              >
                                <View
                                  style={{
                                    alignSelf: "center",
                                    marginBottom: 10,
                                  }}
                                >
                                  <IconUpload />
                                </View>
                                <View style={{ alignSelf: "center" }}>
                                  <Text
                                    style={TextCSS.Text14Primary500_MitrLight}
                                  >
                                    {"อัปโหลดไฟล์"}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              {this.state.FileDataCompany5 !== "" && (
                                <View style={Styless.BORDER_FILENAME_}>
                                  <View style={{ justifyContent: "center" }}>
                                    <IconFilesupload />
                                  </View>
                                  <View style={Styless.BORDER_VIEWTEXTNAME}>
                                    <Text
                                      style={[
                                        TextCSS.Text14Primary600_MitrLight,
                                        {
                                          textDecorationLine: "underline",
                                        },
                                      ]}
                                    >
                                      {this.state.FileNameCompany4}
                                    </Text>
                                  </View>
                                  <TouchableOpacity
                                    onPress={() => {
                                      this.setState({
                                        FileNameCompany5: "",
                                        FileDataCompany5: "",
                                      });
                                    }}
                                    style={{
                                      marginHorizontal: 10,
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Icon2
                                      style={{
                                        padding: 3,
                                        marginHorizontal: 10,
                                      }}
                                      name={"trash"}
                                      size={15}
                                      color={"#FF5D5D"}
                                    />
                                  </TouchableOpacity>
                                </View>
                              )}
                            </View>
                          </View>
                        )}
                        {index === 1 && (
                          <View
                            style={[
                              Styless.Viewbgfrom,
                              { padding: 15, marginTop: 10 },
                            ]}
                          >
                            <Text style={TextCSS.Text16black_MitrExtraLight}>
                              {Data.FileType}
                            </Text>

                            <View style={{ marginTop: 10 }}>
                              <TouchableOpacity
                                onPress={() => {
                                  this.open_ConpanyFiles6();
                                }}
                                style={{
                                  height: 84,
                                  borderWidth: 1,
                                  borderRadius: 8,
                                  borderColor: COLORSFont.Primary500,
                                  justifyContent: "center",
                                }}
                              >
                                <View
                                  style={{
                                    alignSelf: "center",
                                    marginBottom: 10,
                                  }}
                                >
                                  <IconUpload />
                                </View>
                                <View style={{ alignSelf: "center" }}>
                                  <Text
                                    style={TextCSS.Text14Primary500_MitrLight}
                                  >
                                    {"อัปโหลดไฟล์"}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              {this.state.FileDataCompany6 !== "" && (
                                <View style={Styless.BORDER_FILENAME_}>
                                  <View style={{ justifyContent: "center" }}>
                                    <IconFilesupload />
                                  </View>
                                  <View style={Styless.BORDER_VIEWTEXTNAME}>
                                    <Text
                                      style={[
                                        TextCSS.Text14Primary600_MitrLight,
                                        {
                                          textDecorationLine: "underline",
                                        },
                                      ]}
                                    >
                                      {this.state.FileNameCompany4}
                                    </Text>
                                  </View>
                                  <TouchableOpacity
                                    onPress={() => {
                                      this.setState({
                                        FileNameCompany6: "",
                                        FileDataCompany6: "",
                                      });
                                    }}
                                    style={{
                                      marginHorizontal: 10,
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Icon2
                                      style={{
                                        padding: 3,
                                        marginHorizontal: 10,
                                      }}
                                      name={"trash"}
                                      size={15}
                                      color={"#FF5D5D"}
                                    />
                                  </TouchableOpacity>
                                </View>
                              )}
                            </View>
                          </View>
                        )}
                      </>
                    );
                  })}
                </View>
              )}

              {Dataformattachment3 !== undefined && (
                <View style={{ marginTop: 0 }}>
                  {Dataformattachment3.map((Data, index) => {
                    return (
                      <View
                        style={[
                          Styless.Viewbgfrom,
                          { backgroundColor: index === 0 ? null : "#FFF" },
                        ]}
                      >
                        <Text
                          style={[
                            TextCSS.Text14black_MitrLight,
                            { textAlign: "justify" },
                          ]}
                        >
                          {Data.Label}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>

            {/* แบบฟอมข้อมูลส่วนตัว */}
          </ParallaxScrollView>
          <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={Styless.btnback}
            >
              <View style={{ flex: 0.2, justifyContent: "center" }}>
                <Icon0
                  style={{ alignSelf: "center" }}
                  name={"chevron-back"}
                  size={16}
                  color={COLORSFont.Primary500}
                />
              </View>
              <View style={{ flex: 0.9, justifyContent: "center" }}>
                <Text style={Styless.textback}>{"ย้อนกลับ"}</Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 5 }} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("TradeActivityFrom7Checklist", {
                  Dataitem: Dataitem,
                  dataProfiles: dataProfiles,
                  PID: PID,
                  TYPE: TYPE,
                  ACTIVITICODE: ACTIVITICODE,
                  IDCARD: IDCARD,
                  TOKEN: TOKEN,
                  FORMTYPE: FORMTYPE,
                  FormDataProfiles: FormDataProfiles,
                  FormDatatype1addnress: FormDatatype1addnress,
                  FormDatatype1contact: FormDatatype1contact,
                });
              }}
              style={Styless.btnnext}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={Styless.textnext}>{"ต่อไป"}</Text>
              </View>
              <View style={{ flex: 0.2, justifyContent: "center" }}>
                <Icon0
                  style={{}}
                  name={"chevron-forward"}
                  size={16}
                  color={COLORSFont.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <RBSheet
          ref={(ref) => {
            this.modelimgandfiles1 = ref;
          }}
          height={220}
          dragFromTopOnly={true}
          closeOnDragDown={true}
          openDuration={200}
          customStyles={{
            container: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            },
          }}
        >
          <View style={{ marginBottom: 50 }}>
            <View
              style={{
                borderBottomColor: COLORSFont.textblack,
                padding: 5,
                // borderWidth: 1,
                borderBottomWidth: 0.6,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTFAMILY_.MitrRegular,
                  fontSize: 16,
                  color: COLORSFont.textblack,
                  textAlign: "center",
                }}
              >
                {"อัปโหลดไฟล์"}
              </Text>
            </View>
            <ScrollView style={{ padding: 10 }}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  paddingVertical: 10,
                  marginHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.imageGalleryLaunch_catagory();
                  }}
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <View style={{ padding: 10, alignSelf: "center" }}>
                    <View style={{ alignSelf: "center" }}>
                      <IconImageup1 />
                    </View>
                    <View style={{ marginTop: 5 }}>
                      <Text style={TextCSS.Text14black_MitrRegular}>
                        {"รูปภาพ"}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    if (this.state.TypeOpenFiles === 0) {
                      this.open_ConpanyFiles();
                    } else if (this.state.TypeOpenFiles === 1) {
                      this.open_ConpanyFiles1();
                    } else if (this.state.TypeOpenFiles === 2) {
                      this.open_ConpanyFiles2();
                    } else if (this.state.TypeOpenFiles === 3) {
                      this.open_ConpanyFiles3();
                    } else if (this.state.TypeOpenFiles === 4) {
                      this.open_ConpanyFiles4();
                    }
                  }}
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <View style={{ padding: 10, alignSelf: "center" }}>
                    <View style={{ alignSelf: "center" }}>
                      <IconFilesup1 />
                    </View>
                    <View style={{ marginTop: 5 }}>
                      <Text style={TextCSS.Text14black_MitrRegular}>
                        {"เอกสาร"}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* {this.rendercomponentdiscount()} */}
          </View>
        </RBSheet>
      </Root>
    );
  }

  /// render page///////
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = (state) => ({
  LoadingCounters: state.globalReducer.LoadingCounters,
  authData: state.authReducer.authData,
  getUser: state.userReducer.getUser,
  getStatus1: state.dataReducer.getStatus,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeActivityFrom6Attachment);

/////
