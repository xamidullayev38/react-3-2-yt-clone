import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';

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
          flexGrow: 1,
          p: 3,
          mt: '64px', 
          width: '100%',
          color: 'white'
        }}
      >
        <div style={{ padding: '20px', border: '1px dashed #333' }}>
           Main Content Placeholder (Video Grid coming soon...)
        </div>
      </Box>
    </Box>
  );
}

export default App;