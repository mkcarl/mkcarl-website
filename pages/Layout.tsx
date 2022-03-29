import {AppBar, Avatar, Box, Button, Container, CssBaseline, IconButton, Link, Menu,
    MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import React, {FC} from "react";
import {MenuOutlined} from "@mui/icons-material";
import {useRouter} from "next/router";

type LayoutProp = {
    title : string
}

const pages = ["home", "assignment", "project", "profile"]

const Layout : FC<LayoutProp> = ({title, children}) => {
    const router = useRouter()

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const gotoPage = (page:string, sideEffect:Function) => {
        sideEffect()
        router.push(`/${page}`)
    }


    return (
        <div>
            <CssBaseline/>
            <AppBar position={'relative'}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {title}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuOutlined />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => gotoPage(page, handleCloseNavMenu)}>
                                    <Typography textAlign="center">{page[0].toUpperCase() + page.slice(1)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {title}
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => gotoPage(page, handleCloseNavMenu)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>



                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Layout