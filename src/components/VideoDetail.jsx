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
        if (videoDetail && !isVideosLoading) {
            document.title = videoDetail.snippet.title
        }
    }, [videoDetail])

    useEffect(() => {
        fetchAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => {
                setIsVideoDetailLoading(false)
                setVideoDetail(data.items[0])
                document.title = data.items[0].snippet.title
            })
            .catch((err) => {
                console.log(err);
            })
        document.documentElement.scrollTop = 0
    }, [id])

    useEffect(() => {
        fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => {
                setIsVideosLoading(false)
                setVideos(data.items)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    if (!isVideoDetailLoading) {
        if (videoDetail && !isVideosLoading) {
            const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail
            return (
                <Box minHeight="95vh">
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
                                    {/* {!isVideoDetailLoading && <Videos videos={videos} direction="column" />} */}
                                    {!isVideoDetailLoading && videos ? <Videos videos={videos} direction="column" /> :
                                        <Typography textAlign={"center"} p={2} style={{ background: "rgb(0, 119, 255)" }} variant="body1" fontWeight={600} color="#fff">
                                            We're sorry for the inconvenience. The API which is providing this data is not functioning properly anymore. We're migrating to a newer API so you can enjoy unlimited content!</Typography>}
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            )
        }
    }
    else if (!videoDetail) {
        return (
            <Box minHeight="95vh">
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
                    {videos !== undefined ? <Videos videos={videos} direction="column" /> :
                        <Typography textAlign={"center"} p={2} style={{ background: "rgb(0, 119, 255)" }} variant="body1" fontWeight={600} color="#fff">
                            We're sorry for the inconvenience. The API which is providing this data is not functioning properly anymore. We're migrating to a newer API so you can enjoy unlimited content!</Typography>}
                </Box>
            </Box>
        )
    }

}

export default VideoDetail