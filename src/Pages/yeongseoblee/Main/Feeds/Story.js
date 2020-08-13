import React, { Component } from "react";
import StoryItems from "./StoryItems";
import "./Story.scss";

const storyMock = [
  {
    id: "iamsandraohinsta",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13473162_493372090858264_904644563_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Ku3XIXyGDuMAX8TzWbE&oh=617fcaf80f772df7d7f00bd443213ec1&oe=5F4D098F",
  },
  {
    id: "jodie.comer",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/71195565_481338919375310_6948316478500241408_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NzpY2g09K54AX9D3He2&oh=6c146e651804de8bfccf24de658a20aa&oe=5F5D80FB",
  },
  {
    id: "joeyunlee",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/61039677_325768861657657_664942833857200128_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=tGPzMMmokEkAX-352jv&oh=b601b05f7bc7b0b8383d9add553c703b&oe=5F4BBFA6",
  },
  {
    id: "wecode_bootcamp",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1QhcpY8coE4AX-VYkSs&oh=349fe4b985aabd67c07543a12c9afe80&oe=5F4F8220",
  },
  {
    id: "jameelajamilofficial",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/108144356_267643454530159_1737405663934799377_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=HN8Z0nh8aBEAX865QE9&oh=b15e475f3cc956d312f5017a26c0a0d8&oe=5F4DAF37",
  },
  {
    id: "gretathunberg",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/109125103_294890861709973_1762560147759400297_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7m5OxagrlrAAX-96BZL&oh=8e70f2116def0b36aa3a7b9088ec0270&oe=5F4C077C",
  },
  {
    id: "andysamberg",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/11809580_1484655455167784_659446809_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=K5kOKK9r6kQAX_Es4N8&oh=bb3363966124e1d206a4b88e686551f0&oe=5F4E8667",
  },
  {
    id: "melissafumero",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/10431778_1497472450470663_1681678858_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=EOIcx3lHT28AX-cb13Z&oh=fd404355855f13660ed29fdeb72220cc&oe=5F4C7537",
  },
  {
    id: "kevinhart4real",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/14515783_1158525867560668_3834942711954145280_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=5on8K-8Fy8IAX_gggjX&oh=fc4b1a27fdc886ecf3f4c691f143f325&oe=5F4C7390",
  },
  {
    id: "therock",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11850309_1674349799447611_206178162_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=P6yMYGF_mrUAX-qK-P2&oh=5224a1fe9d3046b0e6c805b868a87c94&oe=5F4DA704",
  },
  {
    id: "wecode_founder",
    src:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/95487199_185290135875370_3869726896170205184_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ECvuGd8nC_cAX-coaoy&oh=72671d641ef5b416afd8bdf90d2a3823&oe=5F4E1335",
  },
];

class Story extends Component {
  render() {
    return (
      <div className="Story">
        <div className="storyFrame">
          <ul>
            <li className="emptyItem"></li>
            {storyMock.map((obj, idx) => (
              <StoryItems key={idx} storyObj={obj} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Story;
