import * as React from 'react';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText, styled } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { useScreenAndAuth  } from '../../Context/screenContext';

const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



export function MenuLateral({ onDrawerChange }) {
    const [open, setOpen] = React.useState(false);
    const { pages, setCurrentScreen } =  useScreenAndAuth();


    const handleDrawer = () => {
        const newOpenState = !open;
        setOpen(newOpenState);
        if (onDrawerChange) {
            onDrawerChange(newOpenState);
        }
    };

    return (
        <>
            {/* Menu lateral */}
            <Drawer variant="permanent" open={open}
                PaperProps={{
                    sx: {
                        color: "white",
                    }
                }
                }>
                <DrawerHeader >
                    <IconButton onClick={handleDrawer}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {pages.map((page, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }} className='white'>
                            <ListItemButton
                                onClick={() => setCurrentScreen(page.page)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <img src={page.icon} width={45}/> 
                                
                                <ListItemText primary={page.page} sx={{ paddingLeft: 1 , opacity: open? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                </List>
                <Divider />

            </Drawer >
        </>
    );
};
