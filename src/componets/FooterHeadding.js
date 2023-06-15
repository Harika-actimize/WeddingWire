import { Grid,Typography} from '@mui/material'
import React from 'react'

function FooterHeadding() {
  return (
    <div>
        <Grid container spacing={2} columns={20}>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={16}>
        <Typography sx={{ marginBottom: '.5rem', fontSize: '1.25rem' }}>Wedding vendors by category</Typography>
        </Grid>
        <Grid item xs={2}>

        </Grid>
        </Grid>
    </div>
  )
}

export default FooterHeadding