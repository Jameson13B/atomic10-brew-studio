import PropTypes from "prop-types"

export const BrewDetail = ({ brew, onClose }) => {
  console.log("BREW", brew)
  return (
    <div
      className={`h-[100vh] w-full z-10 fixed top-0 left-0 p-12 bg-gradient-to-r ${brew.colors[0]} ${brew.colors[1]}`}
    >
      <div className="h-full w-full dark:bg-[#242424] bg-[seashell] relative p-16">
        <p className="text-large">{brew.name}</p>
        <p className="text-[0.9rem] mt-12 px-12">Brewed by:</p>
        <p className="text-[0.9rem] px-12">{brew.brewed_by}</p>
        <p className="text-small mt-12 px-12">
          {brew.description || "More details coming soon!!"}
        </p>
        <hr className="m-24" />
        <p className="text-small px-12">
          {brew.event_details || "More details coming soon!!"}
        </p>
        {/* <div className="flex justify-between"> */}
        <p className="text-[0.9rem] mt-24 px-12">
          Pouring on:{" "}
          {brew.estimated_release.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            weekday: "short",
          })}
        </p>
        <p className="text-[0.9rem] mt-12 px-12">
          Total Brews Made: {brew.available_count + " ct" || "TBD"}
        </p>
        {/* </div> */}
        <button
          className="absolute top-[5px] right-[5px] px-[6px] py-0 text-[0.75rem] bg-transparent"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

BrewDetail.propTypes = {
  brew: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}
