import React from 'react'
import s from './message.module.scss'


const Message = (props) => {
    // console.log(props)
    return (
        <div className={props.item.sender === props.socket.id ? s.message__item : s.message__itemRight} onLoad={props.m}>
            <img width="30px" src="https://www.anti-malware.ru/files/styles/imagesize400w/public/images/source/snimok_ekrana_2019-02-12_v_10.10.34.png?itok=msSLV76G" alt="Avatar" className={s.chat__avatar} />
            <p>{props.item.body}</p>
            <p><small>{props.item.time}</small></p>
        </div>
    )
}

export default Message;