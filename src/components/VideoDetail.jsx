import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { fetchAPI } from '../utils/fetchAPI';
import Videos from './Videos';
import Loader from './Loader'

const VideoDetail = () => {

    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [isVideoDetailLoading, setIsVideoDetailLoading] = useState(true)
    const [videos, setVideos] = useState(null);
    const [isVideosLoading, setIsVideosLoading] = useState(true)

    useEffect(() => {
        fetchAPI(`videos?part=snippet,statistics&id=${id}`)
            .then(data => {
                setIsVideoDetailLoading(false)
                setVideoDetail(data.items[0])
            })

    }, [id])

    useEffect(() => {
        fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => {
                setIsVideosLoading(false)
                setVideos(data.items)
            })
    }, [id])

    if (!isVideoDetailLoading && !isVideosLoading) {
        const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
        return (
            <Box minHeight="95vh">
                <scrollToTop />
                <Stack direction={{
                    xs: 'column',
                    md: 'row'
                }}>
                    <Box flex={1}>
                        <Box sx={{ width: '100%' }}>
                            <ReactPlayer controls className='react-player' url={`https://www.youtube.com/embed/${id}`} />
                            <Typography color="#fff" variant="h5" fontWeight='bold' p={2}> {title} </Typography>
                            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
                                <Link to={`/channel/${channelId}`}>
                                    <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                                        {channelTitle}
                                    </Typography>
                                </Link>
                                <Stack direction="row" gap="20px" alignItems="center">

                                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                        {parseInt(viewCount).toLocaleString()} views
                                    </Typography>
                                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                        {parseInt(likeCount).toLocaleString()} likes
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Typography p={2} variant="body1" fontWeight={600} color="#fff">
                                More like what you just watched:
                            </Typography>
                            <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
                                <Videos videos={videos} direction="column" />
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        )
    }
    else {
        return (
            <Loader />
        )
    }

}

export default VideoDetail