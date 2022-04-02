import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
    return (
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Grid container direction="column" justifyContent={"center"} alignContent="center">
                <Grid>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        {label}
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    );
}
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Navbar = () => {
    return (
        <div>
            <AppBar position="static" color="primary">
                {appBarLabel('REPORTE DEL CONCURSO')}

            </AppBar>
        </div>
    )
}

export default Navbar; 