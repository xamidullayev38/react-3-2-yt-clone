import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  IconButton, 
  InputBase, 
  Badge, 
  Avatar,
  Tooltip,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddIcon from '@mui/icons-material/Add';

// 1. YouTube Dark Background and No Shadow
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#0f0f0f',
  backgroundImage: 'none',
  boxShadow: 'none',
  color: 'white',
  zIndex: 1201, // Stay above sidebar
});

// 2. Search Container Styling
const SearchWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#121212',
  border: '1px solid #333',
  borderRadius: '40px',
  paddingLeft: '15px',
  width: '100%',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const SearchButton = styled(IconButton)({
  backgroundColor: '#222',
  borderLeft: '1px solid #333',
  borderRadius: '0 40px 40px 0',
  padding: '6px 20px',
  '&:hover': { backgroundColor: '#333' },
});

// 3. YouTube Hover Effect (Circular & Subtle Gray)
const ActionButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Header = ({ onToggle }) => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '56px' }}>
        
        {/* LEFT SECTION: Menu & Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ActionButton onClick={onToggle}>
            <MenuIcon />
          </ActionButton>
          <Box 
            component="img" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            sx={{ height: 20, ml: 2, cursor: 'pointer', filter: 'brightness(0) invert(1)' }} 
          />
        </Box>

        {/* CENTER SECTION: Search Bar */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SearchWrapper>
            <InputBase
              placeholder="Search"
              sx={{ color: 'white', flex: 1, fontSize: '16px' }}
            />
            <Tooltip title="Search">
              <SearchButton color="inherit">
                <SearchIcon />
              </SearchButton>
            </Tooltip>
          </SearchWrapper>
          <ActionButton sx={{ ml: 1, bgcolor: '#181818' }}>
            <MicIcon />
          </ActionButton>
        </Box>

        {/* RIGHT SECTION: Actions & User */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              bgcolor: '#272727',
              color: 'white',
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': { bgcolor: '#3f3f3f' },
              mr: 1
            }}
          >
            Create
          </Button>
          
          <ActionButton>
            <Badge badgeContent="9+" color="error">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </ActionButton>
          
          <ActionButton sx={{ ml: 2 }}>
            <Avatar sx={{ bgcolor: '#00838f', width: 32, height: 32, fontSize: '14px' }}>S</Avatar>
          </ActionButton>
        </Box>

      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;