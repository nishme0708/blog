import React from 'react';
import ReactDOM from 'react-dom';

import Comment from './Comment.js';
import faker from 'faker';
import ApproveCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <Comment author='Swapnil' time='Today at 4:00 PM' imageUrl={faker.image.avatar()} comment='Nice Post!!!' />

            <ApproveCard>
                <Comment
                    author='Darshan'
                    time='Today at 6:14 PM'
                    imageUrl={faker.image.avatar()}
                    comment='Superb Post!!!'
                />
            </ApproveCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
