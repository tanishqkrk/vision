import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Videos from './Videos'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
    // const [selectedCategory, setSelectedCategory] = useState('Latest')
    const [videos, setVideos] = useState([])
    const searchTerm = useParams();

    useEffect(() => {
        if (searchTerm) {
            document.title = `Search for ${searchTerm.searchTerm}`
        }
    }, [searchTerm])

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${searchTerm.searchTerm}`)
            .then((data) => {
                // console.log(data);
                setVideos(data.items)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [searchTerm])

    return (
        <Box p={2} sx={{
            overflowY: 'auto',
            height: '90vh',
            flex: 2
        }} >
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                Search results for <span style={{ color: 'rgb(0, 119, 255)' }}>{searchTerm.searchTerm}</span>
            </Typography>
            {videos !== undefined ? <Videos videos={videos} direction="column" /> :
                <Typography textAlign={"center"} p={2} style={{ background: "rgb(0, 119, 255)" }} variant="body1" fontWeight={600} color="#fff">
                    We're sorry for the inconvenience. The API which is providing this data is not functioning properly anymore. We're migrating to a newer API so you can enjoy unlimited content!</Typography>}
        </Box>
    )
}

export default SearchFeed