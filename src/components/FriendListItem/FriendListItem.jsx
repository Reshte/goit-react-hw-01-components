export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (<li key="id"className="item">
    {isOnline?<span className="status-online"></span>:<span className="status-ofline"></span>}
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
</li>)
}