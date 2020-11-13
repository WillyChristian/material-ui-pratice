import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    makeStyles,
    Typography,
    CardContent
}from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems:'center',
        margin: '5px 10px'
    },
    media:{
        height:150,
        width: 150,
    },
    textContent:{
        width:150
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
        <>
        { imgs.map( imagem => 
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={imagem.src}
                    title={imagem.title}
                    />
            </CardActionArea>
            <CardContent className={classes.textContent}>
                <Typography>
                    {imagem.title}
                </Typography>
            </CardContent>
        </Card>
        )}
    </>
    )
}

export default CardSlides