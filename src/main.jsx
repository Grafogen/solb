import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChainId, ThirdwebProvider} from "@thirdweb-dev/react";
import {BrowserRouter, Router} from "react-router-dom";
import App from "./App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThirdwebProvider>
)