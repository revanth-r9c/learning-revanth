import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Box, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled('input')({
  display: 'none',
});

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', file);

    try {
      await axios.post('http://localhost:3000/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSnackbarMessage('Video uploaded successfully!');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage('Error uploading video.');
      setSnackbarSeverity('error');
      console.error('Error uploading video:', error);
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Upload Video
        </Typography>
        <form onSubmit={handleSubmit}>
          <label htmlFor="upload-video">
            <Input
              accept=".mp4,.wmv"
              id="upload-video"
              type="file"
              onChange={handleFileChange}
              required
            />
            <Button variant="contained" component="span">
              Choose File
            </Button>
          </label>
          {file && <Typography variant="body1">{file.name}</Typography>}
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Upload Video
            </Button>
          </Box>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000} 
          onClose={handleSnackbarClose}
          action={
            <Button color="inherit" onClick={handleSnackbarClose}>
              Close
            </Button>
          }
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default VideoUpload;
