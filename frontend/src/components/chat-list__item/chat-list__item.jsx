import React from 'react'
import s from './chat-list__item.module.scss'


const ChatListItem = () => {
    return (
        <li className={s.chat__item}>
            <button type="button" className={s.chat__button}>
                <img width="35px" src="https://www.anti-malware.ru/files/styles/imagesize400w/public/images/source/snimok_ekrana_2019-02-12_v_10.10.34.png?itok=msSLV76G" alt="userAvatar" className={s.chat__avatar}/>
                <p className={s.chat__name}>Some user</p>
            </button>
        </li>
    )
}

export default ChatListItem;