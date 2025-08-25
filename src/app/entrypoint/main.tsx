import {createRoot} from 'react-dom/client'
import '../styles/reset.css'
import '../styles/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import App from "../../App.tsx";


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
