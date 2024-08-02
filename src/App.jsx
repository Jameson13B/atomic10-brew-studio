import { useState } from "react"
import "./App.css"
import { BrewList } from "./Brewlist"
import { AdminMenu } from "./AdminMenu"

function App() {
  const [showAdminMenu, setShowAdminMenu] = useState(false)

  return (
    <>
      <div className="w-full h-[5%] z-10 bg-[seashell] dark:bg-[#242424] text-center">
        <h1 className="my-16" onClick={() => setShowAdminMenu(!showAdminMenu)}>
          Atomic10 Brew Studio
        </h1>
      </div>

      {showAdminMenu ? <AdminMenu /> : <BrewList />}
    </>
  )
}

export default App
