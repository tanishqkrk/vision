import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed } from './components'
import { useRef } from "react"
const App = () => {
    const alert = useRef();
    const disappear = () => {
        console.log(alert.current);
        alert.current.style.display = "none"
    }
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: 'rgb(16, 16, 16)' }}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/channel/:id" element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
                {/* <div onClick={disappear} ref={alert} className="alert danger-alert">
                    <h3>The API that is providing data to run this application is malfunctioning, I'm currently migrating to a newer API, until then users can't access all the data, some videos and search feeds are not available. Sorry for the inconvenience</h3>
                </div> */}
            </Box>
        </BrowserRouter>
    )
}

export default App