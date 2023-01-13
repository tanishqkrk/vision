import { Link } from 'react-router-dom';

const ChannelCard = ({ channelContent }) => (
    <Link to={`/channel/${channelContent?.id?.channelId}`}>
        <div className="channel-img">
            <img src={channelContent.snippet.thumbnails.high.url} alt="" className="channel-img-img" />
        </div>
        <h1 className="channel-title">
            {channelContent.snippet.channelTitle}
        </h1>
    </Link>
);

export default ChannelCard;