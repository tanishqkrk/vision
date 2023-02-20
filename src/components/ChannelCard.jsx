import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelContent }) => {

    useEffect(() => {
        document.title = channelContent.snippet.title
    }, [channelContent])

    const channelURL = () => {
        if (channelContent?.id?.channelId === undefined) {
            return (channelContent?.id)
        }
        else {
            return (channelContent?.id?.channelId)
        }
    }
    return (
        <Link to={`/channel/${channelURL()}`}>
            <div className="channel-img">
                <img src={channelContent.snippet.thumbnails.high.url} alt="" className="channel-img-img" />
            </div>
            <h1 className="channel-title">
                {channelContent.snippet.title}
            </h1>
        </Link>
    )
};

export default ChannelCard;