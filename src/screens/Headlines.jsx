import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReplayIcon from '@mui/icons-material/Replay';

function Headlines() {
    const [news, setNews] = useState([]);
    const navigate = useNavigate();
    let openNews = (item) => {
        navigate('/singleNews', { state: item });
    }

    let handleReload = () => {
        getNews();
    }
    let getNews = () => {
        setNews([]);
        let API = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=fe1bf6d4e13b4b57beee8d0fa6a97a0c";
        axios.get(API).then(res => {
            setNews(res.data.articles);
        })
    }
    useEffect(() => {
        getNews();

    }, [])

    return (
        <Box>
            <Box>
                {/* <Typography variant='h4'>News</Typography> */}
                <Button
                    variant='outlined'
                    startIcon={<ReplayIcon />}
                    onClick={handleReload}
                >
                    Reload
                </Button>
            </Box>

            <Box>
                {news.length ?

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        {news.map((e, i) =>
                            <Box
                                sx={{
                                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                    margin: '15px 15px 25px 15px',
                                    padding: '5px 10px 20px 10px',
                                    width: '70vw',

                                }}
                                key={i}
                                onClick={() => openNews(e)}
                            >
                                <Box sx={{ display: 'flex', }}>
                                    <Box>
                                        <img src={e.urlToImage} width="200px" height="150px" alt="" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant='h5' sx={{ marginLeft: '20px', textAlign: 'left' }}>{e.title}</Typography>
                                        <Typography variant='p' sx={{ marginLeft: '20px', textAlign: 'left' }}>Author: {e.author}</Typography>
                                        <Typography variant='p' sx={{ marginLeft: '20px', textAlign: 'left' }}>Publishd at: {e.publishedAt}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{}}>
                                    <Typography variant='p' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left', textAlign: 'left', paddingBottom: '0px' }}>{e.description}</Typography>
                                </Box>
                            </Box>
                        )}
                    </Box> :
                    <Box sx={{}}>
                        <img src="http://2.bp.blogspot.com/-96107qprFQA/VIW9tquDyBI/AAAAAAAAJOg/vzqZC0KFZRE/s1600/news.gif" alt="imageNotFound" width="60%" />
                    </Box>
                }
            </Box>
        </Box >

    )
}

export default Headlines;