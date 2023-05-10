import React from 'react';
import { Stack, Item } from '@mui/material';
import { logo } from '../utils/constants';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    spacing={2} 
    alignItems="center" 
    p={2} 
    sx={{position:'sticky', background: '#000', top: '0', justifyContent: 'space-between'}}>
      

      <Link to='/' style={{display: "flex"}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
