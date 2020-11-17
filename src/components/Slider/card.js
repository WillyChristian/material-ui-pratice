import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    makeStyles,
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
        </Card>
        )}
    </>
    )
}

export default CardSlides