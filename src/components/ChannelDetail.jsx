import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchAPI } from '../utils/fetchAPI'


const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [isLoadingChannelDetail, setIsLoadingChannelDetail] = useState(true)
    const [isErrorChannelDetail, setIsErrorChannelDetail] = useState(false)
    const [videos, setVideos] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        fetchAPI(`channels?part=snippet&id=${id}`)
            .then((data) => {
                setChannelDetail(data?.items[0]);
                setIsLoadingChannelDetail(false);
                setIsErrorChannelDetail(false);
            })
            .catch(() => {
                setIsLoadingChannelDetail(false);
                setIsErrorChannelDetail(true)
            })
    }, [id])

    useEffect(() => {
        fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id])

    // console.log(subcount);


    if (isErrorChannelDetail) {
        return (
            <Box style={{ color: 'white' }} minHeight="95vh">
                Error
            </Box>
        )
    }

    if (isLoadingChannelDetail) {
        return (
            <Box minHeight="95vh" className="loading-page">Loading</Box>
        )
    }
    // console.log(videos);
    if (!isLoadingChannelDetail && !isErrorChannelDetail) {
        let subcount = parseInt(channelDetail.statistics.subscriberCount);
        return (
            <Box style={{ padding: '16px' }} minHeight="95vh">
                {/* <div className="banner"></div> */}
                <ChannelCard channelContent={channelDetail} />
                <h6 className="subcount"> {subcount.toLocaleString('en-US')} Subscribers</h6>
                <p className="channelDesc"> {channelDetail.snippet.description} </p>
                <Videos videos={videos}></Videos>
            </Box>
        )
    }
}

export default ChannelDetail