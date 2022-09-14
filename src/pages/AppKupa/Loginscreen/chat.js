if (data != null) {
    let newArr = Object.keys(data).map((key, index) => {
      let newData = {
        chat_room: key_room,
        isRead: data[key].isRead,
        _id: index,
        text:
          data[key].message_type === "text"
            ? data[key].message
            : data[key].message_type === "file"
            ? "ไฟล์เอกสาร"
            : "รูปภาพ",

        textfile:
          data[key].message_type === "file"
            ? data[key].original_name
            : "",
        filetype:
          data[key].message_type === "file" ? data[key].path_file : "",
        createdAt: data[key].time,
        image:
          data[key].message_type === "photo"
            ? data[key].path_original
            : "",
        userview: UserId,
        blockstatus_room: blockstatus_room,
        _Companyname: companyname,
        user: {
          _id:
            data[key].user_id === UserId ? UserId : data[key].user_id,
          avatar:
            data[key].user_id != UserId
              ? "http://one.ditp.go.th/uploads/member_profile/profile_new.png"
              : this.props.getImg.img,
        },
      };
      return newData;
    });

    // const sortAscending = newArr.sort((a, b) =>
    //   new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1,
    // );
    const sortDescending = newArr
      .sort((a, b) =>
        new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
      )
      .reverse();

    // console.log(
    //   'sortDescendingnew10000' + JSON.stringify(sortDescending),
    // );

    // if (datachat === undefined) {
    //   console.log('cccc0000'+JSON.stringify(datachat[1].chat));
    // }
    datachat.push({ chat: sortDescending });

    this.setState({ datachat });
  }