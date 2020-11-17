import React from 'react'
import { Typography, AppBar, Tabs, Tab } from '@material-ui/core'

const Article = () =>{
    return (
        <div>
            <Typography variant='h6'> Artigos</Typography>
            <AppBar position="static">
                <Tabs>
                    <Tab label="Artigo 1" />
                    <Tab label="Artigo 4" />
                </Tabs>
            </AppBar>
        </div>
    )
}
export default Article