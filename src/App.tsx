import Container from "./components/Container";
import LayoutMain from "./pages/layout-main";

export default function App() {
  return (
    <Container 
      className="min-h-screen flex justify-center items-center px-2"
    >
      <LayoutMain/>
    </Container>
  );
}
