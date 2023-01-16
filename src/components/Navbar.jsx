import { Stack } from '@mui/material '
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
// import logo from '../../public/logo.svg'

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            pl={2}
            pr={2}
            pt={1}
            pb={1}
            sx={{ position: 'sticky', background: 'rgb(16, 16, 16)', top: 0, justifyContent: 'space-between', zIndex: 9 }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src='/logo.svg' height={45} alt="logo" />
            </Link>
            <SearchBar></SearchBar>
        </Stack>
    )
}

export default Navbar