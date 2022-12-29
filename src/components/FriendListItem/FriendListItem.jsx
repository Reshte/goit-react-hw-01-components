import PropTypes from 'prop-types';
// import css from 'components/FriendList/FriendList.module'


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (<li key="id" className="item">
    {/* {isOnline?<span className={css.status-online}></span>:<span className={css.status-offline}></span>} */}
    <img className="css.avatar" src={avatar} alt="User avatar" width="48" />
    <p className='css.name' >{name}</p>
</li>)
}

FriendListItem.prototype = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
}