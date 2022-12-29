
import PropTypes from 'prop-types';

export const FriendList = ({ friends:{id, avatar, name, isOnline} }) => {
   
    return (
        <ul className="friend-list">
            <li>{id}</li>
       </ul>
    )
}