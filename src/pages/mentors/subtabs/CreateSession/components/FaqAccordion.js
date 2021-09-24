import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Table } from 'reactstrap';
import { Label } from 'semantic-ui-react'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export const FaqAccordion = ({...restProps}) => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
    <Label style={{marginBottom: '5px'}} color="grey"> Frequently Asked Questions </Label>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How should I format the file? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p> The CSV File should have the column titles of "Name", "Location", "Email", "Descriptions", "Section", "Linkedin", and "Role." You can leave any of the cells under the columns empty if sufficient information was not given. If an email address is not present, then an email will not be sent to that profile.   </p>
          <Label style={{marginBottom: '5px'}}> <em> Example csv </em> </Label>

          <Table>
            <tr>
                <td> Name </td>
                <td> Location </td>
                <td> Email </td>
                <td> Descriptions </td>
                <td> Section</td>
                <td> Linkedin </td>
                <td> Role </td>
            </tr>
            <tbody>
                <tr>
                    <td> Jessica Davis </td>
                    <td> Atlanta, Georgia </td>
                    <td> testing@test.com </td>
                    <td> I am responsible for managing student coursework and grading of exams.</td>
                    <td> </td>
                    <td> linkedin.com/in/jessica-davis </td>
                    <td> Educator </td>
                </tr>
                <tr>
                    <td> Thomas Jefferson </td>
                    <td> zoom.com/p/thomas-jefferson </td>
                    <td> thomas@jefferson.com </td>
                    <td> Overview the board meetings and write notes down. </td>
                    <td> </td>
                    <td> linkedin.com/in/thomas-jefferson</td>
                    <td> Overseerer </td>
                </tr>
            </tbody>
        </Table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What file extensions do you accept? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              At the moment, only CSV files.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography> How many files can I drop? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              At the moment, only 1 CSV file.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}