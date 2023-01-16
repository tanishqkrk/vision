import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchAPI } from '../utils/fetchAPI'


const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState()
    const [videos, setVideos] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetchAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))

        fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
            .then((data) => setVideos(data?.items))
    }, [])

    console.log(channelDetail);
    // console.log(videos);

    return (
        <Box minHeight="95vh">
            <div className="banner"></div>
            <ChannelCard channelContent={channelDetail} />
        </Box>
    )
}

export default ChannelDetail