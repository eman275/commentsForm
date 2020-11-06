import React from 'react';
// import faker from 'faker'; (we don't need it inside this file) 

//how to crate reusable component
const commentDetails = (props) =>{
    // console.log(props);
    return(
      <div className="ui comments">
       <div className="comment">
         <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/ >
         </a>
        <div className="content">
         <a href="/" className="author">
                {props.author}
         </a>
         <div className="metadata">
          <span className="date">{props.date}</span>   
        </div>
        <div className="comment">{props.comment}
        </div>
      </div>   
    </div>
  </div>
    );
};


export default commentDetails;