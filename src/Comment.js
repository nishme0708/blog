import React from 'react';
import faker from 'faker';

const Comment = (props) => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src={props.imageUrl} alt='' className='avatar' />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.author}
                </a>
                <div className='metadata'>
                    <span className='date'>{props.time}</span>
                </div>
                <div className='text'>{props.comment}</div>
            </div>
        </div>
    );
};

export default Comment;
