import { useState } from "react"
import { ConfigProvider, theme } from "antd"

import "./App.css"
import { AdminMenu } from "./AdminMenu"
import { BrewMenu } from "./BrewMenu"

function App() {
  const [showAdminMenu, setShowAdminMenu] = useState(false)

  return (
    <ConfigProvider
      theme={{
        algorithm: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
      }}
    >
      <>
        <div className="w-full max-h-[20%] z-10 bg-[seashell] dark:bg-[#242424] text-center sticky top-0 py-16">
          <h1
            className="inline-block mb-0"
            onClick={() => setShowAdminMenu(!showAdminMenu)}
          >
            Atomic10 Brew Studio
          </h1>
          <p className="text-xs max-w-[600px] mx-auto mt-2">
            We craft <span className="underline">ultra-small</span> batches—just
            2 gallons or less at a time—giving us the freedom to explore bold
            flavors, unexpected ingredients, and anything that piques our
            curiosity. Please join us for a pint of creativity from{" "}
            <a
              href="https://atomic10.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atomic10 Studio
            </a>
            .
          </p>
        </div>

        {showAdminMenu ? <AdminMenu /> : <BrewMenu />}
      </>
    </ConfigProvider>
  )
}

export default App
