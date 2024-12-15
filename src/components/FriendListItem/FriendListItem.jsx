import clsx from "clsx";
import style from "./FriendListItem.module.css"


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={style.wrapper}>
            <img src={avatar} alt="Avatar" width="48" className={style.img} />
            <p className={style.txt}>{name}</p>
            <p className={clsx(isOnline ? style.true : style.false, style.status)}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )

};

export default FriendListItem;