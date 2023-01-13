import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
// import { SearchIcon } from '@mui/icons-material'
import { SearchRounded } from '@mui/icons-material'
// import {SearchIcon} from SearchOffOutlined

const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 1,
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                background: '#2D375A'
            }}
        >
            <input
                type="text"
                className='search-bar'
                placeholder='Search'
                value=""
                onChange={() => { }}
                style={{
                    background: '#2D375A',
                    color: 'white'
                }}
            />
            <IconButton type="submit"
                sx={{
                    p: '10px',
                    color: '#57CEE7'
                }}
            >
                <SearchRounded></SearchRounded>
            </IconButton>
        </Paper>
    )
}

export default SearchBar