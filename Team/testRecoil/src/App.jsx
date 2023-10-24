import "./App.css";
import MainPage from "./pages";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  // const { data } = useQuery({
  //   queryKey: ["getTodo"],
  //   queryFn: ApiTodo.getTodo,

  // });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <MainPage />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
