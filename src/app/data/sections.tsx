import { Section } from "../components/WindowIcons"
import Profilo from "../components/Profilo"
import Progetti from "../components/Progetti"

export const sections: Section[] = [
  {
    id: 1,
    title: "IL MIO PROFILO",
    thumbnail: "/user-icon3.svg",
    component: <Profilo />,
  },
  {
    id: 2,
    title: "I MIEI PROGETTI",
    thumbnail: "/folder3.svg",
    component: <Progetti />,
  },
]
