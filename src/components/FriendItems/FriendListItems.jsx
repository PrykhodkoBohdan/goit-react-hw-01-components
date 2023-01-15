import PropTypes from "prop-types";
import css from "./FriendListItems.module.css"

export default function FriendListItems({ avatar, isOnline, name }) {
      return (
        <li className={css.item}>
          <span className={`${css.status} ${css[isOnline]}`}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
    }
    
    FriendListItems.propTypes = {
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    };