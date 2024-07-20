import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
<Box  sx={{ flexGrow: 1 }} >
      <AppBar  color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div"   sx={{ flexGrow: 1 }}>
            StudentApp
          </Typography>
          <Button ><Link 
          to={'/'}
           style={{textDecoration:"none", color:"white"}}>
            Add Student
            </Link>
            </Button>
          <Button >
            <Link
            to={'/a'}
            style={{textDecoration:"none", color:"white"}}>
            view Student
            </Link>
            </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar