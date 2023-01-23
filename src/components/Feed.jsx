import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchAPI } from '../utils/fetchAPI'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('Latest')
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack
            sx={{
                flexDirection: {
                    sx: 'column',
                    md: 'row'
                }
            }}
        >

            <Box
                sx={{
                    height: {
                        sx: 'auto',
                        md: '92vh'
                    },
                    borderRight: '1px solid #2D375A',

                    px: {
                        sx: 0,
                        md: 2
                    }
                }}
            >
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>
            <Box p={2} sx={{
                overflowY: 'auto',
                height: '90vh',
                flex: 2
            }} >
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: 'rgb(0, 119, 255)' }}>videos</span>
                </Typography>
                <Videos videos={videos}></Videos>
            </Box>
        </Stack>
    )
}

export default Feed