import { ServerStatusProvider } from "./contexts/server-status-context";
import LayoutMain from "./pages/layout-main";

export default function App() {
  return (
    <ServerStatusProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <LayoutMain/>
      </div>
    </ServerStatusProvider>
  );
}
