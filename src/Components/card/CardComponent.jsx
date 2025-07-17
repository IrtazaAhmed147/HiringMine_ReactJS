import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import icon from '../../assets/icon.png'
import { useSelector } from 'react-redux';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function CardComponent({ companyName,
  designation,
  views,
  appliedBy,
  user,
  payRangeEnd,
  payRangeStart,
  country, city,
  createdAt,
  slider
}) {

  const givenDate = new Date(createdAt)
  const now = new Date()

  const diffInMs = now - givenDate
  const daysAgo = Math.floor(diffInMs / (1000 * 60 * 60 * 24))




    const { theme } = useSelector((state) => state.theme)
  return (
    <Card elevation={2} sx={{ height: '250px', width:  slider ? "96%": {sm: '47%', md: '42%'}, padding: '5px', backgroundColor: theme === 'dark' ? 'rgb(41, 41, 48)': 'white' , color: theme === 'dark' && 'white'}}>
      <CardContent sx={{ height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography sx={{color: theme === 'dark' && 'white'}} variant="subtitle2" color="text.secondary">
              {companyName ? `${companyName}` : "Anonymous"}
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {designation}
            </Typography>
            <Typography variant="body2" color="primary">
              {payRangeStart && payRangeEnd ? `${payRangeStart} - ${payRangeEnd}` : 'No salary mentioned'}


            </Typography>

          </Box>
          <Box component={'img'} src={icon} width={'45px'} />
        </Box>
        <Box display={'flex'} justifyContent="space-between" alignItems="center" mt={2}>
          <Box>

            <Typography sx={{color: theme === 'dark' && 'white'}} variant="body1" fontSize={13} color="text.secondary" mt={1}>
              {city}, {country}
            </Typography>
            <Typography sx={{color: theme === 'dark' && 'white'}} variant="body1" fontSize={13} color="text.secondary" mt={1}>
              {daysAgo} {daysAgo > 1 ? "days ago" : "day ago"}
            </Typography>
          </Box>
          <Box>

            <Typography variant="body1" fontSize={13}>{views} views</Typography>
            {user?.userName && (
              <Typography sx={{color: theme === 'dark' && 'white'}} variant="body1" fontSize={13} color="text.secondary">
                posted by <strong>{user.userName}</strong>
              </Typography>
            )}
          </Box>

        </Box>
      </CardContent>
    </Card>

  );
}
