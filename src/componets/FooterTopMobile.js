import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';

export default function FooterTopMobile() {
  return (
    <div style={{marginBottom:'10%'}}>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Maharashtra</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Mumbai
          </Typography>
          <Typography>Wedding Venues Pune
          </Typography>
          <Typography>Wedding Venues Nashik
          </Typography>
          <Typography>Wedding Venues Nagapur
          </Typography>
          <Typography>Wedding Venues Raigad
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Delhi NCR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues South Delhi
          </Typography>
          <Typography>Wedding Venues Gurgaon
          </Typography>
          <Typography>Wedding Venues West Delhi
          </Typography>
          <Typography>Wedding Venues North Delhi
          </Typography>
          <Typography>Wedding Venues Gandhinagar
          </Typography>
          <Typography>Wedding Venues Faridabad
          </Typography>
          <Typography>Wedding Venues Noida
          </Typography>
          <Typography>Wedding Venues East Delhi
          </Typography>
          <Typography>Wedding Venues Dwarka
          </Typography>
          <Typography>Wedding Venues Greater Noida
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
          <Typography>Uttar Pradesh</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Lucknow
          </Typography>
          <Typography>Wedding Venues Agra
          </Typography>
          <Typography>Wedding Venues Varanasi
          </Typography>
          <Typography>Wedding Venues Kanpur
          </Typography>
          <Typography>Wedding Venues Meerut
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Rajasthan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Jaipur
          </Typography>
          <Typography>Wedding Venues Udaipur
          </Typography>
          <Typography>Wedding Venues Jodhpur
          </Typography>
          <Typography>Wedding Venues Alwar
          </Typography>
          <Typography>Wedding Venues Ajmer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Karnataka</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Bangalore
          </Typography>
          <Typography>Wedding Venues Mysore
          </Typography>
          <Typography>Wedding Venues Dakshina Kannada
          </Typography>
          <Typography>Wedding Venues Kodagu
          </Typography>
          <Typography>Wedding Venues Raigad
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tamil Nadu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Chennai
          </Typography>
          <Typography>Wedding Venues Coimbatore
          </Typography>
          <Typography>Wedding Venues Nashik
          </Typography>
          <Typography>Wedding Venues Salem
          </Typography>
          <Typography>Wedding Venues Madurai
          </Typography>
          <Typography>Wedding Venues Tiruchirappalli</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Telangana</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Hyderabad
          </Typography>
          <Typography>Wedding Venues Ranga Reddy
          </Typography>
          <Typography>Wedding Venues Mancherial
          </Typography>
          <Typography>Wedding Venues Medchal
          </Typography>
          <Typography>Wedding Venues Warangal
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Gujarat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Ahmedabad
          </Typography>
          <Typography>Wedding Venues Vadodara
          </Typography>
          <Typography>Wedding Venues Surat
          </Typography>
          <Typography>Wedding Venues Rajkot
          </Typography>
          <Typography>Wedding Venues Gandhinagar
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>West Bengal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Kolkata
          </Typography>
          <Typography>Wedding Venues Darjeeling
          </Typography>
          <Typography>Wedding Venues Howrah
          </Typography>
          <Typography>Wedding Venues Paschim Bardhaman
          </Typography>
          <Typography>Wedding Venues South 24 Parganas
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Uttarakhand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Dehradun
          </Typography>
          <Typography>Wedding Venues Nainital
          </Typography>
          <Typography>Wedding Venues Haridwar
          </Typography>
          <Typography>Wedding Venues Pauri Garhwal
          </Typography>
          <Typography>Wedding Venues Tehri Garhwal
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Goa</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues North Goa
          </Typography>
          <Typography>Wedding Venues South Goa
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Punjab</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Ludhiana
          </Typography>
          <Typography>Wedding Venues Amritsar
          </Typography>
          <Typography>Wedding Venues Jalandhar
          </Typography>
          <Typography>Wedding Venues Patiala    
          </Typography>
          <Typography>Wedding Venues Sahibzada Ajit Singh Nagar
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Chandigarh</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Chandigarh City
          </Typography>
          <Typography>Wedding Venues Zirakpur
          </Typography>
          <Typography>Wedding Venues Panchkula
          </Typography>
          <Typography>Wedding Venues Mohali
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Madhya Pradesh</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Indore
          </Typography>
          <Typography>Wedding Venues Jabalpur
          </Typography>
          <Typography>Wedding Venues Garhwal
          </Typography>
          <Typography>Wedding Venues Ujjain
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Kerala</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Kochi
          </Typography>
          <Typography>Wedding Venues Thiruvananthapuram
          </Typography>
          <Typography>Wedding Venues Ernakulam
          </Typography>
          <Typography>Wedding Venues Kozhikode
          </Typography>
          <Typography>Wedding Venues Alappuzha</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Bihar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Patna
          </Typography>
          <Typography>Wedding Venues Gaya
          </Typography>
          <Typography>Wedding Venues Muzaffarpur
          </Typography>
          <Typography>Wedding Venues Bhagalpur
          </Typography>
          <Typography>Wedding Venues Nalanda</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Andhra Pradesh</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Visakhapatnam
          </Typography>
          <Typography>Wedding Venues Vijayawada
          </Typography>
          <Typography>Wedding Venues Chittoor
          </Typography>
          <Typography>Wedding Venues Kurnool
          </Typography>
          <Typography>Wedding Venues East Godavari</Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Himachal Pradesh</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Shimla
          </Typography>
          <Typography>Wedding Venues Solan
          </Typography>
          <Typography>Wedding Venues Kullu
          </Typography>
          <Typography>Wedding Venues Kangra
          </Typography>
          <Typography>Wedding Venues Chamba</Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Odisha</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Wedding Venues Bhubaneswar
          </Typography>
          <Typography>Wedding Venues Puri
          </Typography>
          <Typography>Wedding Venues Khordha
          </Typography>
          <Typography>Wedding Venues Ganjam
          </Typography>
          <Typography>Wedding Venues Cuttack</Typography>
        </AccordionDetails>
      </Accordion>
      <Divider/> 
    </div>
  );
}