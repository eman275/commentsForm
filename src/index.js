import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApproveCard from './ApproveCard';






const App =() =>{
  return (
     <div className="ui container comments">
      <ApproveCard >
        <CommentDetails  
         author="joan" 
         date="today at 7.30pm" 
         comment="cool"
         avatar ={faker.image.avatar()}
          />
      </ApproveCard>
      <ApproveCard>
        <CommentDetails  
        author="sam" 
        date="today at 7.55pm"
        comment="nice"
        avatar ={faker.image.avatar()}
          /> 
       </ApproveCard>
       <ApproveCard>
         <CommentDetails  
        author="jones" 
        date="today at 8.15"
        comment="cool"
        avatar ={faker.image.avatar()}
        />
        </ApproveCard>
    
      
     </div>
     
     
  );

};


ReactDom.render(<App/>,document.querySelector('#root'))