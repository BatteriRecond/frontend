import ForkLift from "../../images/redForklift.png";
import AgmBattery from "../../images/agm_battery.png";
import CarStartBattery from "../../images/car-battery.png";
import CarBattery from "../../images/car_battery.jpeg";
import TruckStartBattery from "../../images/truck_battery.png";
import ForkLiftBattery from "../../images/forklift_battery.png";
import ForkLiftBatteries from "../../images/forklift_batteries.jpeg";

export default [
  {
    title: "Startbatterier till bil",
    content: "Vi erbjuder både nya och rekondade bilbatterier, 45 Ah - 110 Ah",
    details: {
      newPrices: {
        priceLabel: <h6 className="ant-card"> Priser (Nya batterier) </h6>,
        prices: [{ label: "45 - 110 Ah", value: "Kontakta oss för pris" }],
      },
      recycledPrices: {
        priceLabel: (
          <h6 className="ant-card"> Priser (Rekondade batterier) </h6>
        ),
        prices: [
          { label: "45 - 64 Ah", value: "fr. 600 kr" },
          { label: "65 - 79 Ah", value: "fr. 700 kr" },
          { label: "80 - 99 Ah", value: "fr. 800 kr" },
          { label: "100 - 110 Ah", value: "fr. 900 kr" },
        ],
      },
    },
    imgSrcs: [CarStartBattery, CarBattery],
  },
  {
    title: "Startbatterier till lastbil",
    content:
      "Vi erbjuder både nya och rekondade lastbilsbatterier, 130 Ah - 230 Ah",
    details: {
      newPrices: {
        priceLabel: <h6 className="ant-card"> Priser (Nya batterier) </h6>,
        prices: [{ label: "130 - 230 Ah", value: "Kontakta oss för pris" }],
      },
      recycledPrices: {
        priceLabel: (
          <h6 className="ant-card"> Priser (Rekondade batterier) </h6>
        ),
        prices: [
          { label: "130 - 150 Ah", value: "fr. 1300 kr" },
          { label: "160 - 185 Ah", value: "fr. 1400 kr" },
          { label: "190 - 230 Ah", value: "fr. 1500 kr" },
        ],
      },
    },
    imgSrcs: [TruckStartBattery],
  },
  {
    title: "AGM/GEL Förbrukningsbatterier",
    content: "Vi har rekondade förbrukningsbatterier, 7 Ah - 200 Ah",
    imgSrcs: [AgmBattery],
    details: {
      recycledPrices: {
        priceLabel: (
          <h6 className="ant-card"> Priser (Rekondade batterier) </h6>
        ),
        prices: [
          { label: "7 - 200 Ah", value: "15kr/Ah" },
          { label: "Prisexempel:", value: "Batteri 100Ah x 15kr = 1500kr" },
        ],
      },
    },
  },
  {
    title: "Truckbatterier",
    content:
      "Vi monterar nya eller begagnade celler i ditt gamla trucktråg och anpassar priset efter dina behov och resurser.",
    imgSrcs: [ForkLiftBattery, ForkLiftBatteries],
    details: {
      recycledPrices: {
        priceLabel: (
          <h6 className="ant-card"> Priser (Rekondade batterier) </h6>
        ),
        prices: [
          { label: "150 - 3000 Ah", value: "Ring eller maila för prisförslag" },
        ],
      },
    },
  },
  {
    title: "Truckar",
    showMoreBtn: false,
    content: (
      <>
        Vi har ett stort utbud av begagnade truckar.
        <br />
        <br />
        Ring eller maila för mer info.
      </>
    ),
    imgSrcs: [ForkLift],
  },
];
