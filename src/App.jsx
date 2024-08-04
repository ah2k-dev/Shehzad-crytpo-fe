import "./App.css";
import Router from "./router/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import '@nextui-org/react/dist/nextui.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import { themeStore } from "./stores/themeStore.jsx";
const client = new QueryClient();
function App() {
const theme = themeStore((state) => state.theme)
  return (
    <div className={theme}>

    <QueryClientProvider client={client}>
      
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
    </div>
  );
}

export default App;
