import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    makeStyles,
    Paper,
}from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        marginTop: '80px',
        boxShadow: 'none',
        width: '100%'
    },
    media:{
        height:320,
        width: 300,
        margin: "0 25px"
    },
    paperContainer:{
        display: 'flex',
        width: 'calc(100% - 200px)',
        float: 'right',
        boxShadow: 'none'
    }
})

const imgs = [
    {title: "MT03", src: '/img/mt03.jpg' },
    {title: "D-Tracker-X", src: '/img/d-tracker-x.jpg' },
    {title: "ninja300", src: '/img/ninja300.jpeg' },
]
const CardSlides = () =>{
    const classes = useStyles()
    return (
        <Paper className={classes.paperContainer}>
            { imgs.map( imagem => 
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image={imagem.src}
                        title={imagem.title}
                        />
                </CardActionArea>
            </Card>
            )}
        </Paper>
    )
}

export default CardSlides