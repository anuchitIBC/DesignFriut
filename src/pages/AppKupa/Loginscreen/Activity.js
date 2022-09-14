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
import {
  Getactivefrom,
  getdatacontry,
  updateProfileNiti,
  updateProfileNatural,
  getDataBusiness,
  GetParticipantInfoincountry,
} from "../../../actions/data.actions";
import I18n from "../../../utils/I18n";
import LinearGradient from "react-native-linear-gradient";
import { COLORbg, COLORrgb, COLORSFont } from "../../../css/AllColor";
import ParallaxScrollView from "../../../lib_edit/react-native-parallax-scroll-view";
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

const height = Dimensions.get("window").height;
const { width } = Dimensions.get("window");
// const AVATAR_SIZE = 120;
// const ROW_HEIGHT = 60;
// const PARALLAX_HEADER_HEIGHT = 30;

class TradeActivityFrom1Profiles extends React.Component {
  constructor(props) {
    const getDate = new Date();
    super(props);
    this.state = {
      refreshing: false,
      parallaxHeight: 220,
      parallaxstickyHeight: 80,
      parallaxHeightandroid: 250,
      Select: [],
      hidetitle: false,
      CK_scrollEnabled: true,
      //////////////////////data profiles///////
      FormDatatype1contact: [],
      FormDataProfiles: [],
      FormDatatype1addnress: [],

      SendDataFromProfiles: [],
      // Dataprovice: [],
      Datadistricts: [],
      Datasubdistrictss: [],
      ShowDatabusiness: [],
      // NewDatadistricts:[],
      clarnames: false,
      clarnamesnameSubDistricts: false,
      togleprovincecode: null,
      togleDistrictscode: null,
      togleSubDistrictscode: null,
      togleCountryId: null,
      togleTitleNameId: null,
      nameSubDistricts: "",
      nameprovinces: "",
      nameDistricts: "",
      nameCountry: "",
      nameTitlename: "",
      selectcheckdistricts: false,
      ////////// open check ////////
      openDistricts: true,
      openSubDistricts: true,
      dataProfiles: [],
    };
  }

  //////////////// zone function /////////////////////
  componentDidUpdate() {
    console.log("{}{}{}{}");

    // this.ref.
  }

  componentDidMount() {
    const { FORMTYPE } = this.props.route.params;
    //  console.log(PID,TYPE ,ACTIVITICODE,IDCARD,TOKEN)
    this.getFromProfiles();
    this._getDataBusiness();
    if (FORMTYPE === 2) {
      this._GetParticipantInfoincountry();
    }
  }
  // only form type 2
  _GetParticipantInfoincountry = async (value) => {
    // alert('fuckkkk')
    try {
      const {
        PID,
        TYPE,
        ACTIVITICODE,
        IDCARD,
        TOKEN,
      } = this.props.route.params;

      const payload = {
        result: {
          pid: PID,
          formtype: IDCARD,
          activity_code: ACTIVITICODE,
        },
        token: TOKEN,
      };
      const response = await this.props.dispatch(
        GetParticipantInfoincountry(payload)
      );
      console.log(response);
      if (response.res_text === "success") {
      }
    } catch (error) {
      console.log(error);
    }
  };

