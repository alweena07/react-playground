import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { BrowserRouter } from "react-router-dom";
import AzureProvider from './app/providers/azure.tsx';

const root = createRoot(document.getElementById('root')!);

function bootstrap() {

  root.render(
    <StrictMode>
      <BrowserRouter>
        <AzureProvider>
          <App />
        </AzureProvider>
      </BrowserRouter>
    </StrictMode>,
  )
}

bootstrap();