import React from 'react'
import { Button, Stack } from '@mui/material'
import { categories } from '../utils/constants.js' 

const SideBar = () => (
    <Stack
    direction= "auto"
    sx={{ overflowY: 'auto',
     height: { sx: 'auto', md: '95%'},
     flexDirection: { md: 'column'} 
    }}
    >
    { categories.map((category) => (
        <Button className='category-btn' 
        // sx={{ color: 'white'}}  
        >
            <span>{category.icon}</span> 
            <span>{category.name}</span>
        </Button> 
    ))}
    </Stack>
  )

export default SideBar