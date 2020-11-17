import React from 'react'
import { AppBar, Toolbar, ButtonGroup, Button,TextField, IconButton, Avatar } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import SettingsIcon from '@material-ui/icons/Settings'

const headerStyle = makeStyles((theme) =>({
    head: {
        boxShadow: 'none',
        width:  `calc(100% - 210px)`,
        float: 'rigth',
        
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between"
    },
    buttonBLK:{
        color:"#f1f1f1",
        borderRadius: 10,
        fontWeight: 'bold',
        backgroundColor: "#000"
    },
    buttonWHT:{
        borderRadius: 12,
        backgroundColor: "#fafad"
    },
    search:{
        borderRadius: 10,
        backgroundColor: "#fafafd"
    },
    rightMenu:{
        marginRight: 25,
        marginLeft: 10,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    icon:{
        color: "#010509",
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    avatar:{
        width: theme.spacing(4),
        height: theme.spacing(4)
    }
    })
)
const Header = () =>{
    const headClass = headerStyle()
    return (
        <>
        <AppBar position='fixed' color='inherit' className={headClass.head}>
            <Toolbar className={headClass.toolbar}>
                <div className="btns">
                    <ButtonGroup>
                        <Button variant="outlined" className={headClass.buttonBLK}>MAN</Button>
                        <Button variant="outlined" className={headClass.buttonWHT}>WOMAN</Button>                            
                    </ButtonGroup>
                </div>
                <div className={headClass.search}>
                    <IconButton>
                        <SearchIcon color='secondary'/>
                    </IconButton>
                    <TextField id="standard-basic" label="Standard" />
                </div>
                <div className={headClass.extend}></div>
                <div className={headClass.rightMenu}>
                        <Avatar alt="avatar-client" className={headClass.avatar}>CL</Avatar>
                        <IconButton aria-label="config"><SettingsIcon className={headClass.icon}/></IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header