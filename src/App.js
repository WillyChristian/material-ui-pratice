import {
  ThemeProvider, 
  createMuiTheme, 
  Grid,
  makeStyles
} from '@material-ui/core'

//Components
import Header from './components/header'
import SideMenu from './components/side-menu'
import Slider from './components/slider'

const customStyle = createMuiTheme({
  palette:{
    primary:{
      main: "#000"
    },
    secondary:{
      main: "#fafad"
    }
  }
})

const GridStyles = makeStyles({
  root:{
    display: "flex"
  },
  main:{
    backgroundColor: '#9a9b9c',
    width:'100%',
    height:'100vh'
  },
  toolbar:{
    width: 240,
    height:'100%',
    backgroundColor: '#0a0b0c'
  },
  appBar:{
    width:'calc(100% - 240px)',
    height: 240,
    backgroundColor: '#7a7b7c'
  }
})


function App() {
  const gridStyle = GridStyles()
  return (   
    <div className={gridStyle.root}>
      <ThemeProvider theme={customStyle}> 
        {/* <Header />
        <SideMenu /> */}
        <Slider />
      </ThemeProvider>
    </div>   
  )
}

export default App;
