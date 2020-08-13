import React, { Component } from "react";
import Story from "./Story";
import Feed from "./Feed";
import "./Feeds.scss";

const mockFeeds = [
  {
    author: "joeyunlee",
    authorPic:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/61039677_325768861657657_664942833857200128_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=8yxlPFRdtTwAX-vW7vC&oh=c1e6cecaa984ed33654acbf9da987329&oe=5F4FB426",
    location: "somewhere cool",
    feedImg:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/75491419_2590257414631838_8252980959796004155_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=B4Pxemwn7_MAX97vKyj&oh=1b2545719f2050ab13d683bedcdcf5eb&oe=5F4E85F1",
    details: "details",
    friendName: "User's Friend Name",
    likedNum: "9,999",
    numComments: "99,999,999",
    passedTime: "20",
  },
  {
    author: "wecode_bootcamp",
    authorPic:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=YnXEUJgdnQIAX-x9_FE&oh=00180a719811a277a73bb5d05f2021e5&oe=5F5F3770",
    location: "Wecode",
    feedImg:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/117378890_620303818675475_8732155127553812923_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=5VpVcYj8hWwAX-fwMUx&oh=484b1978d660ab399f063ef6763557ef&oe=5F5FBFF8",
    details: "밤까지 이루어지는 불코딩 🔥",
    friendName: "dooreplay",
    likedNum: "50",
    numComments: "12",
    passedTime: "7",
  },
  {
    author: "jameelajamilofficial",
    authorPic:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/108144356_267643454530159_1737405663934799377_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=-3EwvCdGfUgAX9c5wf1&oh=be4e9da24799c283c152ef0bb34bbd9c&oe=5F60174F",
    location: "",
    feedImg:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/117393927_162671142022900_4199302890607047446_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QtYmaeqOFGAAX977Y1G&oh=09e181e696ef6544393de50b7ac62f46&oe=5F60907A",
    details: "Afternoon nap",
    friendName: "wecode_bootcamp",
    likedNum: "48,573",
    numComments: "222",
    passedTime: "23",
  },
];
class Feeds extends Component {
  render() {
    return (
      <div className="Feeds">
        <Story />
        {mockFeeds.map((obj, idx) => (
          <Feed key={idx} feedObj={obj} />
        ))}
      </div>
    );
  }
}

export default Feeds;
