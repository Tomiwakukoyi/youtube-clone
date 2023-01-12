import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            {/* /video:id - the ID is a specific number so that we can go to a specific video
            page */}
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:search" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
