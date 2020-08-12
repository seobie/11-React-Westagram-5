import React, { Component } from 'react';
import './Sidebox.scss'

class SideBox extends Component {
    render() {
        return (
            <div className="mainWapper">
                <div className="sidebarBox">
                    <div className="sidebarContant">
                        <img alt="프로필이미지"
                            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94017159_2562777257321639_4649294732051087360_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=T--_xBwRsvsAX-IcQ_k&oh=ea8dc8576846917c809ee4f0d25f85e5&oe=5F4DA71B" />
                        <div className="sidebarContantText">ssamwonn</div>
                    </div>
                    <div className="followBox">
                        <span className="followRcd">회원님을 위한 추천 </span>
                        <span className="followRed">모두보기</span>
                    </div>
                    <ul>
                        <li>
                            <div className="followLists">
                                <img className="followImg" alt="팔로우계정이미지"
                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/31326712_387617395056545_182934906383368192_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=-fvfj2jpxooAX8M7lVX&oh=75b3a2ddef7d5b012571e986bc3a303a&oe=5F4F3F11" />
                                <div className="fallow_alignment">
                                    <span className="followList infoNickName">skuukk_zky</span>
                                    <span className="followList infoFollowText">회원님을 팔로우합니다</span>
                                </div>
                                <div className="followList infoFollowBtn">팔로우 </div>
                            </div>
                        </li>
                        <li>
                            <div className="followLists">
                                <img className="followImg" alt="팔로우계정이미지"
                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/13525473_239562676427287_1092224874_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Nh1_nHnirLYAX9kl2wb&oh=314c559c2e1bbe6f1a8d8c30aa9d0841&oe=5F4EA14B" />
                                <div className="fallow_alignment">
                                    <span className="followList infoNickName">ssinz7</span>
                                    <span className="followList infoFollowText">회원님을 팔로우합니다</span>
                                </div>
                                <div className="followList infoFollowBtn">팔로우 </div>
                            </div>
                        </li>
                        <li>
                            <div className="followLists">
                                <img className="followImg" alt="팔로우계정이미지"
                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/80803711_615145509310419_6266144778472128512_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_-4Xntu6IMUAX_yYOqF&oh=7898f644573b0ecd240d96cbaf41738b&oe=5F4E27F8" />
                                <div className="fallow_alignment">
                                    <span className="followList infoNickName">rw2100</span>
                                    <span className="followList infoFollowText">회원님을 팔로우합니다</span>
                                </div>
                                <div className="followList infoFollowBtn">팔로우 </div>
                            </div>
                        </li>
                        <li>
                            <div className="followLists">
                                <img className="followImg" alt="팔로우계정이미지"
                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/65794524_349827629038414_9045906552279531520_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bZTtuuHTlTMAX_Y7rzy&oh=c45707f6cc227ad2349ddfd9e37fb6df&oe=5F4E6E23" />
                                <div className="fallow_alignment">
                                    <span className="followList infoNickName">konichan7_m77</span>
                                    <span className="followList infoFollowText">회원님을 팔로우합니다</span>
                                </div>
                                <div className="followList infoFollowBtn">팔로우 </div>
                            </div>
                        </li>
                        <li>
                            <div className="followLists">
                                <img className="followImg" alt="팔로우계정이미지"
                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/14072890_1783274521913583_1065281436_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=5S2rsZlyGpcAX-IsyVz&oh=0e59f4b6933b8e69da95fd541903bea3&oe=5F4E4176" />
                                <div className="fallow_alignment">
                                    <span className="followList infoNickName">yejinhand</span>
                                    <span className="followList infoFollowText">회원님을 팔로우합니다</span>
                                </div>
                                <div className="followList infoFollowBtn">팔로우 </div>
                            </div>
                        </li>
                    </ul>
                    <div className="infoFoobar infoBarLists">
                        <div>
                            <ul className="infoBarList1">
                                <li className="infoBarList">소개</li>
                                <li className="infoBarList">도움말</li>
                                <li className="infoBarList">홍보센터</li>
                                <li className="infoBarList">API</li>
                                <li className="infoBarList">채용정보</li>
                                <li className="infoBarList">개인정보처리방침</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="infoBarList2">
                                <li className="infoBarList">약관</li>
                                <li className="infoBarList">위치</li>
                                <li className="infoBarList">인기계정</li>
                                <li className="infoBarList">해시태그</li>
                                <li className="infoBarList">언어</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_copylight">
                        <span>©2020 INSTAGRAM FROM FACEBOOK</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBox;