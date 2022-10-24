import React from 'react'
import moment from 'moment'
import { Comment, Tooltip, Avatar } from 'antd';

const ChatCard = (props) => {
  return (
    <div style={{ width: '100%' }}>
        <Comment
            author={props.sender.name}
            avatar={
                <Avatar
                    src={props.sender.image} alt={props.sender.name}
                />
            }
            content={
                props.message.substring(0, 7) === 'uploads' ?
                    props.message.substring(props.message.length - 3, props.message.length) === 'mp4' ?
                        <video
                            style={{ maxWidth: '200px' }}
                            src={`http://localhost:5000/${props.message}`}
                            alt="video"
                            type="video/mp4" controls />
                        :
                        <img 
                            style={{ maxWidth: '200px' }}
                            src={`http://localhost:5000/${props.message}`}
                            alt="img" />
                :
                <p>
                    {props.message}
                </p>
            }
            datetime={
                <span>{props.createdAt.substring(0,10)}</span>
            }
        />
    </div>
  )
}

export default ChatCard