<View style={{ padding: 10 }}>
<Text
  style={[
    TextCSS.Text14black_MitrRegular,
    { marginBottom: 15 },
  ]}
>
  {"มูลค่าการสั่งซื้อ"}
</Text>
<View
  style={{
    height: 41,
    // borderWidth: 0.7,
    flexDirection: "row",
    // borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
    // borderColor:COLORSFont.white
  }}
>
  <View
    style={{
      justifyContent: "center",
      flex: 0.4,
      borderRightWidth: 0.7,
      backgroundColor: COLORSFont.Primary500,
      borderColor: COLORSFont.white,
    }}
  >
    <Text
      style={[
        TextCSS.Text12white_MitrLight,
        { textAlign: "center" },
      ]}
    >
      {"ลำดับ"}
    </Text>
  </View>
  <View
    style={{
      justifyContent: "center",
      flex: 0.8,
      borderRightWidth: 0.7,
      backgroundColor: COLORSFont.Primary500,
      borderColor: COLORSFont.white,
    }}
  >
    <Text
      style={[
        TextCSS.Text12white_MitrLight,
        { textAlign: "center" },
      ]}
    >
      {"สินค้า"}
    </Text>
  </View>
  <View
    style={{
      justifyContent: "center",
      flex: 0.8,
      borderRightWidth: 0.7,
      backgroundColor: COLORSFont.Primary500,
      borderColor: COLORSFont.white,
    }}
  >
    <Text
      style={[
        TextCSS.Text12white_MitrLight,
        { textAlign: "center" },
      ]}
    >
      {"สั่งซื้อทันที(USD)"}
    </Text>
  </View>
  <View
    style={{
      justifyContent: "center",
      flex: 1,
      backgroundColor: COLORSFont.Primary500,
      borderColor: COLORSFont.white,
    }}
  >
    <Text
      style={[
        TextCSS.Text12white_MitrLight,
        { textAlign: "center" },
      ]}
    >
      {"คาดว่าจะสั่งซื้อ\nภายใน 1 ปี (USD)"}
    </Text>
  </View>
</View>
{/* ////////////// roww2 //// */}
<View
  style={{
    height: 45,
    // borderWidth: 0.7,
    flexDirection: "row",
    // borderRadius: 8,

    overflow: "hidden",
    // borderColor:COLORSFont.white
  }}
>
  <View
    style={{
      justifyContent: "center",
      flex: 0.4,
      borderRightWidth: 0.7,
      backgroundColor: "#EBF3F7",
      borderColor: COLORSFont.white,
    }}
  >
    <Text
      style={[
        TextCSS.Text12black_MitrRegular,
        { textAlign: "center" },
      ]}
    >
      {"1"}
    </Text>
  </View>
  <View
    style={{
      justifyContent: "center",
      flex: 0.8,
      borderRightWidth: 0.7,
      backgroundColor: "#EBF3F7",
      borderColor: COLORSFont.white,
    }}
  >
    <Text
      style={[
        TextCSS.Text12black_MitrRegular,
        { textAlign: "center" },
      ]}
    >
      {"ข้าวสาลี"}
    </Text>
  </View>
  <View
    style={{
      justifyContent: "center",
      flex: 0.8,
      borderRightWidth: 0.7,
      backgroundColor: "#EBF3F7",
      borderColor: COLORSFont.white,
    }}
  >
    <View style={{ height: 41, justifyContent: "center" }}>
      <TextInput
        onChangeText={(text) => {
          this.setState({
            // AddressTH: text,
          });
        }}
        style={{
          borderWidth: 0.7,
          backgroundColor: "#FFF",
          padding: 5,
          marginHorizontal: 5,
          borderRadius:8,
          fontFamily:FONTFAMILY_.MitrMedium,
          textAlign:"right",
          borderColor:COLORSFont.textgray
          
          
        }}
      >
        {/* {data.Data} */}
      </TextInput>
    </View>
  </View>
  <View
    style={{
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#EBF3F7",
      borderColor: COLORSFont.white,
    }}
  >
      <View style={{ height: 41, justifyContent: "center" }}>
      <TextInput
        onChangeText={(text) => {
          this.setState({
            // AddressTH: text,
          });
        }}
        style={{
          borderWidth: 0.7,
          backgroundColor: "#FFF",
          padding: 5,
          marginHorizontal: 5,
          borderRadius:8,
          fontFamily:FONTFAMILY_.MitrMedium,
          textAlign:"center",
          borderColor:COLORSFont.textgray
          
          
        }}
        placeholder={'จำนวนเงิน'}
      >
        {/* {data.Data} */}
      </TextInput>
    </View>
  </View>
</View>
</View>