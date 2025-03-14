import { STATUSES } from "./statuses"

export const brews = [
  {
    id: 1,
    name: "Peach Cobbler Seltzer",
    estimated_release: new Date("June 1, 2024"),
    estimated_abv: "6.5%",
    colors: ["from-[#eb8bb9]", "to-[#ed975a]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: STATUSES.GONE,
    description:
      "Indulge in the delightful essence of summer with our Peach Cobbler Seltzer. This beverage captures the sweet, juicy flavor of ripe peaches perfectly balanced with a hint of creamy vanilla, reminiscent of the classic dessert.",
    event_details:
      "Join us for Utah Pride weekend! This seltzer is currently finishing in the keg. Come sip, eat some good lunch, and swim in the pool. Invite your friends just let me know how many so I can ensure we have enough food.",
  },
  {
    id: 2,
    name: "Ghastly Grape Soda",
    estimated_release: new Date("June 29, 2024"),
    estimated_abv: "5.2%",
    colors: ["from-[#8359a3]", "to-[#ecdbf8]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: STATUSES.GONE,
    description:
      "The frighteningly deep purple color of this hard soda with all the lusciousness of the concord grape is exactly what you are expecting. Its tangy, sweet, and undeniably grapalicious.",
    event_details:
      "Take a trip back in time with our Ghastly Grape Soda. This is the first in our hard soda collection. Promises a unique twist on your favorite childhood soda, now with an adult-friendly twist. Paired with games and snacks to take you back to an afternoon after school.",
  },
  {
    id: 3,
    name: "Passionfruit Cider",
    estimated_release: new Date("July 20, 2024"),
    estimated_abv: "6.56%",
    colors: ["from-[#b000b5]", "to-[#bada55]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: STATUSES.GONE,
    description:
      "Experience the tropical allure of our Passionfruit Cider. A vibrant and tantalizing beverage that brings an exotic twist to the traditional cider. Bursting with the tangy, aromatic flavor of passionfruit, this cider offers a refreshing bite balanced by the natural sweetness of crisp apples.",
    event_details:
      "Come on a tropical getaway and try our Passionfruit Cider. It's just as good as it sounds and goes great with our island reggae playlist. Bring your sun kissed date, coconut scented sunscreen, and fantasize about the perfect exotic vacation.",
  },
  {
    id: 4,
    name: "Passionfruit Cider #2",
    estimated_release: new Date("October 11, 2024"),
    estimated_abv: "6.5%",
    colors: ["from-[#b000b5]", "to-[#bada55]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: STATUSES.GONE,
    description:
      "Back by popular demand! Experience the tropical allure of our Passionfruit Cider. A vibrant and tantalizing beverage that brings an exotic twist to the traditional cider. Bursting with the tangy, aromatic flavor of passionfruit, this cider offers a refreshing bite balanced by the natural sweetness of crisp apples.",
    event_details:
      "If you missed it the first time, here's your chance! Come on a tropical getaway and try our Passionfruit Cider. It's just as good as it sounds and goes great with our island reggae playlist. Bring your sun kissed date, coconut scented sunscreen, and fantasize about the perfect exotic vacation.",
  },
  {
    id: 5,
    name: "Carmel Apple Cider",
    estimated_release: new Date("October 11, 2024"),
    estimated_abv: "6.4%",
    colors: ["from-[#8B0000]", "to-[#90EE90]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: STATUSES.GONE,
    description:
      "Savor the essence of autumn with our Caramel Apple Cider. This delightful brew marries the crisp, refreshing taste of fresh apples with the rich, indulgent sweetness of caramel. Each sip offers a perfect balance of fruity and buttery notes, reminiscent of a classic fall treat. Experience the cozy warmth of the season in every glass of this nostalgic, expertly crafted cider.",
    event_details: "More details coming soon.",
  },
  {
    id: 6,
    name: "Bootlegger's Root Beer",
    estimated_release: new Date("April 12, 2025"),
    estimated_abv: "5.5%",
    colors: ["from-[#B87333]", "to-[#CD5C5C]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "20",
    status: STATUSES.PLANNING,
    description:
      "Indulge in our Bootlegger's Root Beer, a nostalgic treat with a grown-up twist. This creamy, smooth, and deliciously rooty brew combines the classic flavors of root beer with a surprising alcoholic kick. Crafted with real root beer extract and a hint of vanilla, it offers a rich, satisfying taste that harkens back to simpler times. Savor the complex blend of traditional root beer essence in every sip of this innovative, craft beverage.",
  },
  {
    id: 7,
    name: "Dank NEIPA",
    estimated_release: new Date("April 13, 2025"),
    estimated_abv: "6.5%",
    colors: ["from-[#dec744]", "to-[#a2dbec]"],
    brewed_by: "Atomic10 Studios",
    available_count: "10",
    status: STATUSES.PLANNING,
    description:
      "Hazy & chock full of juicy fruit flavors, our Dank NEIPA is silky-smooth with a creamy mouthfeel. Packed with Mosaic and Cascade hops this IPA is light on bitterness, super-hazy in color and heavy on delicious hop flavor.",
  },
  {
    id: 8,
    name: "Spiked Sunset Soda",
    estimated_release: new Date("May 16, 2025"),
    estimated_abv: "5.5%",
    colors: ["from-[#FFAA33]", "to-[#35B56E]"],
    brewed_by: "Atomic10 Studios + Barely Fiction Exp",
    available_count: "10",
    status: STATUSES.CONCEPT,
    description:
      "A refreshing blend of orange and pineapple, this hard soda is a perfect summer drink. It's light and bubbly, with a hint of sweetness from the orange and a tangy kick from the pineapple. You will want to sip this all summer long.",
  },
  {
    id: 9,
    name: "Liger's Blood Cider",
    estimated_release: new Date("May 16, 2025"),
    estimated_abv: "6.5%",
    colors: ["from-[#ff5946]", "to-[#ffffff]"],
    brewed_by: "Atomic10 Studios",
    available_count: "10",
    status: STATUSES.CONCEPT,
    description:
      "A strawberry and coconut teamed up to create this Liger's Blood cider. An adult snow cone, minus the snow and the cone, but with all the flavor. Fresh whole strawberries with a hint of coconut adds a refreshing tropical twist.",
  },
  {
    id: 10,
    name: "Cranberry Mint Seltzer",
    estimated_release: new Date("May 30, 2025"),
    estimated_abv: "5.5%",
    colors: ["from-[#DC143C]", "to-[#98FB98]"],
    brewed_by: "Atomic10 Studios",
    available_count: "10",
    status: STATUSES.CONCEPT,
    description:
      "Experience a refreshing burst of holiday cheer with our Cranberry Mint Seltzer. This crisp, effervescent brew combines the tart, vibrant notes of cranberry with the cool, invigorating essence of mint. Light and bubbly, it offers a perfect balance of fruity sweetness and herbal freshness. Each sip delivers a festive sparkle. Celebrate the season with this uniquely refreshing and subtly complex seltzer.",
  },
  // Hawaiian punch cider/seltzer
  // Orange soda
  // Ruby red grapefruit soda
]
