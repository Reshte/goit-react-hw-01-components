import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import { List } from './FriendList.styled'
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
     return (
        <List>
             {friends.map(friend => {
                   return (
                       <FriendListItem
                        key= {friend.id}
                        id={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />)
             })}
        </List>
    )
}

FriendList.prototype = {
    friends: PropTypes.array
}