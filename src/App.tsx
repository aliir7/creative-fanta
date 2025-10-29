import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero />
      </UpdateFollower>
    </main>
  );
}

export default App;
