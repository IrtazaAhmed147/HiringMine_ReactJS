import React from "react";
import { Card, CardContent, Typography, Avatar, Box, Divider } from "@mui/material";
import Image from '../../assets/feedback.jpeg'; // or use <img> tag if not using Next.js

const WolCard = () => {
  return (
    <Card sx={{ width: {sm:'250px', md:'300px'}, borderRadius: 3, boxShadow: 3 }}>
      <CardContent sx={{padding: '10px', paddingBottom: '10px !important'}}>
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar sx={{ mr: 2 }}>A</Avatar>
          <Box>
            <Typography variant="subtitle1" color="primary" fontWeight="bold">
              Anonymous
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Product
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Received great product insights that helped pivot my startup's direction.
        </Typography>

        <Divider sx={{ mb: 1 }} />

        <Box
          sx={{
            width: "100%",
            height: 180,
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid #ddd"
          }}
        >
          <img
            src={Image}
            alt="Screenshot"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default WolCard;
