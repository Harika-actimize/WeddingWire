import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Questions() {
    return (
        <div>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How can WeddingWire App help you to find a good venue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          WeddingWire App and website helps one in finding wedding vendors in any city sitting at the comfort of your home. Be it your choice of wedding venues, your choice wedding photographers, bridal makeup artists or bridal jewellery etc. All you need to do is visit our website or download our App. Further you can apply various filters including price per plate, locality, etc and find the wedding venues Mumbai as per your requirements and the one that fulfills all your needs. You can check their menu, their prices, ratings and reviews and shortlist your favorites by reading their reviews. You can contact the vendors directly to get the best quote or book a site visit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Which are the top Venues in Mumbai?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Best Venues in Mumbai :- Chandan Banquets, Dayanand Lawn and Banquet, RG Banquet, Majiwade, Sun-n-Sand Hotel and Purohit Banquet
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the cancellation policies in the pandemic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All wedding venues Mumbai have a different cancellation policy, you can check from the vendor before booking it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is enough parking space available in wedding venues near Mumbai?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, there is a parking space at every venue, however, confirm the space availability as per your guest list before hand only.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the services proffered by the wedding venues Navi Mumbai?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          These wedding venues Mumbai provide an ideal setup, comfortable ambience and grand space to host a wedding. The professional and mannered staff are further cherry on the top. They have in-house catering and decorating professionals too. There is enough parking space available for everyone.
          </Typography>
        </AccordionDetails>
      </Accordion>
              </div>
    )
}

export default Questions
