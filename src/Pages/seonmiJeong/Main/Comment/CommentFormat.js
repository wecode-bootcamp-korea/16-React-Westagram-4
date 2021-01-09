import React from 'react';

class CommentFormat extends React.Component {
    render() {
        console.log(this.props.commentsArr)
        return (
                /* Main.js에 있던 코드
                {this.props.commentsArr.map((el) => {
                    return <p><b>Nickname </b>{el}</p>})}*/
            
                <div className="commentFormat">
                    {this.props.commentsArr.map((el) => 
                        <p><b>Nickname</b>{el}</p>)}
                </div>
        );
    }
}

export default CommentFormat;
