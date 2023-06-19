import { Grid,Typography,useMediaQuery} from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/system";


function FooterHeadding() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
        <Grid container spacing={2} columns={20}>
        <Grid item xs={2}>

        </Grid>
        { matches ?  <Grid item xs={20}>
        <Typography sx={{ marginBottom: '.5rem', fontSize: '1.25rem' }}>Wedding vendors by category</Typography>
        </Grid> :
        <Grid item xs={16}>
        <Typography sx={{ marginBottom: '.5rem', fontSize: '1.25rem' }}>Wedding vendors by category</Typography>
        </Grid>}
        <Grid item xs={2}>

        </Grid>
        </Grid>
    </div>
  )
}

export default FooterHeadding