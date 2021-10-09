import React from 'react';


//This is the part of the communicating with Props part of the Udemy course

interface CommentDetailProps{
    author: string,
    timeAgo: string,
    commentText?: string,
    avatar: string,
}


const CommentDetail = (props: CommentDetailProps) => {
  return (
      <div className="comment">
          <a href="/" className="avatar">
              <img alt="avatar" src={props.avatar}/>
          </a>
          <div className="content">
              <a href="/" className="author">
                  {props.author}
              </a>
          </div>
          <div className="metadata">
              <span className="date"> {props.timeAgo}</span>
          </div>
          <div className="text"> {props.commentText ?? "Default text for Comment"}</div>
      </div>

  );
};


export default CommentDetail;