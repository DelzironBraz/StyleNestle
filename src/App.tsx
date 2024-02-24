import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Home />
    </QueryClientProvider>
  )
}

export default App