// import { Button } from '@mui/material'
import SiteDrawer from './components/SiteDrawer/SiteDrawer'
import { Outlet } from 'react-router-dom'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

// const MyButton = styled(Button)({
//   padding: 5,
//   margin: 10
// }) as typeof Button

const themeLight = createTheme({
  palette: {
    background: {
      default: '#e5ecf1'
    }
  }
})

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <SiteDrawer component={<Outlet />} />
      </ThemeProvider>
    </>
  )
}

export default App
