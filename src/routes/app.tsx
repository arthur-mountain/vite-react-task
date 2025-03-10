import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { Class } from "@/features/class";
import { Layout } from "./layout";

function App() {
  return (
    <Layout>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Styled-Components + Redux</h1>
      <Class />
    </Layout>
  );
}

export { App };
