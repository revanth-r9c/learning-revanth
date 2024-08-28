import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import ProfileImageUpload from './components/ProfileImageUpload';
import ResumeUpload from './components/ResumeUpload';
import VideoUpload from './components/VideoUpload';
import jobPortal from './jobPortal.png'; 
import './App.css';

function App() {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h2" component="h4" align="center" gutterBottom>
        Job Portal
      </Typography>
      {/* <Box sx={{ display: 'flex', justifyContent: 'right', mt: 4 }}>
        <img src={jobPortal} alt="Job Portal" style={{ maxWidth: '100%', height: '500px' }} />
      </Box> */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ResumeUpload />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ProfileImageUpload />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <VideoUpload />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
