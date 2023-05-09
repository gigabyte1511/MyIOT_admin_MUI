import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import DevicePage from './components/pages/DevicesPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DeviceImageModal from './components/modals/DeviceImageModal'
import DeviceContainer from './components/DeviceInfo/DeviceContainer'
import AnalyticsPage from './components/pages/AnalyticsPage'

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
            path: ':id',
            element: <DeviceContainer />,
            children: [
              {
                path: 'edit',
                element: <DeviceImageModal />
              }
            ]
          }

        ]
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />
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
