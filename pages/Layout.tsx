import {AppBar, Container, CssBaseline, Toolbar, Typography} from "@mui/material";
import {FC} from "react";

type LayoutProp = {
    title : string
}

const Layout : FC<LayoutProp> = ({title, children}) => {
    return (
        <div>
            <CssBaseline/>
            <AppBar position={'relative'}>
                <Toolbar>
                    <Typography variant={'h6'}>{title}</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Layout