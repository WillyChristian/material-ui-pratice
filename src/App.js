import {
  ThemeProvider, 
  createMuiTheme, 
  CssBaseline,
  makeStyles,
  Grid
} from '@material-ui/core'

//Components
import Header from './components/header'
import SideMenu from './components/side-menu'
import Card from './components/Slider/card'

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

function App() {
  return (   
    <div>
      <CssBaseline/>
      <ThemeProvider theme={customStyle}>
        <SideMenu />
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
      </ThemeProvider>
    </div>   
  )
}

export default App;
