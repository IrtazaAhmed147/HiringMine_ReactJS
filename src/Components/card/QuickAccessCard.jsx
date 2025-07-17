import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
const iconMap = {
  PersonAddAltIcon: <PersonAddAltIcon sx={{ fontSize: 30, color: "#6c5ce7" }} />,
  SearchIcon: <SearchIcon sx={{ fontSize: 30, color: "#6c5ce7" }} />,
  UploadFileIcon: <UploadFileIcon sx={{ fontSize: 30, color: "#6c5ce7" }} />,
  WorkOutlineIcon: <WorkOutlineIcon sx={{ fontSize: 30, color: "#6c5ce7" }} />
};

const QuickAccessCard = ({name, icon, description, theme}) => {
  return (
    <Card
      sx={{
        maxWidth: 288,
        borderRadius: 4,
        textAlign: 'center',
        boxShadow: 3,
        py: 4,
        px: 2,
        backgroundColor: theme === 'dark' && 'rgb(41, 41, 48)', background: theme === 'light' &&  'linear-gradient(180deg, #edebff, hsla(0, 0%, 100%, 0))'
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="center" mb={1}>
          {/* <icon sx={{ color: '#6c5ce7', fontSize: 30 }} /> */}
           {iconMap[icon]}
        </Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="#6c5ce7"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant="body2" color={theme === 'dark' ? 'white' : 'black'}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuickAccessCard;
