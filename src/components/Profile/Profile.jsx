import clsx from "clsx";
import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.up_wrapper}>
                <img src={image} alt="User avatar" className={style.img} />
                <p className={style.name}>{name}</p>
                <p className={style.txt}>@{tag}</p>
                <p className={style.txt}>{location}</p>
            </div>

            <ul className={style.list_wrapper}>
                <li className={style.li_list}>
                    <span>Followers</span>
                    <span className={style.number}> {followers} </span>
                </li>
                <li className={clsx(style.li_list, style.bord)}>
                    <span>Views</span>
                    <span className={style.number}> {views} </span>
                </li>
                <li className={style.li_list}>
                    <span>Likes</span>
                    <span className={style.number}> {likes} </span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;