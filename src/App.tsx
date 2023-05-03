import { Button } from '@mui/material'
// import styled from 'styled-components'
import { styled } from '@mui/material/styles'
import SiteDrawer from './components/SiteDrawer/SiteDrawer'
import { Outlet } from 'react-router-dom'

const MyButton = styled(Button)({
  padding: 5,
  margin: 10
}) as typeof Button

function App(): JSX.Element {
  return (
    <>
      <SiteDrawer component={<Outlet />} />
    </>
  )
}

export default App
