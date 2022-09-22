import React from 'react';

import { Typography , Card, CardContent, Grid, TextField , Button} from '@mui/material';
import { CheckBox } from '@mui/icons-material';


const Form = () => {
  return (
    <div>
      <Typography variant="h1" component="h4">
        form making
      </Typography>
      ;
      <Card style={{maxWidth:450 , margin:"0 auto",padding: "20px 5px" , color : "red"}}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                placeholder="First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                placeholder="Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}  item>
              <TextField
                label="email"
                placeholder="name@gmail.com"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Message"
                placeholder="Enter Your Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
             <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
