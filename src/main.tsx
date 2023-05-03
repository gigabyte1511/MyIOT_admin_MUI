import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import DevicePage from './components/pages/DevicePage/DevicePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import DeviceLog from './components/DeviceLog/DeviceLog'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // default: true
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'devices',
        element: <DevicePage />,
        children: [
          {
            path: '*',
            element: [<DeviceInfo />, <DeviceLog />]
          }

        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
