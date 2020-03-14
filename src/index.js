import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard>
              <h4>Warning!</h4>
              Are you sure you want to do this?
          </ApprovalCard>
          
          <ApprovalCard>
            <CommentDetail 
            avatar={faker.image.avatar()}
            author="Sam"
            date="6:00PM"
            text="Super cool man!"
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
            avatar={faker.image.avatar()}
            author="Alex"
            date="6:30PM"
            text="Great Blog!"
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
            avatar={faker.image.avatar()}
            author="Jane"
            date="10:52PM"
            text="I love this blog"
            />
          </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));