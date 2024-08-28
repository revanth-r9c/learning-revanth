import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Box, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled('input')({
  display: 'none',
});

const ProfileImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    try {
      await axios.post('http://localhost:3000/upload-profile-images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSnackbarMessage('Profile images uploaded successfully!');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage('Error uploading profile images.');
      setSnackbarSeverity('error');
      console.error('Error uploading profile images:', error);
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const getButtonText = () => {
    const fileCount = files.length;
    if (fileCount === 0) return 'Choose Files';
    return fileCount === 1 ? 'Choose Files (1)' : `Choose Files (${fileCount})`;
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Upload Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <label htmlFor="upload-profile-images">
            <Input
              accept=".jpg,.jpeg,.gif"
              id="upload-profile-images"
              type="file"
              multiple
              onChange={handleFileChange}
              required
            />
            <Button variant="contained" component="span">
              {getButtonText()}
            </Button>
          </label>
          {files.length > 0 && (
            <Box sx={{ mt: 2 }}>
              {Array.from(files).map((file, index) => (
                <Typography key={index} variant="body1">
                  {file.name}
                </Typography>
              ))}
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Upload Images
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

export default ProfileImageUpload;
