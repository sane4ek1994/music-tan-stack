import {createRoot} from 'react-dom/client'
import './reset.css'
import './index.css'
import App from '../../App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                staleTime: Infinity,
                refetchOnMount: false,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                gcTime: 5 * 1000,
            },
        },
    }
)

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider  client={queryClient}>
        <App/>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >)
