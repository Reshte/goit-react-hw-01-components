import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import PropTypes from 'prop-types';
// import css from 'components/FriendList/FriendList.module'

export const FriendList = ({ friends }) => {

   
    return (
        <ul className="friend-list">
            {friends.map(friend => <FriendListItem id={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /> )}
        </ul>
    )
}

FriendList.prototype = {
   friends:PropTypes.array, 
}