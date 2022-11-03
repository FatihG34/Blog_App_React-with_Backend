import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit" href='https://github.com/FatihG34' target={"_blank"}>
                    <GitHubIcon />
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                    href='https://www.linkedin.com/in/fatih-gunaydin/' target={"_blank"}
                >
                    <LinkedInIcon />
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="twitter"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    href='https://twitter.com/Fatih_Gnydn' target={"_blank"}
                >
                    <TwitterIcon />
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="youtube"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    href='https://www.youtube.com/channel/UCgVl6oQdjSpq-UAO3fLrrlQ' target={"_blank"}
                >
                    <YouTubeIcon />
                </IconButton>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='warning'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        © 2022 Fatih Günaydın, All rights reserved.
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit" href='https://github.com/FatihG34' target={"_blank"}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            href='https://www.linkedin.com/in/fatih-gunaydin/' target={"_blank"}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                            href='https://twitter.com/Fatih_Gnydn' target={"_blank"}
                        >
                            <TwitterIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="youtube"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                            href='https://www.youtube.com/channel/UCgVl6oQdjSpq-UAO3fLrrlQ' target={"_blank"}
                        >
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}

export default Footer