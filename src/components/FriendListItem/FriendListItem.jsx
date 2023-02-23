import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friends }) => {
    return (
        <>
            {friends.map(friend => (
                <li key={friend.id} className={css.item}>
                    <span className={css.status}>{friend.isOnline}</span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>
            ))}
        </>
    );
};


FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool
};