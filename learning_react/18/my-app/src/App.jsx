import React from "react";
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import Test from './test'

const App = () => {
  const Qc = new QueryClient();

  return (
    <QueryClientProvider client={Qc}>
      <Test/>
    </QueryClientProvider>
  )
}

export default App
