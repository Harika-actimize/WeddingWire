import { Grid,Card, Typography } from '@mui/material'
import React from 'react'

function SmallBanner() {
    return (
        <div style={{marginBottom: 'calc(1.5rem - 5px)'}}>
            <Grid sx={{display:'flex'}}>
            <Grid item xs={8}>
            <Card>
                    <Typography variant="h4">Find your wedding venue</Typography>
                </Card>
            </Grid>
            <Grid item xs={8}>
            <img src='https://www.weddingwire.in/assets/img/listing-sector-banner/1.avif'height='290px' width='815px' className='smallbanner' ></img>
        </Grid>
        </Grid>
        </div>
    )
}

export default SmallBanner
