import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card style={{backgroundColor: "#edeced"}}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom component="div">
            MEDICARE NEWS
        </Typography>
        <Box sx={{
                width: '100%',
                display: "inline-flex",
                marginTop: 1
            }}>
            <Box sx={{
                    width: '40%',
                }}>
                <Box sx={{ marginLeft: 2, marginRight: 2, height: 100, backgroundColor: "#fff", border: "1px solid #ccc" }}/>
            </Box>
            <Box sx={{
                    width: '60%',
                }}>
                <Box sx={{ fontWeight: 700, marginBottom: 2 }}>
                    Durable Medical Equipment Resources for Ordering Physicians
                </Box>
                <Box sx={{ fontWeight: 400, marginBottom: 2 }}>
                    Guide to help ensure your order meets coverage and documentation requirements.
                </Box>
                <Box sx={{ fontWeight: 400, marginBottom: 3 }}>
                    Do you order Durable Medical Equipment (DME) for Medicare patients?
                </Box>
            </Box>

        </Box>
      </CardContent>
      <CardActions>
        <Typography sx={{fontStyle: 'italic'}}>Published Today at 7:30 AM</Typography>
        <Box sx={{
                float: 'right'
            }}>
            <Button size="small" style={{ backgroundColor: "#ccc", color: 'black', padding: '5px 20px', float: 'right' }}>
            <Typography sx={{fontStyle: 'italic'}}>More {'>'}</Typography>
            </Button>
        </Box>
      </CardActions>
    </Card>
  );
}