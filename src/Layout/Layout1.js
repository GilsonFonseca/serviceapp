import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container fixed style={{border: "3px solid black", padding: 10}}>
            {props.children}
        </Container>
    </React.Fragment>
  );
}
