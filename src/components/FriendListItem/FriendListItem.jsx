import PropTypes from 'prop-types';
import { Item, Onlaine, Img, Name } from './FriendListItem.styled';


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (<Item key={id}>
    <Onlaine isOnline={isOnline === true} />
    <Img src={avatar} alt="User avatar" width="48" />
    <Name >{name}</Name>
</Item>)
}

FriendListItem.prototype = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
}