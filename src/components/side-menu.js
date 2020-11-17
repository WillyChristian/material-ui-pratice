import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';

const DrawerControl = makeStyles(theme=>({
    root:{
        width: 240,
        flexShrink: 0,
        boxShadow: 'none',
        border: 'none'
    },
    paperDiv:{
        height: 80,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        boxShadow: 'none'
    },
    paperProp:{
        width:'190px',
        height: '260px'
    },
    imgProp:{
        width:'190px',
        height:"250px",
        borderRadius: '15px',
        marginLeft:'5px',
        marginTop: '80px'
    }
}))
const SideMenu = () => {
    const classe = DrawerControl()
    return (
        <Drawer 
            className = {classe.root}
            variant="permanent"
            anchor="left"
        >
            <Paper className={classe.paperDiv} >
                <Typography variant='h5' >
                    l'écta
                </Typography>
            </Paper>
            <List>         
            <ListItem button >
                <ListItemIcon> <InboxIcon /> </ListItemIcon>
                <ListItemText>Now in</ListItemText>
            </ListItem>
                <ListItem button >
                    <ListItemIcon> <MailIcon /></ListItemIcon>
                    <ListItemText>Clothing</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon> <PhoneIphoneTwoToneIcon /></ListItemIcon>
                    <ListItemText>Shoes</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon> <PhoneAndroidOutlinedIcon /></ListItemIcon>
                    <ListItemText>Accessories</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><DesktopWindowsOutlinedIcon/></ListItemIcon>
                    <ListItemText>Outfit</ListItemText>
                </ListItem>        
            </List>
                <img className={classe.imgProp} src='/img/propaganda.png' alt='propaganda'/>
        </Drawer>
    )
}
export default SideMenu