import Container from "./components/Container";
import { ServerStatusProvider } from "./contexts/server-status-context";
import LayoutMain from "./pages/layout-main";

export default function App() {
  return (
    <ServerStatusProvider>
      <Container 
        className="min-h-screen flex justify-center items-center px-2"
      >
        <LayoutMain/>
      </Container>
    </ServerStatusProvider>
  );
}
