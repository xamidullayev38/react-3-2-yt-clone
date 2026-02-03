import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './layout/Main';

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: '#0f0f0f', minHeight: '100vh' }}>
      <CssBaseline />

      <Header onToggle={handleDrawerToggle} />

      <Sidebar open={open} />

      <Box
        component="main"
        sx={{
          p: 1,
          width: '100%',
          color: 'white',
          overflow: 'hidden'
        }}
      >
           <Main />
      </Box>
    </Box>
  );
}

export default App;