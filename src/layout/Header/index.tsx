
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AppBar, Stack, Container, Toolbar, Menu, MenuItem } from '@mui/material'
import { LogoButton } from '@/components/CustomButtons';



export default function Header() {
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);

  const handleClick = (event: any) => {
    setAnchorE1(event.currentTarget);
  }
  return (
    <Stack
      direction='row'
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5
      }}
      spacing={2}
    >
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <LogoButton  img={} width={'100'} height={}/>
            <Link to={'#'} ></Link>
            <Menu
              anchorEl={anchorE1}
              open={open}
            >
              {/* MenuItem with a link */}
              <MenuItem onClick={handleClick} component={Link} to="/dashboard">
                Research
              </MenuItem>

              {/* Another MenuItem with a different link */}
              <MenuItem onClick={handleClick} component={Link} to="/settings">
                Settings
              </MenuItem>
            </Menu>
            <Link to={'#'} >Values</Link>
            <Link to={'#'} >Set Registry</Link>
            <Menu
              anchorEl={anchorE1}
              open={open}
            >
              {/* MenuItem with a link */}
              <MenuItem onClick={handleClick} component={Link} to="/dashboard">
                Support
              </MenuItem>

              {/* Another MenuItem with a different link */}
              <MenuItem onClick={handleClick} component={Link} to="/settings">
                Settings
              </MenuItem>
            </Menu>
            <Menu
              anchorEl={anchorE1}
              open={open}
            >
              {/* MenuItem with a link */}
              <MenuItem onClick={handleClick} component={Link} to="/dashboard">
                More
              </MenuItem>

              {/* Another MenuItem with a different link */}
              <MenuItem onClick={handleClick} component={Link} to="/settings">
                Company
              </MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
    </Stack>
  )
}
