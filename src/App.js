import React from 'react';
import Navbar from './components/Navbar';
import {Grid,CssBaseline} from '@material-ui/core';
import LeftBox from './components/LeftBox';
import RightBox from './components/RightBox';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <div>
      <Grid container style={{marginTop:'30px'}}>
        <Grid item md={2} />
        <Grid item sm={4} md={4}>
        <LeftBox />
        </Grid>
        <Grid item sm={4} md={4}>
        <RightBox />
        </Grid>
        <Grid item md={2} />
      </Grid>
      </div>
    </>
  );
}

export default App;
