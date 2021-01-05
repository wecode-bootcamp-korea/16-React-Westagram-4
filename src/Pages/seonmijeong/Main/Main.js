import React from 'react';
import comment from './comment';
import COMMENT from './commentData';
import './Main.scss';

class Main extends React.Component {
    constructor() {
        super();
        this.state= {
            comments: [],
            comment: ""
        };
    }

    changeHandler = (event) => {
        this.setState({ comment: event.target.value })
    }

    clickHandler = () => {
        let comments = this.state.comments
        let comment = this.state.comment
        comments.push(comment)
        this.setState({comments: comments})
    }

    keyUpHandle = (e) => {
        e.keyCode === 13 && this.clickHandler()
    }

    render() {
        return (
            <div className="main">
                <nav>
                    <h1 class="logo">Westagram</h1>
                    <input class="searchInput" type="text" placeholder="검색"/>
                    {/* </input><i class="fas fa-search"></i> */}
                    <div class="naviAllIconDiv">
                        <img class="heartIcon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img class="naviIcon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                        <img class="myProfilePic" src="https://instagram.fjed4-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fjed4-1.fna.fbcdn.net&_nc_ohc=tVgl6kiYjrEAX-KPRkS&oh=9a51dbd0c4dfc402cd84614adbcee21a&oe=6018B58F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"/>
                    </div>
                </nav>

                <main>
                    <div class="feeds">

                        <aside>

                        </aside>

                        <article>
                            <section class="articleTop">
                                <img class="profilePic" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/11330743_1590229817901692_499750187_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ZsjfosU3k04AX-yhfWc&oh=b47cdc41cbbe9e3b9d7cd66f6aec1c83&oe=601AE441"/>
                                <div class="nicknameInarticleTop">Nickname</div>
                            </section>
                            <img class="articlePic" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/135273529_772334316806496_8423377919947641982_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=-YpyNEPOan8AX_soRB3&tp=1&oh=f7d6c02a1bd8e83abe5a1584d4143987&oe=601B85DC"/>
                            <section class="articleBottom">
                                <div class="upsideOfCommentInput">
                                    <div class="articleBottomsIconsDiv">
                                        <img class="clickHeart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                                        {/* <i class="far fa-comment fa-2x"></i> */}
                                    </div>
                                    <button class="likeCount">좋아요 ???개</button>
                                    <div class="publisherComment"><span class="nickname">Nickname</span> what i have to say..?</div>
                                    <div class="updatedComments">
                                        <ul class="commentUl">
                                            {this.state.comments.map((el) => {
                                                return <p><b>Nickname </b>{el}</p>})}
                                        </ul>
                                    </div>

                                    <p class="howLong">1일전</p>
                                </div>
                                <div class="commentPostbtnDiv">
                                    <input class="commentInput" onChange={this.changeHandler} onKeyUp={this.keyUpHandle} type="text" placeholder="댓글 달기..."/>
                                    <button class="postingBtn" onClick={this.clickHandler}>게시</button>
                                </div>
                            </section>
                        </article>
                    </div>

                    <div class="mainRight">
                        <div>

                        </div>
                        <div>

                        </div>
                        <footer>

                        </footer>
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;