import { useState } from "react"
import { BrewDetail } from "./BrewDetail"

export const BrewList = () => {
  const [currentBrew, setCurrentBrew] = useState(null)

  return (
    <div
      className={`py-[40px] h-[100vh] ${
        currentBrew ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      {brews.map((brew) => {
        const [start = "", finish = ""] = brew.colors
        const rowStyles = `opacity-90 bg-gradient-to-r ${start} ${finish} rounded-md p-12 mb-16 cursor-pointer`

        return (
          <div
            className={rowStyles}
            key={brew.id}
            onClick={() => setCurrentBrew(brew)}
          >
            <p className="text-medium dark:text-[#213547]">{brew.name}</p>

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
              | Est ABV: {brew.estimated_abv}
            </p>
            {/* <hr className="mx-16 my-6" /> */}
            <p className="text-small rounded-md bg-opacity-50 bg-[seashell] p-6 dark:text-[#213547]">
              {brew.description}
            </p>
            <p className="text-small mt-6 dark:text-[#213547]">
              Brewed by: {brew.brewed_by}
            </p>
          </div>
        )
      })}

      {currentBrew && (
        <BrewDetail brew={currentBrew} onClose={() => setCurrentBrew(null)} />
      )}
    </div>
  )
}

const brews = [
  {
    id: 1,
    name: "Peach Cobbler Seltzer",
    estimated_release: new Date("June 1, 2024"),
    estimated_abv: "6.5%",
    colors: ["from-[#eb8bb9]", "to-[#ed975a]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: "KEGGED",
    description:
      "Indulge in the delightful essence of summer with our Peach Cobbler Seltzer. This beverage captures the sweet, juicy flavor of ripe peaches perfectly balanced with a hint of creamy vanilla, reminiscent of the classic dessert.",
    event_details:
      "Join us for Utah Pride weekend! This seltzer is currently finishing in the keg. Come sip, eat some good lunch, and swim in the pool. Invite your friends just let me know how many so I can ensure we have enough food.",
  },
  {
    id: 2,
    name: "Passionfruit Cider",
    estimated_release: new Date("June 14, 2024"),
    estimated_abv: "6%",
    colors: ["from-[#b000b5]", "to-[#bada55]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: "PLANNING",
    description:
      "Experience the tropical allure of our Passionfruit Cider. A vibrant and tantalizing beverage that brings an exotic twist to the traditional cider. Bursting with the tangy, aromatic flavor of passionfruit, this cider offers a refreshing bite balanced by the natural sweetness of crisp apples.",
    event_details:
      "Come on a tropical getaway and try our Passionfruit Cider. It's just as good as it sounds and goes great with our island reggae playlist. Bring your sun kissed date and fantasize about the perfect exotic vacation.",
  },
  {
    id: 3,
    name: "Ghastly Grape Soda",
    estimated_release: new Date("June 20, 2024"),
    estimated_abv: "5.2%",
    colors: ["from-[#ecdbf8]", "to-[#8359a3]"],
    brewed_by: "Atomic10 Studios",
    available_count: "10",
    status: "PLANNING",
    description:
      "The frighteningly deep purple color of this hard soda with all the lusciousness of the concord grape is exactly what you are expecting. Its tangy, sweet, and undeniably grapalicious.",
  },
  {
    id: 4,
    name: "Dank NEIPA",
    estimated_release: new Date("June 27, 2024"),
    estimated_abv: "8.5%",
    colors: ["from-[#dec744]", "to-[#a2dbec]"],
    brewed_by: "Atomic10 Studios",
    available_count: "10",
    status: "PLANNING",
    description:
      "Hazy & chock full of juicy fruit flavors, our Dank NEIPA is silky-smooth with a creamy mouthfeel. Packed with Mosaic and Cascade hops this IPA is light on bitterness, super-hazy in color and heavy on delicious hop flavor.",
  },
  {
    id: 5,
    name: "Liger's Blood Cider",
    estimated_release: new Date("July 4, 2024"),
    estimated_abv: "6.1%",
    colors: ["from-[#ff5946]", "to-[#ffffff]"],
    brewed_by: "Atomic10 Studios",
    available_count: "10",
    status: "CONCEPT",
    description:
      "A strawberry and coconut teamed up to create this Liger's Blood cider. An adult snow cone, minus the snow and the cone, but with all the flavor. Fresh whole strawberries with a hint of coconut adds a refreshing tropical twist.",
  },
  // Fruit punch cider
]
