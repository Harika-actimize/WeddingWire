import { Grid,Card, Typography,useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/system";


function SmallBanner() {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            {matches ? (<>
                <Typography sx={{fontSize:'1.63rem'}} variant="h4">Find your wedding venue</Typography>
            <p>Search through a vast selection of venues to find the place that perfectly matches your wedding vision.</p>

            </>):(<>   
             <div className='Bannneralign'>
            <picture className='smallbaner'>
                <source srcSet='https://www.weddingwire.in/assets/img/listing-sector-banner/1.avif' type="image/avif"></source>
            <img  src='https://www.weddingwire.in/assets/img/listing-sector-banner/1.avif'height='290px' width='815px' className='smallbanner' ></img>
            </picture>
            <div className='findcard'>
                    <Typography sx={{fontSize:'1.63rem'}} variant="h4">Find your wedding venue</Typography>
                    <p>Search through a vast selection of venues to find the place that<br></br> perfectly matches your wedding vision.</p>
                </div>
            </div>
            </>)}
     </div>
    )
}

export default SmallBanner
