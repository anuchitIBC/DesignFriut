<View onPress={() => {}} style={{}}>
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

        {/* {data.status_name === "ทำแบบประเมิน" && ( */}
        {item.formTypeActivity === 1 ?( 
          <View
            style={{
              justifyContent: "center",
              // borderWidth:1,
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
                  <Text style={TextCSS.Text14white_MitrLight}>
                    {"ประเมิน"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          ):( <View
            style={{
              justifyContent: "center",
              // borderWidth:1,
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
                _getFormsSurveyTrande(
                  item,
                  this.props.dispatch,
                  navigation,
                  this.props.getUser.userDetails.res_result.naturalId,
                  this.props.authData.token,



                );
                // alert(item.id_list)
                // _getFormsSurvey
                // navigation.navigate("SurveyForm1imgDevnew", {
                //   Dataitem: item,
                // });
              }}
              style={{
                width: "80%",

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
                  <Text style={TextCSS.Text14white_MitrLight}>
                    {"ประเมินกิจกรรมต่างประเทศ"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>)}
        {/* )} */}
      </>
    ) : (
      <View style={{ height: 0 }} />
    )}
  </>
  );
})}
</View>



if (_DatatoHistory.res_code === "00") {
  // console.log(
  //   'result.not_active' + JSON.stringify(_DatatoHistory.result.not_active),
  // );
  this.setState({
    ActivityAccept: _DatatoHistory.active,
    ActivityYear: _DatatoHistory.not_active,
  });

  //นับจำนวน รอยื่นใบสมัคร
  _DatatoHistory.active.map((data, index) => {
    if (data.participate_status_code === "0") {
      this.state.Activityregisterlength.push(data);
    }
  });

  // นับจำจวนอยู่ระหว่างการสมัครกิจกกรม

  _DatatoHistory.active.map((data, index) => {
    if (data.participate_status_code !== "0") {
      this.state.Activityprocesslength.push(data);
    }
  });

  _DatatoHistory.not_active[2022].map((data, index) => {
    if (data.participate_status_code === "3") {
      this.state.ActivityYear2022length.push(data);
    }
  });

  _DatatoHistory.not_active[2021].map((data, index) => {
    if (data.participate_status_code === "3") {
      this.state.ActivityYear2021length.push(data);
    }
  });

  _DatatoHistory.not_active[2020].map((data, index) => {
    if (data.participate_status_code === "3") {
      this.state.ActivityYear2020length.push(data);
    }
  });

  _DatatoHistory.not_active[2019].map((data, index) => {
    if (data.participate_status_code === "3") {
      this.state.ActivityYear2019length.push(data);
    }
  });

  const Yearall = Object.keys(_DatatoHistory.not_active);

  const Year1 = parseInt(Yearall[0]);
  const Year2 = parseInt(Yearall[1]);
  const Year3 = parseInt(Yearall[2]);
  const Year4 = parseInt(Yearall[3]);

  // console.log("Year1", Year1);
  this.setState({ year1: Year1 });
  this.setState({ year2: Year2 });
  this.setState({ year3: Year3 });
  this.setState({ year4: Year4 });
}