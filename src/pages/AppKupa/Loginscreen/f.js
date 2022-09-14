{index === 0 && (
    <View style={{}}>
      {DataQ1.subQuestion.map((DataQ2, index) => {
        return (
          <View style={{ padding: 10 }}>
            <Text
              style={[
                TextCSS.Text14black_MitrRegular,
                { marginBottom: 15 },
              ]}
            >
              {DataQ2.questionSubject}
            </Text>

            <View style={Stylessinin.VIEWHID}>
              {DataQ2.answer.map((dataanswer, index1) => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        this.SelectAnswer1({
                          item: dataanswer,
                          index: DataQ2.value_subject,
                          choice: dataanswer.value_answer,
                        });
                      }}
                      style={{
                        justifyContent: "center",
                        flex: 1,
                        borderRightWidth:
                          index1 === 0 ? 0.7 : 0,
                        backgroundColor:
                          checkboxSurvey2Type1 ===
                          dataanswer.value_answer
                            ? this.state.setcolor
                            : null,
                        borderColor: COLORSFont.textgray,
                      }}
                    >
                      <Text
                        style={[
                          checkboxSurvey2Type1 ===
                          dataanswer.value_answer
                            ? TextCSS.Text14white_MitrRegular
                            : TextCSS.Text14black_MitrLight,
                          ,
                          // textcolor
                          { textAlign: "center" },
                        ]}
                      >
                        {dataanswer.name_answer}
                      </Text>
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  )}

  {index === 1 && (
    <View style={{}}>
      {DataQ1.subQuestion.map((DataQ2, index) => {
        return (
          <View style={{ padding: 10 }}>
            <Text
              style={[
                TextCSS.Text14black_MitrRegular,
                { marginBottom: 15 },
              ]}
            >
              {DataQ2.questionSubject}
            </Text>

            <View style={Stylessinin.VIEWHID}>
              {DataQ2.answer.map((dataanswer, index1) => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        this.SelectAnswer2({
                          item: dataanswer,
                          index: DataQ2.value_subject,
                          choice: dataanswer.value_answer,
                        });
                      }}
                      style={{
                        justifyContent: "center",
                        flex: 1,
                        borderRightWidth:
                          index1 === 0 ? 0.7 : 0,
                        backgroundColor:
                          checkboxSurvey2Type2 ===
                          dataanswer.value_answer
                            ? this.state.setcolor2
                            : null,
                        borderColor: COLORSFont.textgray,
                      }}
                    >
                      <Text
                        style={[
                          checkboxSurvey2Type2 ===
                          dataanswer.value_answer
                            ? TextCSS.Text14white_MitrRegular
                            : TextCSS.Text14black_MitrLight,
                          ,
                          // textcolor
                          { textAlign: "center" },
                        ]}
                      >
                        {dataanswer.name_answer}
                      </Text>
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  )}