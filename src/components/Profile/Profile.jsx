import PropTypes from 'prop-types';
import { WrapperProfile, Description, Img, Name, Tag, Location, StatList, StatItem,  StatLabel, StatQuantity} from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <WrapperProfile>
        <Description >
        <Img
                src={avatar}
            alt="User avatar"
            />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
    </Description>

    <StatList>
        <StatItem>
            < StatLabel>Followers</ StatLabel>
            <StatQuantity>{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
            < StatLabel>Views</ StatLabel>
            <StatQuantity>{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
            < StatLabel>Likes</ StatLabel>
            <StatQuantity>{stats.likes}</StatQuantity>
        </StatItem>
    </StatList>
</WrapperProfile>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
         likes: PropTypes.number.isRequired,
    })
}