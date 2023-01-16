import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import PlaylistCard from './PlaylistCard'

const Videos = ({ videos }) => {
    // console.log(videos);
    return (
        <div className='videos-container'
        // direction="row"
        // flexWrap="wrap"
        // justifyContent="start"
        // gap={2}
        // overflowY="scroll"
        >
            {
                videos.map(
                    (item, index) => (
                        <div
                            style={{
                                width: '100%'
                            }}
                            key={index}>
                            {item.id.videoId && <VideoCard videoContent={item} />}
                            {item.id.channelId && <ChannelCard channelContent={item} />}
                            {/* {item.id.playlistId && <span style={{ display: 'none' }}></span>} */}
                        </div>
                    )
                )
            }

        </div>
    )
}

export default Videos