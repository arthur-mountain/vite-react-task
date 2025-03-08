import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components";
import { Class } from "@/features/class";
import { Layout } from "./layout";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

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
      <div>
        <Button
          $size="lg"
          onClick={onOpen}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          Open Class
        </Button>
      </div>
      <Class isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}

export { App };
