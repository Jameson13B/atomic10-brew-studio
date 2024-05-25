/* eslint-disable react/prop-types */
import { useState } from "react"

export const AdminMenu = () => {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <div className="mt-[40px]">
      <p className="pb-12 text-large">Admin Menu</p>
      {authenticated ? (
        <CreateBrewForm />
      ) : (
        <AdminAuth setAuthenticated={setAuthenticated} />
      )}
    </div>
  )
}

const AdminAuth = (props) => {
  const [password, setPassword] = useState("")
  const handleAuth = () => {
    if (password === "atomic10") {
      props.setAuthenticated(true)
    }
  }
  return (
    <form className="bg-opacity-90 bg-[seashell] rounded-md p-12">
      <p className="dark:text-[#213547]">Authenticate</p>
      <input
        className="mb-12 px-[4px] w-full rounded"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <button onClick={handleAuth}>Login</button>
    </form>
  )
}

const CreateBrewForm = () => {
  return (
    <form className="bg-opacity-90 bg-[seashell] rounded-md p-12 mb-16">
      <p className="dark:text-[#213547]">Create Brew</p>
      <input
        className="mb-12 px-[4px] w-full rounded"
        placeholder="Name"
        type="text"
      />
      <input
        className="mb-12 px-[4px] w-full rounded"
        placeholder="Est. ABV"
        type="text"
      />
      <input
        className="mb-12 px-[4px] w-full rounded"
        placeholder="Pouring Date"
        type="date"
      />
      <div className="w-full">
        <p className="dark:text-[#213547] inline mr-6">Color A:</p>
        <input
          className="mb-12 px-[4px] rounded mr-12"
          placeholder="Color A"
          type="color"
        />
        <p className="dark:text-[#213547] inline mr-6">Color B:</p>
        <input
          className="mb-12 px-[4px] rounded"
          placeholder="Color B"
          type="color"
        />
      </div>
      <textarea
        className="mb-12 px-[4px] w-full rounded"
        placeholder="Description"
      />
      <button>Submit</button>
    </form>
  )
}
