import React from 'react';

import { Typography ,RadioGroup, Button, TextField ,Container , Radio } from '@mui/material';


const Form = () => {
  return (
    <div>
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
