import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import PropTypes from 'prop-types';
import {List} from './FriendList.styled'


export const FriendList = ({ friends }) => {
     return (
        <List>
            {friends.map(friend => <FriendListItem id={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /> )}
        </List>
    )
}

FriendList.prototype = {
   friends:PropTypes.array, 
}