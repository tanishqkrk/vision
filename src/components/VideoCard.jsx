import { Link } from "react-router-dom"
import { Typography, Card, CardMedia } from '@mui/material'
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoTitle } from "../utils/constants"

const VideoCard = ({ videoContent: { id: { videoId }, snippet } }) => {
    // console.log(snippet);
    return (
        <Link
            to={`/video/${videoId}`}
        >
            <div
                className='videoCard'
                style={{
                    background: `url(${snippet.thumbnails.high.url}) 100% `
                }}
                to={`/video/${videoId}`}
            >
                <div className="video-details">
                    <h3 className="video-title">{snippet.title}</h3>
                    {/* <p className="video-desc">{snippet.description}</p> */}
                    <div className="video-extras">
                        <h5 className="video-channel">{snippet.channelTitle}</h5>
                        {snippet.liveBroadcastContent === 'live' && <h6 className="live-tag">Live</h6>}
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default VideoCard