  getFromProfiles = async (value) => {
    try {
      const {
        PID,
        TYPE,
        ACTIVITICODE,
        IDCARD,
        TOKEN,
      } = this.props.route.params;

      const payload = {
        result: {
          pid: PID,
          type: TYPE,
          member_cid: IDCARD,
          case: 1,
          activity_code: ACTIVITICODE,
        },
        token: TOKEN,
      };
      // alert(JSON.stringify(payload))
      const response = await this.props.dispatch(Getactivefrom(payload));

      // console.log("responseMMMMMMMMMMMMM");
      // console.log(JSON.stringify(response.result[1].Items));

      if (response.res_code === "00") {
        this.setState({
          FormDataProfiles: response.result[0].Items,
          FormDatatype1addnress: response.result[1].Items,
          FormDatatype1contact: response.result[2].Items,
          dataProfiles: response.result,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  UpdateFromProfiles = async (value) => {
    try {
      const {
        FormDataProfiles,
        FormDatatype1addnress,
        FormDatatype1contact,
        AddressTH,
        AddressEn,
        PostCode,
        togleTitleNameId,
        togleprovincecode,
        togleDistrictscode,
        togleSubDistrictscode,
        togleCountryId,
        Tel,
        Fax,
        email,
        Website,
        FirstNameTh,
        FirstNameEn,
        LastNameEn,
        LastNameTh,
      } = this.state;
      const {
        PID,
        TYPE,
        ACTIVITICODE,
        IDCARD,
        TOKEN,
      } = this.props.route.params;

      console.log(togleTitleNameId);

      if (TYPE === 1 || TYPE === 2) {
        // alert(JSON.stringify(this.state.FormDatatype1addnress[2].DataID))

        const payload = {
          results: {
            activity_code: ACTIVITICODE,
            pid: PID,
            type: this.props.getUser.userDetails.res_result.type,
            ditpMemberType: FormDataProfiles[0].Data,
            ditpMeberNo: FormDataProfiles[1].Data,
            taxNo: FormDataProfiles[2].Data,
            companyNameTH: FormDataProfiles[3].Data,
            companyNameEN: FormDataProfiles[4].Data,
            addressTh:
              AddressTH === undefined
                ? FormDatatype1addnress[0].Data
                : AddressTH,
            addressEn:
              AddressEn === undefined
                ? FormDatatype1addnress[1].Data
                : AddressEn,
            provinceCode:
              togleprovincecode === null
                ? FormDatatype1addnress[2].ID.toString()
                : togleprovincecode,

            districtCode:
              togleDistrictscode === null
                ? FormDatatype1addnress[3].ID.toString()
                : togleDistrictscode,

            subDistrictCode:
              togleSubDistrictscode === null
                ? FormDatatype1addnress[4].ID.toString()
                : togleSubDistrictscode,

            postCode:
              PostCode === undefined
                ? FormDatatype1addnress[5].Data.toString()
                : PostCode,

            countryId:
              togleCountryId === undefined
                ? FormDatatype1addnress[6].ID.toString()
                : togleCountryId,

            cityId: "-",
            tel: Tel === undefined ? FormDatatype1contact[0].Data : Tel,
            fax: Fax === undefined ? FormDatatype1contact[1].Data : Fax,
            email: email === undefined ? FormDatatype1contact[2].Data : email,
            website:
              Website === undefined ? FormDatatype1contact[3].Data : Website,
            member_id: IDCARD,
            updateByUser: IDCARD,
          },
          token: TOKEN,
        };
        const response = await this.props.dispatch(updateProfileNiti(payload));
        console.log("จะแตกมั้ย");
        console.log(response);

        if (response.result.success === true) {
          // setTimeout(() => {
          //   Toast.show({
          //     title: I18n.locale === "th" ? "แก้ไขเรียบร้อย" : "Sucess",
          //     text: "",
          //     color: COLORSFont.greenon,
          //   });
          // }, 200);

          this.getFromProfiles();
        } else {
          // Toast.show({
          //   title: I18n.locale === "th" ? "แก้ไขไม่สำเร็จ" : "Failed to edit",
          //   text: "",
          //   color: COLORSFont.red,
          // });
        }
      } else {
        const payload = {
          results: {
            activity_code: ACTIVITICODE,
            pid: PID,
            type: TYPE,
            member_cid: IDCARD,
            titleNameId:
              togleTitleNameId === null
                ? FormDataProfiles[1].Data
                : togleTitleNameId,

            firstNameTh:
              FirstNameTh === undefined
                ? FormDataProfiles[2].Data
                : FirstNameTh,
            firstNameEn:
              FirstNameEn === undefined
                ? FormDataProfiles[3].Data
                : FirstNameEn,
            lastNameTh:
              LastNameTh === undefined ? FormDataProfiles[4].Data : LastNameTh,
            lastNameEn:
              LastNameEn === undefined ? FormDataProfiles[5].Data : LastNameEn,
            addressTh:
              AddressTH === undefined
                ? FormDatatype1addnress[0].Data
                : AddressTH,
            addressEn:
              AddressEn === undefined
                ? FormDatatype1addnress[1].Data
                : AddressEn,
            provinceCode:
              togleprovincecode === null
                ? FormDatatype1addnress[2].ID.toString()
                : togleprovincecode,

            districtCode:
              togleDistrictscode === null
                ? FormDatatype1addnress[3].ID.toString()
                : togleDistrictscode,

            subDistrictCode:
              togleSubDistrictscode === null
                ? FormDatatype1addnress[4].ID.toString()
                : togleSubDistrictscode,

            postCode:
              PostCode === undefined
                ? FormDatatype1addnress[5].Data.toString()
                : PostCode,

            countryId:
              togleCountryId === undefined
                ? FormDatatype1addnress[6].ID.toString()
                : togleCountryId,

            cityId: "-",
            tel: Tel === undefined ? FormDatatype1contact[0].Data : Tel,
            fax: Fax === undefined ? FormDatatype1contact[1].Data : Fax,
            email: email === undefined ? FormDatatype1contact[2].Data : email,
            website:
              Website === undefined ? FormDatatype1contact[3].Data : Website,
            member_id: IDCARD,
            updateByUser: IDCARD,
          },
          token: TOKEN,
        };

        console.log("GGG" + JSON.stringify(payload));

        const response = await this.props.dispatch(
          updateProfileNatural(payload)
        );
        console.log("จะแตกมั้ยtype3");
        console.log(response);

        if (response.result.success === true) {
          // Toast.show({
          //   title: I18n.locale === "th" ? "แก้ไขเรียบร้อย" : "Sucess",
          //   text: "",
          //   color: COLORSFont.greenon,
          // });
          this.getFromProfiles();
        } else {
          // Toast.show({
          //   title: I18n.locale === "th" ? "แก้ไขไม่สำเร็จ" : "Failed to edit",
          //   text: "",
          //   color: COLORSFont.red,
          // });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  _getDataBusiness = async (value) => {
    try {
      const { authData } = this.props;
      const token = authData.token;
      const {
        PID,
        TYPE,
        ACTIVITICODE,
        IDCARD,
        TOKEN,
      } = this.props.route.params;
      // console.log(PID, ACTIVITICODE);

      const payload = {
        result: {
          pid: PID,
        },
        token: token,
      };
      const response = await this.props.dispatch(getDataBusiness(payload));

      if (response.res_code === "00") {
        console.log(
          "result===>??",
          JSON.stringify(response.result[0].Items[1].Label)
        );

        this.setState({
          ShowDatabusiness: response.result[0].Items[0].Data,
          textbusinessLabel: response.result[0].Items[0].Label,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //////////////// zone function /////////////////////

  SelecOnOff = ({ index, item }) => {
    let { Select } = this.state;
    Select[index] = !Select[index];
    this.setState({ Select: Select });
    if (Select[index] === true) {
      console.log("S");
      this.setState({
        parallaxHeight: 600,
        parallaxHeightandroid: 580,
        // parallaxstickyHeight:400,
        hidetitle: true,
        CK_scrollEnabled: false,
      });
    } else {
      console.log("D");
      this.setState({
        parallaxHeight: 220,
        parallaxHeightandroid: 250,
        parallaxstickyHeight: 80,
        hidetitle: false,
        CK_scrollEnabled: true,
      });
    }
  };

  _onRefresh() {
    this.setState({ refreshing: true });
    // fetchData().then(() => {
    //   this.setState({refreshing: false});
    // });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
    // wait(2000).then(() => {
    //   this.setState({ refreshing: false });
    // });
  }

  FilterDistrict = (index, item, cknull) => {
    var res = DataDistricts.filter(
      ({ ProvinceCode }) => ProvinceCode === index.toString()
    );
    // console.log("DataDistricts;;;===>", res);
    this.setState({ Datadistricts: res });
    this.setState({
      togleDistrictscode: index,
      nameDistricts:
        cknull === 0
          ? I18n.locale === "th"
            ? item.Data
            : item.provinceEN
          : "",
      openSubDistricts: false,
      clarnamesnameSubDistricts: true,
      nameSubDistricts: "",
      // nameprovinces: "",
      nameDistricts: "",
    });
    // this.modelDistricts.close();

    // return res
  };

  FilterSubDistrict = (index, item, cknull) => {
    var res = Datasubdistricts.filter(
      ({ DistrictCode }) => DistrictCode === index.toString()
    );
    console.log("Datasub=========index===>", cknull);
    // console.log("Datasub=========districts;;;===>", res);

    this.setState({
      togleDistrictscode: index,
      nameSubDistricts:
        cknull === 0
          ? I18n.locale === "th"
            ? item.Data
            : item.provinceEN
          : "",
      clarnamesnameSubDistricts: true,
      openSubDistricts: false,
    });
    this.setState({ Datasubdistrictss: res });
    // this.modelDistricts.close();

    // return res
  };

  Selecitprovince = ({ index, item }) => {
    console.log("SelecitprovinceDDDDD" + index);

    // this.getdata_district();
    this.setState({
      togleprovincecode: index,
      nameprovinces: I18n.locale === "th" ? item.Data : item.provinceEN,
      openDistricts: false,
      clarnames: true,
      clarnamesnameSubDistricts: true,
      Datasubdistrictss: [],
      // nameDistricts: "",
    });
    this.FilterDistrict(index, item, 1);
    // this.modelProvince.close();
  };

  SelecitDistricts = ({ index, item }) => {
    console.log("SelecitDistricts" + JSON.stringify(item));
    this.FilterSubDistrict(index, item, 1);

    this.setState({
      togleDistrictscode: index,
      nameDistricts: I18n.locale === "th" ? item.Data : item.provinceEN,
      openSubDistricts: false,
      clarnames: true,
    });
    // this.modelDistricts.close();
  };

  SelecitSubDistricts = ({ index, item }) => {
    console.log("SelecitSubDistricts" + JSON.stringify(item));

    this.setState({
      togleSubDistrictscode: index,
      nameSubDistricts: I18n.locale === "th" ? item.Data : item.provinceEN,
      // openSubDistricts: false,
    });
    // this.modelSubDistricts.close();
  };

  SelectCountry = ({ index, item }) => {
    this.setState({
      togleCountryId: index,
      nameCountry: I18n.locale === "th" ? item.Data : item.provinceEN,
    });
  };

  SelectTitlename = ({ index, item }) => {
    this.setState({
      togleTitleNameId: index,
      nameTitlename: I18n.locale === "th" ? item.Data : item.provinceEN,
    });
  };

  //////////////// zone function /////////////////////

  //////////////// zone components จังหวัด /////////////////////
  rendercomponentprovince() {
    return (
      <View style={{ marginBottom: 50 }}>
        <Text style={[Styless.texttitlemodel1]}>
          {I18n.locale === "th" ? "เลือกจังหวัด" : "Select Province"}
        </Text>
        <View style={Styless.lineinmodel} />
        <ScrollView style={{ marginBottom: 30, marginHorizontal: 20 }}>
          {DataProvices.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.Selecitprovince({
                    item:
                      I18n.locale === "th"
                        ? { Data: data.ProvinceNameTh }
                        : { provinceEN: data.ProvinceNameEn },
                    index: data.ProvinceCode,
                  });
                }}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderColor: COLORSFont.borderGray1,
                  margin: 5,
                  padding: 8,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      this.state.togleprovincecode === data.ProvinceCode
                        ? Styless.textck
                        : Styless.textnock
                    }
                  >
                    {I18n.locale === "th"
                      ? data.ProvinceNameTh
                      : data.ProvinceNameEn}
                  </Text>
                </View>
                <View>
                  {this.state.togleprovincecode === data.ProvinceCode ? (
                    <IconchooseMonth />
                  ) : (
                    <></>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  rendercomponentDistricts() {
    return (
      <View style={{ marginBottom: 50 }}>
        <Text style={[Styless.texttitlemodel1]}>
          {I18n.locale === "th" ? "เลือกอำเภอ" : "Select Districts"}
        </Text>
        <View style={Styless.lineinmodel} />
        <ScrollView style={{ marginBottom: 30, marginHorizontal: 20 }}>
          {this.state.Datadistricts.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.SelecitDistricts({
                    item:
                      I18n.locale === "th"
                        ? { Data: data.DistrictNameTh }
                        : { provinceEN: data.DistrictNameEn },

                    index: data.DistrictCode,
                  });
                }}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderColor: COLORSFont.borderGray1,
                  margin: 5,
                  padding: 8,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      this.state.togleDistrictscode === data.DistrictCode
                        ? Styless.textck
                        : Styless.textnock
                    }
                  >
                    {I18n.locale === "th"
                      ? data.DistrictNameTh
                      : data.DistrictNameEn}
                  </Text>
                </View>
                <View>
                  {this.state.togleDistrictscode === data.DistrictCode ? (
                    <IconchooseMonth />
                  ) : (
                    <></>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  rendercomponentSubDistricts() {
    // const { Datasubdistrictss } = this.state;
    // console.log("Datadistricts", JSON.stringify(Datadistricts));
    return (
      <View style={{ marginBottom: 50 }}>
        <Text style={[Styless.texttitlemodel1]}>
          {I18n.locale === "th" ? "เลือกตำบล" : "Select SubDistricts"}
        </Text>
        <View style={Styless.lineinmodel} />
        <ScrollView style={{ marginBottom: 30, marginHorizontal: 20 }}>
          {this.state.Datasubdistrictss.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.SelecitSubDistricts({
                    item:
                      I18n.locale === "th"
                        ? { Data: data.SubDistrictNameTh }
                        : { provinceEN: data.SubDistrictNameTh },
                    index: data.SubDistrictCode,
                  });
                }}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderColor: COLORSFont.borderGray1,
                  margin: 5,
                  padding: 8,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      this.state.togleSubDistrictscode === data.SubDistrictCode
                        ? Styless.textck
                        : Styless.textnock
                    }
                  >
                    {I18n.locale === "th"
                      ? data.SubDistrictNameTh
                      : data.SubDistrictNameTh}
                  </Text>
                </View>
                <View>
                  {this.state.togleSubDistrictscode === data.SubDistrictCode ? (
                    <IconchooseMonth />
                  ) : (
                    <></>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  rendercomponentCountry() {
    return (
      <View style={{ marginBottom: 50 }}>
        <Text style={[Styless.texttitlemodel1]}>
          {I18n.locale === "th" ? "เลือกประเทศ" : "Select SubDistricts"}
        </Text>
        <View style={Styless.lineinmodel} />
        <ScrollView style={{ marginBottom: 30, marginHorizontal: 20 }}>
          {DataCountry.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.SelectCountry({
                    item:
                      I18n.locale === "th"
                        ? { Data: data.CountryNameTh }
                        : { provinceEN: data.CountryNameEn },
                    index: data.CountryId,
                  });
                }}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderColor: COLORSFont.borderGray1,
                  margin: 5,
                  padding: 8,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      this.state.togleCountryId === data.CountryId
                        ? Styless.textck
                        : Styless.textnock
                    }
                  >
                    {I18n.locale === "th"
                      ? data.CountryNameTh
                      : data.CountryNameEn}
                  </Text>
                </View>
                <View>
                  {this.state.togleCountryId === data.CountryId ? (
                    <IconchooseMonth />
                  ) : (
                    <></>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  rendercomponentTitlename() {
    return (
      <View style={{ marginBottom: 50 }}>
        <Text style={[Styless.texttitlemodel1]}>
          {I18n.locale === "th" ? "เลือกคำนำหน้าชื่อ" : "Select Title name"}
        </Text>
        <View style={Styless.lineinmodel} />
        <ScrollView style={{ marginBottom: 30, marginHorizontal: 20 }}>
          {DataTitlename.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.SelectTitlename({
                    item:
                      I18n.locale === "th"
                        ? { Data: data.TitelNameTh }
                        : { provinceEN: data.TitleNameEn },
                    index: data.TitleNameId,
                  });
                }}
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderColor: COLORSFont.borderGray1,
                  margin: 5,
                  padding: 8,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      this.state.togleTitleNameId === data.TitleNameId
                        ? Styless.textck
                        : Styless.textnock
                    }
                  >
                    {I18n.locale === "th" ? data.TitelNameTh : data.TitleNameEn}
                  </Text>
                </View>
                <View>
                  {this.state.togleTitleNameId === data.TitleNameId ? (
                    <IconchooseMonth />
                  ) : (
                    <></>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  //////////////// zone components แก้ไข ข้อมูลส่วนตัว /////////////////////

  renderFromEdit() {
    const { PID, TYPE, ACTIVITICODE, IDCARD, TOKEN } = this.props.route.params;
    const {
      FormDataProfiles,
      FormDatatype1addnress,
      FormDatatype1contact,
      SendDataFromProfiles,

      selectcheckdistricts,
      togleprovincecode,
      clarnames,
      nameprovinces,
      nameDistricts,
      nameSubDistricts,
      clarnamesnameSubDistricts,
      nameCountry,
      nameTitlename,
    } = this.state;

    return (
      <ScrollView>
        <View style={{ marginHorizontal: 10 }}>
          {/* check ถ้าเป็น type1 หรือ 2 ก็เข้า loop */}
          {TYPE === 1 || TYPE === 2 ? (
            <View style={Styless.Vieweditfrom}>
              {/* FormDataProfiles คือ ข้อมูลส่วนตัว */}
              {FormDataProfiles.map((data, index) => {
                return (
                  <View
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    <Text style={Styless.texteditfrom}>{data.Label}</Text>

                    <View style={{}}>
                      <TextInput
                        onChangeText={(text) => {}}
                        editable={false}
                        style={Styless.textinputdisble}
                      >
                        {data.Data}
                      </TextInput>
                    </View>
                  </View>
                );
              })}
              {/* FormDatatype1addnress คือ ข้อมูลที่อยู่ */}
              {FormDatatype1addnress.map((data, index) => {
                return (
                  <View
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    {/* ที่อยู่ไทย */}
                    {index === 0 && (
                      <>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <View style={{}}>
                          <TextInput
                            onChangeText={(text) => {
                              this.setState({
                                AddressTH: text,
                              });
                            }}
                            style={Styless.textinput}
                          >
                            {data.Data}
                          </TextInput>
                        </View>
                      </>
                    )}

                    {/* ที่อยู่อังกฤษ */}
                    {index === 1 && (
                      <>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <View style={{}}>
                          <TextInput
                            onChangeText={(text) => {
                              this.setState({
                                AddressEn: text,
                              });
                            }}
                            style={Styless.textinput}
                          >
                            {data.Data}
                          </TextInput>
                        </View>
                      </>
                    )}

                    {/* จังหวัด */}
                    {index === 2 && (
                      <View>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <TouchableOpacity
                          onPress={() => {
                            this.modelProvince.open();
                          }}
                          style={Styless.viewcombobox}
                        >
                          <View style={{ flex: 1 }}>
                            <Text style={Styless.textincombobox}>
                              {nameprovinces === "" ? data.Data : nameprovinces}
                            </Text>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Icon0
                              style={{}}
                              name={"chevron-down"}
                              size={16}
                              color={COLORSFont.textblack}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                    {/* อำเภอ */}
                    {index === 3 && (
                      <View>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <TouchableOpacity
                          onPress={() => {
                            if (this.state.openDistricts === true) {
                              this.FilterDistrict(
                                FormDatatype1addnress[2].ID,
                                FormDatatype1addnress[2].Data,
                                0
                              );
                            }

                            setTimeout(() => {
                              this.modelDistricts.open();
                            }, 200);
                          }}
                          style={Styless.viewcombobox}
                        >
                          <View style={{ flex: 1 }}>
                            <Text style={Styless.textincombobox}>
                              {clarnames === true ? nameDistricts : data.Data}
                            </Text>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Icon0
                              style={{}}
                              name={"chevron-down"}
                              size={16}
                              color={COLORSFont.textblack}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                    {/* ตำบล */}
                    {index === 4 && (
                      <View>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <TouchableOpacity
                          onPress={() => {
                            if (this.state.openSubDistricts === true) {
                              this.FilterSubDistrict(
                                FormDatatype1addnress[3].ID,
                                FormDatatype1addnress[3].Data,
                                0
                              );
                            }
                            setTimeout(() => {
                              this.modelSubDistricts.open();
                            }, 200);
                          }}
                          style={Styless.viewcombobox}
                        >
                          <View style={{ flex: 1 }}>
                            <Text style={Styless.textincombobox}>
                              {clarnamesnameSubDistricts === true
                                ? nameSubDistricts
                                : data.Data}
                            </Text>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Icon0
                              style={{}}
                              name={"chevron-down"}
                              size={16}
                              color={COLORSFont.textblack}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                    {/* รหัสไปรษณีย์ */}
                    {index === 5 && (
                      <>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <View style={{}}>
                          <TextInput
                            onChangeText={(text) => {
                              this.setState({
                                PostCode: text,
                              });
                            }}
                            style={Styless.textinput}
                          >
                            {data.Data}
                          </TextInput>
                        </View>
                      </>
                    )}
                    {/* ประเทศไทย */}
                    {index === 6 && (
                      <View>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <TouchableOpacity
                          onPress={() => {
                            setTimeout(() => {
                              this.modelCountry.open();
                            }, 200);
                          }}
                          style={Styless.viewcombobox}
                        >
                          <View style={{ flex: 1 }}>
                            <Text style={Styless.textincombobox}>
                              {nameCountry === "" ? data.Data : nameCountry}
                            </Text>
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Icon0
                              style={{}}
                              name={"chevron-down"}
                              size={16}
                              color={COLORSFont.textblack}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                );
              })}

              {/* FormDatatype1contact คือ ข้อมูลทติดต่อ */}
              {FormDatatype1contact.map((data, index) => {
                return (
                  <View
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    {index === 0 && (
                      <>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <View style={{}}>
                          <TextInput
                            onChangeText={(text) => {
                              this.setState({
                                Tel: text,
                              });
                            }}
                            style={Styless.textinput}
                          >
                            {data.Data}
                          </TextInput>
                        </View>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <View style={{}}>
                          <TextInput
                            onChangeText={(text) => {
                              this.setState({
                                Fax: text,
                              });
                            }}
                            style={Styless.textinput}
                          >
                            {data.Data}
                          </TextInput>
                        </View>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <View style={{}}>
                          <TextInput
                            onChangeText={(text) => {
                              this.setState({
                                email: text,
                              });
                            }}
                            style={Styless.textinput}
                          >
                            {data.Data}
                          </TextInput>
                        </View>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <Text style={Styless.texteditfrom}>{data.Label}</Text>

                        <View style={{}}>
                          <TextInput
                            onChangeText={(text) => {
                              this.setState({
                                Website: text,
                              });
                            }}
                            style={Styless.textinput}
                          >
                            {data.Data}
                          </TextInput>
                        </View>
                      </>
                    )}
                  </View>
                );
              })}
            </View>
          ) : (
            // type 3 4 5
            <></>
          )}

          <TouchableOpacity
            onPress={() => {
              this.UpdateFromProfiles();
              this.RBSheet.close();
            }}
            style={Styless.btnsave}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={Styless.textsave}>{"บันทึก"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={(ref) => {
            this.modelProvince = ref;
          }}
          height={490}
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
            {this.rendercomponentprovince()}
          </View>
        </RBSheet>
        <RBSheet
          ref={(ref) => {
            this.modelDistricts = ref;
          }}
          height={490}
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
            {this.rendercomponentDistricts()}
          </View>
        </RBSheet>
        <RBSheet
          ref={(ref) => {
            this.modelSubDistricts = ref;
          }}
          height={490}
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
            {this.rendercomponentSubDistricts()}
          </View>
        </RBSheet>
        <RBSheet
          ref={(ref) => {
            this.modelCountry = ref;
          }}
          height={490}
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
            {this.rendercomponentCountry()}
          </View>
        </RBSheet>
        <RBSheet
          ref={(ref) => {
            this.modelTitlename = ref;
          }}
          height={300}
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
            {this.rendercomponentTitlename()}
          </View>
        </RBSheet>
      </ScrollView>
    );
  }
  //////////////// zone components /////////////////////
  /// render page///////
  render() {
    // this.props.navigation.navigate

    const {
      Dataitem,
      PID,
      TYPE,
      ACTIVITICODE,
      IDCARD,
      TOKEN,
      FORMTYPE,
    } = this.props.route.params;

    const {
      FormDataProfiles,
      FormDatatype1addnress,
      FormDatatype1contact,
      ShowDatabusiness,
      dataProfiles,
    } = this.state;
    const { onScroll = () => {} } = this.props;

    return (
      <Root>
        <View style={Styles.ViewSub1}>
          {/* FROM EDIT ฟอมแก้ไข ข้อมูลส่วนตัว */}
          <RBSheet
            keyboardAvoidingViewEnabled={true}
            animationType={"slide"}
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            height={height}
            openDuration={250}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },

              container: {},
            }}
          >
            <View
              style={{
                overflow: "hidden",
                marginTop: Platform.OS === "android" ? -20 : 0,
              }}
            >
              <Header
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                  colors: [COLORbg.LinearGradient1, COLORbg.LinearGradient2],
                  start: { x: 0, y: 1 },
                  end: { x: 1, y: 1 },
                }}
                leftComponent={<></>}
                centerComponent={
                  <View style={{}}>
                    <Text style={Styless.textedittitle}>
                      {"แก้ไขข้อมูลนิติบุคคล"}
                    </Text>
                  </View>
                }
                rightComponent={
                  <TouchableOpacity
                    onPress={() => {
                      this.RBSheet.close();
                      this.setState({ provinces: "", togleprovince: [] });
                    }}
                    style={{ padding: 15 }}
                  >
                    <Iconclose />
                  </TouchableOpacity>
                }
              />
            </View>
            <KeyboardAvoidingView
              behavior={"padding"}
              style={{ flex: 1, zIndex: -1 }}
            >
              {this.renderFromEdit()}
            </KeyboardAvoidingView>
          </RBSheet>

          {/* FROM EDIT ฟอมแก้ไข ข้อมูลส่วนตัว */}

          {/* <Headers
            navigation={this.props.navigation}
            backScreen={false}
            title={
              I18n.locale === "th"
                ? this.props.getUser.userDetails.res_result.type === 1 ||
                  this.props.getUser.userDetails.res_result.type === 2
                  ? "สมัครร่วมกิจกรรม (นิติบุคคล)"
                  : "สมัครร่วมกิจกรรม (บุคคลทั่วไป)"
                : "Apply for the event"
            }
          /> */}

          <ScrollView   ref={(ref) => {
            this.ListViewscrollTo = ref;
          }} style={styles.container}>
            <ParallaxScrollView
              onScroll={onScroll}
              headerBackgroundColor="#333"
              stickyHeaderHeight={STICKY_HEADER_HEIGHT}
              parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
              backgroundSpeed={10}
              renderBackground={() => (
                <View key="background">
                  <Image
                    source={{
                      uri:
                        "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg",
                      width: window.width,
                      height: PARALLAX_HEADER_HEIGHT,
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      width: window.width,
                      backgroundColor: "rgba(0,0,0,.4)",
                      height: PARALLAX_HEADER_HEIGHT,
                    }}
                  />
                </View>
              )}
              renderForeground={() => (
                <View key="parallax-header" style={styles.parallaxHeader}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri:
                        "https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg",
                      width: AVATAR_SIZE,
                      height: AVATAR_SIZE,
                    }}
                  />
                  <Text style={styles.sectionSpeakerText}>
                    Talks by Rich Hickey
                  </Text>
                  <Text style={styles.sectionTitleText}>
                    CTO of Cognitec, Creator of Clojure
                  </Text>
                  <View key="fixed-header" style={styles.fixedSection}>
            
                     <Text style={styles.sectionTitleText}
                    onPress={() => this.ListViewscrollTo.scrollTo({ x: 0, y: 0 })}
                  >
                    Scroll to top
                  </Text>
                </View>
                </View>
              )}
              renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                  <Text style={styles.stickySectionText}>
                    Rich Hickey Talks
                  </Text>
                </View>
              )}
              renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <Text
                    style={styles.fixedSectionText}
                    onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}
                  >
                    Scroll to top
                  </Text>
                </View>
              )}
            />
          </ScrollView>
        </View>
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
)(TradeActivityFrom1Profiles);

/////

const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
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
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: "flex-end",
  },
  stickySectionText: {
    color: "white",
    fontSize: 20,
    margin: 10,
  },
  fixedSection: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    paddingTop: 100,
  },
  avatar: {
    marginBottom: 10,
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
