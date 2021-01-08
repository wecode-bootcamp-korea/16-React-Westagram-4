import React, { Component } from "react";
import './Main.scss';
import profile from '../../../images/bohyeonKoo/Main/profile.jpg';
import feeds from '../../../images/bohyeonKoo/Main/feed01.jpg';
import follower from '../../../images/bohyeonKoo/Main/follower.png';
import heart from '../../../images/bohyeonKoo/Main/icon/heart.png';
import comment from '../../../images/bohyeonKoo/Main/icon/comment.png';
import share from '../../../images/bohyeonKoo/Main/icon/plane.png';
import scrap from '../../../images/bohyeonKoo/Main/icon/label.png';


export class Main extends Component {
    render() {
        return(

            <div className="main">
                <nav className="navBar">
                    <div className="navConents">
                        <div className="left-side"></div>
                        <div className="center"></div>
                        <div className="right-side"></div>
                    </div>
                </nav>

                <main className="contents">
                    <div className="feeds">
                        <article>
                            <div className="topTitle">
                                <img 
                                alt="profile image"
                                src={profile} 
                                onClick={this.goToProfile}
                                />

                                <h1>kbhooo</h1>
                            </div>

                            <div className="imgSection">
                                <img
                                alt="Feed Image"
                                src={feeds}
                                />
                            </div>
                            
                            <div className="communicationSection">
                                <div className="likeSection">
                                    <img alt="Follower Like" src={heart} />
                                    <img alt="Follower Comment" src={comment} />
                                    <img alt="Share" src={share} />
                                    <img className="scrapIcon" alt="scrap" src={scrap} />
                                </div>

                                <div className="followerSection">
                                    <img
                                    alt="follower Profile"
                                    src={follower}
                                    />
                                    <h1>
                                        님 이 좋아합니다.
                                    </h1>
                                </div>

                                <div className="descrpitSection">
                                    <div className="descriptContent">
                                        <span>
                                            <a>kbhooo</a>
                                            위코드에서 만드는 위스타그램 프로젝트
                                        </span>
                                    </div>
                                </div>

                                <div className="feedTime">
                                    <span>시간 전</span>
                                </div>

                                <div className="commentSection">
                                    <input 
                                    className="comment"
                                    type="text"
                                    placeholder="댓글 달기..."/>

                                    <button className="commentBtn">게시</button>
                                </div>
                            </div>

                        </article>

                    </div>

                    <div className="main-right">
                        <div className="user-title"></div>
                        <div className="follower-story"></div>
                        <div className="recommandation"></div>
                    </div>
                </main>
            </div>

        );
    }
}

export default Main;