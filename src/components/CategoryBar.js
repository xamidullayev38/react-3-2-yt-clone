import React from 'react';
import { Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const categories = [
  "All", "Music", "Gaming", "Mixes", "Downtempo music", 
  "Indie pop music", "Podcasts", "Russian Pop", "Arabesque", 
  "Computer programming", "Soul Music", "Live", "Recent"
];

const ScrollContainer = styled(Box)({
  display: 'flex',
  gap: '12px',
  overflowX: 'auto',
  backgroundColor: '#0f0f0f',
  '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

const CategoryChip = styled(Chip)(({ active }) => ({
  backgroundColor: active ? '#fff' : 'rgba(255,255,255,0.1)',
  color: active ? '#000' : '#fff',
  fontWeight: 500,
  borderRadius: '8px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: active ? '#fff' : 'rgba(255,255,255,0.2)',
  },
  '& .MuiChip-label': { padding: '0 12px' },
}));

const CategoryBar = () => {
  const [selected, setSelected] = React.useState("All");

  return (
    <Box sx={{ position: 'sticky', top: 56, zIndex: 1100, bgcolor: '#0f0f0f' }}>
      <ScrollContainer>
        {categories.map((cat) => (
          <CategoryChip 
            key={cat} 
            label={cat} 
            active={selected === cat ? 1 : 0} 
            onClick={() => setSelected(cat)}
          />
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default CategoryBar;