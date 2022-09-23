import React from 'react';

import { Typography , Card, CardContent,Container, Grid, TextField , Radio , RadioGroup , Button,Box, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';


const Form = () => {
  return (
    <div>     
      <Typography variant="h1" component="h4">
        form making
      </Typography>
      ;
      <Card
        style={{
          maxWidth: 450,
          margin: '0 auto',
          padding: '20px 5px',
          color: 'red',
        }}
      >
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
            <Grid xs={12} item>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary="person 1" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Person 2" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary="person 3" />
          </ListItem>
        </List>
      </Box>
      <Card variant = "outlined"
        style={{
          maxWidth: 450,
          margin: '0 auto',
          padding: '20px 5px',
          color: 'red',
        }}
      >
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
        
               <Typography variant="h6" component="h6">user 4</Typography>
            </Grid>
            <Grid xs={12} item>
              <Typography variant="h6" component="h6">
                user 1
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Typography variant="h6" component="h6">
                user 2
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Typography variant="h6" component="h6">
                user 3
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Typography variant="h6" component="h6">
                user 4
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      
      <Container>
        <Typography variant="h1" component="h2">
          form making
        </Typography>
        ;
        <form>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Outlined"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            required
            label="Outlined"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            required
            label="Outlined"
            variant="outlined"
          />
        </form>
        <RadioGroup>
          <Radio name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
          <Radio name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
        </RadioGroup>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Container>
      
      
    </div>
  );
};

export default Form;

