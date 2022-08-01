import React from 'react'
import Button from '@material-ui/core/Button';
import styled from '@emotion/styled';
import { Checkbox } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
const ButtonStyled = styled(Button)`
  margin-top: 5px;
  justify-content: left;
`;
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Todo({todo}) {
  return <ButtonStyled 
            variant="outlined" 
            fullWidth 
            startIcon={<Checkbox {...label} sx={{ color: green[800],}}/>}
          >
            {todo.name}
          </ButtonStyled>;
};
