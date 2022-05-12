import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import './styles/main.css'
import './styles/reset.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools position="bottom-right" />
    <App />
  </QueryClientProvider>,
)
