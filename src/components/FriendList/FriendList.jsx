import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {

    return (
        <ul className={style.wrapper}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={style.card}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}

        </ul >
    );

};

export default FriendList;

