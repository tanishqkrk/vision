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
        fetchAPI(`search?part=snippet&q=${searchTerm.searchTerm}`)
            .then((data) => setVideos(data.items))
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
            <Videos videos={videos}></Videos>
        </Box>
    )
}

export default SearchFeed