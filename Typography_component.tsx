import React from 'react'
import { Button, Typography } from '@mui/material';
const Typography_component = () => {
    return (<div>

        {/* <Typography variant= "h1">

            Hello World

         </Typography> */}


        <Button    sx={{margin :3}} color='success' size='large' variant='contained'
            onClick={() => { alert("this is contained button with size large") }} >First</Button>
        <Button  sx={{margin :3}} color="warning" size="medium" variant='outlined'
            onClick={() => { alert("this is outlined button with size medium") }}>Second</Button>
        <Button sx={{margin :3}} color="info" size="small" variant='text'
            onClick={() => { alert("this is text button with size small") }}>Third</Button>





    </div>);
}


export default Typography_component;