import React from 'react'
import { makeStyles } from '@material-ui/core'

import Articles from './article'
import Orders from './orders.js'

const indexLayout = makeStyles({
    root:{
        display: 'flex',
        float: "right",
        alignItems:'center',
    }
})

const Index = () =>{
    const layout = indexLayout()
    return (
        <div className={layout.root}>
            <Articles />
            <Orders />
        </div>
    )
}
export default Index