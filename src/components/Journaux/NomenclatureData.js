//This is data file
//It has all the data in the for of array which is used to render the tabs using map function

import {
  faFileAlt,
  faCircle,
  faUsers,
  faEnvelopeOpenText,
  faStopwatch,
  faCalendarAlt,
  faTasks,
  faThList
} from "@fortawesome/free-solid-svg-icons";
const NomenclatureData = [
  {
    id: 1,
    name: "Description",
    icon: faFileAlt,
    displayValue: null
  },
  { id: 2, name: "Statut", icon: faCircle, displayValue: null },
  { id: 3, name: "Équipe", icon: faUsers, displayValue: "Gabrielle Chevalier" },
  {
    id: 4,
    name: "Honoraires",
    icon: faEnvelopeOpenText,
    displayValue: "100 € / h"
  },
  { id: 5, name: "Durée", icon: faStopwatch, displayValue: "2 h" },
  { id: 6, name: "Dates", icon: faCalendarAlt, displayValue: "11 / 11 / 2020" },
  { id: 7, name: "Checklist", icon: faTasks, displayValue: "1 / 5" },
  { id: 8, name: "Champs", icon: faThList, displayValue: null }
];

export default NomenclatureData;
