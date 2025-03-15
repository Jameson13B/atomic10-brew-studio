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
        <div className="w-full max-h-[10%] z-10 bg-[seashell] dark:bg-[#242424] text-center sticky top-0 py-16">
          <h1
            className="inline-block"
            onClick={() => setShowAdminMenu(!showAdminMenu)}
          >
            Atomic10 Brew Studio
          </h1>
        </div>

        {showAdminMenu ? <AdminMenu /> : <BrewMenu />}
      </>
    </ConfigProvider>
  )
}

export default App
