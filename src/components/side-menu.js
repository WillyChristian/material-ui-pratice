import react from 'react'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'

const DrawerControl = makeStyles(theme=>({
    root:{
        width: 240,
        flexShrink: 0
    },
}))
const SideMenu = () => {
    const classe = DrawerControl()
    return (
        <Drawer 
            className = {classe.root}
            variant="permanent"
            anchor="left"
        >
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
                    <ListItemIcon> <MailIcon /></ListItemIcon>
                    <ListItemText>Shoes</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon> <MailIcon /></ListItemIcon>
                    <ListItemText>Accessories</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText>Outfit</ListItemText>
                </ListItem>        
            </List>
        </Drawer>
    )
}
export default SideMenu