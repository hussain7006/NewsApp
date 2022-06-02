import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

function SingleNews() {
    const [singleNews, setSingleNews] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // console.log("location.state", location.state);
        setSingleNews(location.state);
    }, [])
    console.log(singleNews);

    let { title, author, urlToImage, description, publishedAt} = singleNews;

    return (
        <Box>
            {/* // <h1>single news</h1> */}
            <Box>
                <img src={urlToImage} alt="" width='100%' />
            </Box>
            <Box sx={{textAlign:"left"}}>
                <Typography variant="h2" sx={{marginBottom:'10px'}}>{title}</Typography>
                <Typography variant="h6" sx={{marginBottom:'10px'}}>{description}</Typography>
                <Typography variant="h6" sx={{marginBottom:'0px'}}>Author: {author}</Typography>
                <Typography variant="h6" sx={{marginBottom:'10px'}}>Published at: {publishedAt}</Typography>
            </Box>
        </Box>

    )
}

export default SingleNews;