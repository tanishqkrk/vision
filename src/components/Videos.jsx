import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import PlaylistCard from './PlaylistCard'
import { useState, useRef, useEffect } from 'react'

const Videos = ({ videos }) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        videos && setLoaded(true)
    }, [])

    const videosContainer = useRef();
    return (
        <div ref={videosContainer} className='videos-container'>
            {
                loaded && videos.map(
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