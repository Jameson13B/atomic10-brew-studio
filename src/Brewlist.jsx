import { useState } from "react"
import { BrewDetail } from "./BrewDetail"
import { STATUSES } from "./statuses"
import { brews } from "./brews"

export const BrewList = () => {
  const [currentBrew, setCurrentBrew] = useState(null)

  return (
    <div
      className={`h-[calc(95%-40px)] ${
        currentBrew ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      {currentBrew ? (
        <BrewDetail brew={currentBrew} onClose={() => setCurrentBrew(null)} />
      ) : (
        brews
          .sort((a, b) => {
            if (a.status === STATUSES.GONE && b.status !== STATUSES.GONE) {
              return 1
            } else if (
              a.status !== STATUSES.GONE &&
              b.status === STATUSES.GONE
            ) {
              return -1
            } else {
              return 0
            }
          })
          .map((brew) => {
            const [start = "", finish = ""] = brew.colors
            const rowStyles = `opacity-90 bg-gradient-to-r ${start} ${finish} rounded-md p-12 mb-16 cursor-pointer relative group hover:opacity-100 transition-all duration-300`
            const contentStyles = `transition-all duration-300 group-hover:scale-110 group-hover:opacity-100`

            return (
              <div
                className={rowStyles}
                key={brew.id}
                onClick={() => setCurrentBrew(brew)}
              >
                <p
                  className={`text-medium dark:text-[#213547] ${contentStyles}`}
                >
                  {brew.name}
                </p>

                <p className="text-small mb-[4px] dark:text-[#213547]">
                  Status: {brew.status}
                </p>
                <p className="text-small mb-[8px] dark:text-[#213547]">
                  Pouring:{" "}
                  {brew.estimated_release.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    weekday: "short",
                  })}{" "}
                  |{" "}
                  {[
                    STATUSES.CONCEPT,
                    STATUSES.PLANNING,
                    STATUSES.BREWING,
                  ].includes(brew.status) && "Est "}
                  ABV: {brew.estimated_abv}
                </p>
                <p className="text-small rounded-md bg-opacity-50 bg-[seashell] p-6 dark:text-[#213547]">
                  {brew.description}
                </p>
                <p className="text-small mt-6 dark:text-[#213547]">
                  Brewed by: {brew.brewed_by}
                </p>
                {/* Status tags */}
                {brew.status === STATUSES.GONE && (
                  <p className="absolute top-[24px] right-[6px] rotate-[40deg] text-small dark:text-[#213547] [text-shadow:_1.5px_1.5px_0_rgb(256_256_256_/_50%)]">
                    ALL GONE
                  </p>
                )}
                {brew.status === STATUSES.KEGGED && (
                  <p className="absolute top-[28px] right-0 rotate-[35deg] text-small dark:text-[#213547] [text-shadow:_1.5px_1.5px_0_rgb(256_256_256_/_50%)]">
                    GRAB A GLASS
                  </p>
                )}
                {brew.status === STATUSES.GONE && (
                  <p className="absolute top-[24px] left-[6px] -rotate-[40deg] text-small dark:text-[#213547] [text-shadow:_1.5px_1.5px_0_rgb(256_256_256_/_50%)]">
                    ALL GONE
                  </p>
                )}
              </div>
            )
          })
      )}
    </div>
  )
}
