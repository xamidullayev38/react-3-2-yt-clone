import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Videos = ({ thumbnail, title, channel, views, time, duration, avatar }) => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        cursor: 'pointer', 
        mb: 4,
        // Triggering children based on parent hover
        '&:hover .thumbnail-img': {
          transform: 'scale(1.05)',
          transition: 'transform 0.4s ease-in-out',
        },
        '&:hover .more-icon': {
          opacity: 1,
        }
      }}
    >
      {/* Thumbnail Area */}
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        borderRadius: '12px', 
        overflow: 'hidden',
        backgroundColor: '#272727' // Placeholder while loading
      }}>
        <img 
          className="thumbnail-img"
          src={thumbnail} 
          alt={title} 
          style={{ 
            width: '100%', 
            aspectRatio: '16/9', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease-in-out',
            display: 'block'
          }} 
        />
        <Box sx={{ 
          position: 'absolute', bottom: 8, right: 8, bgcolor: 'rgba(0,0,0,0.8)', 
          color: 'white', px: 0.5, borderRadius: '4px', fontSize: '12px', fontWeight: 600,
          zIndex: 2
        }}>
          {duration}
        </Box>
      </Box>

      {/* Info Area */}
      <Box sx={{ display: 'flex', mt: 1.5, gap: 1.5 }}>
        <Avatar src={avatar} sx={{ width: 36, height: 36 }} />
        <Box sx={{ flexGrow: 1, pr: 1 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white', 
              fontWeight: 600, 
              lineHeight: '1.4rem', 
              mb: 0.5, 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical' 
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa', '&:hover': { color: 'white' } }}>
            {channel}
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            {views} • {time}
          </Typography>
        </Box>
        
        {/* More icon starts hidden and appears on hover */}
        <IconButton 
          className="more-icon"
          sx={{ 
            color: 'white', 
            alignSelf: 'flex-start', 
            p: 0, 
            opacity: 0, 
            transition: 'opacity 0.2s' 
          }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Videos;