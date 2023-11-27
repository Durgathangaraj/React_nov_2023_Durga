import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import {  Container } from '@mui/material';
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";





 
 

export default function ButtonAppBar() {
  return (
    <div>
   
    
    <Box sx={{ flexGrow: 1 }} class name="App-bg" >
      <AppBar position="static" style={{backgroundColor:"darkblue"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <div>Real Estate</div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" >Blog</Button>
          <pre></pre>
          
          <pre></pre>
          <Button color="inherit">Resources</Button>
          <pre></pre>
          
          <pre></pre>
          <Button color="inherit">Agencies</Button>
          <pre></pre>
          <Button color="inherit">Industry</Button>
          <pre></pre>
          <Button color="inherit">About Us</Button>
          <pre></pre>
          <Button color="inherit" variant="outlined" href="/Login">LOGIN</Button>
          <pre></pre>
          
          <pre></pre>
          <Button color="inherit" variant="outlined" href="/Registeration">SIGNUP</Button>
          <pre></pre>
          {/* <Button color="inherit" variant="outlined" href="/MasonryImageList">BLOG</Button>
          <pre></pre> */}
          
        </Toolbar>
      </AppBar>
    </Box>
    
    <div className='Responsive'  style={{backgroundImage: "url(https://wallpaperaccess.com/full/3921978.jpg)",backgroundSize: "cover",
height: "100%",
}}>
    <Container component="main" 
    maxWidth="xs" >
      
        <Typography variant="h5">
    
        </Typography>
      <div style={{color: "white"}}>
    <h1 >Real estate investing, even on a very small scale, remains a tried <br></br>
        and true means of building an individual's cash flow and wealth.</h1></div>
        <br></br>
      <div style={{color: "white"}}>
    <h1 >Success in real estate starts when you believe you are worthy of it.<br></br>
       Michael Ferrara .The best time to buy a home is always five years ago.</h1></div>
        <br></br>
   
       
     
    </Container>
        </div>
   
   <div>
    {/* <Box sx={{ flexGrow: 1 }} class name="App-bg" >
      <AppBar position="static" style={{backgroundColor:"darkblue"}}>
        <Toolbar>
      
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          </Toolbar>
          </AppBar>
        </Box> */}
        <Box sx={{ width: "100%", height:"100%", overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
                   
                   


    

    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
        theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
        p: 6,
      }}
      >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
              >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>


    
  
    
                </div>
     </div> 
  );
}

const itemData = [
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.BL4s7_vCLRz00RJtbWUVAQHaE8&pid=Api&P=0&h=180',
    title: 'Bed',
    author: 'The Luxury Level',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhRPlqZB_vHuA3_3_KuicA-TwcxZeE7cueA&usqp=CAU',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.fLwNilwKEX5gKMkyvmFsQAAAAA&pid=Api&P=0&h=180',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.Q1DcoTw7XlRLxF1x41qDMwHaE8&pid=Api&P=0&h=180',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJvs_5aSN1s6V4tfApkeD83xWT2xs0DliMQ&usqp=CAU',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.QmuMwuWn_Mq49ZpknFTH4AHaE8&pid=Api&P=0&h=180',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.2fE23ML7TPFk13QCH5lkFwHaEy&pid=Api&P=0&h=180',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreF_fupTIAer6y4uX3dmcnNDMEn1VAPubuA&usqp=CAU',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-VKXtHDdOgIA06L9ETkcXHg4bcbro4op93SghGqmfV5ApJ-Qhgh1zlpglduyc1gS4UQ&usqp=CAU',
    title: 'Coffee',
    author: 'Jen P.',
  },
  
];