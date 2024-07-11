
import type { AppProps } from 'next/app'
import { Box } from '@mui/material'
import DashboardLayout from "../src/components/Layout";
import "../styles/styles.css";


function MyApp({ Component, pageProps }: AppProps) {
    return (
    <Box style={{width: "100vw"}}>
            <DashboardLayout>
                <Component {...pageProps} />
            </DashboardLayout>
    </Box>
    )
}

export default MyApp
