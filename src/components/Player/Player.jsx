import { Box } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../../contexts/MoviesContextProvider';
import Navbar from '../Navbar/Navbar';
const Player = () => {
    const {getOneMovies, oneMovies} = useContext(moviesContext)
    const {id} = useParams()
    useEffect(()=> {
        getOneMovies(id);
    }, []);
    return (
        <Box>
            <Navbar/>
           <Box sx={{
               width: '100%',
            //    marginTop: '20px',
            //    marginBottom: '150px', 
               height: {lg: '700px'}}}>
                <iframe style={{width: '100%', height: '100%'}}
                src={oneMovies.movies}
                loading='lazy'
                frameBorder='0'
                scrolling='no'
                allowFullScreen='allowFullScreen'
                >
                </iframe>
                {/* <Box sx={{marginTop: '20px', border: '2px solid fff', padding: '10px', backgroundColor: '#fff'}}>
                <Typography sx={{color: '#181818'}}>{oneMovies.description}</Typography>
                </Box> */}
           </Box>
       </Box>
    );
};

export default Player;