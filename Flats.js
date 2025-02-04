export default class Flat {
  constructor(
    id,
    city,
    streetName,
    streetNumber,
    areaSize,
    hasAC,
    yearBuilt,
    rentPrice,
    dateAvailable,
    imagesPaths
  ) {
    this.id = id;
    this.city = city;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
    this.areaSize = areaSize;
    this.hasAC = hasAC;
    this.yearBuilt = yearBuilt;
    this.rentPrice = rentPrice;
    this.dateAvailable = new Date(dateAvailable);
    this.images = imagesPaths;
  }
}

export const flats = [
  new Flat(
    1,
    "Vancouver",
    "Granville St",
    123,
    80,
    true,
    2005,
    2500,
    "2025-03-01",
    [
      "./assets/flatImages/1/1.jpg",
      "./assets/flatImages/1/2.jpg",
      "./assets/flatImages/1/3.jpg",
    ]
  ),
  new Flat(
    2,
    "Vancouver",
    "Robson St",
    45,
    90,
    false,
    2010,
    2200,
    "2025-02-15",
    [
      "./assets/flatImages/2/1.jpg",
      "./assets/flatImages/2/2.jpg",
      "./assets/flatImages/2/3.jpg",
    ]
  ),
  new Flat(
    3,
    "Vancouver",
    "Davie St",
    789,
    75,
    true,
    2015,
    1800,
    "2025-04-01",
    ["./assets/flatImages/3/1.jpg", "./assets/flatImages/3/2.jpg"]
  ),
  new Flat(
    4,
    "Vancouver",
    "Main St",
    67,
    100,
    false,
    2000,
    1600,
    "2025-03-20",
    ["./assets/flatImages/4/1.jpg", "./assets/flatImages/4/2.jpg"]
  ),
  new Flat(5, "Vancouver", "Broadway", 12, 85, true, 2018, 2000, "2025-03-10", [
    "./assets/flatImages/5/1.jpg",
    "./assets/flatImages/5/2.jpg",
  ]),
  new Flat(
    6,
    "Vancouver",
    "Kingsway",
    234,
    70,
    true,
    1998,
    3000,
    "2025-02-28",
    ["./assets/flatImages/6/1.jpg", "./assets/flatImages/6/2.jpg"]
  ),
  new Flat(
    7,
    "Vancouver",
    "Commercial Dr",
    56,
    95,
    false,
    2020,
    2100,
    "2025-03-05",
    [
      "./assets/flatImages/7/1.jpg",
      "./assets/flatImages/7/2.jpg",
      "./assets/flatImages/7/3.jpg",
    ]
  ),
  new Flat(
    8,
    "Vancouver",
    "West 4th Ave",
    33,
    65,
    true,
    2003,
    1900,
    "2025-04-15",
    [
      "./assets/flatImages/8/1.jpg",
      "./assets/flatImages/8/2.jpg",
      "./assets/flatImages/8/3.jpg",
    ]
  ),
  new Flat(
    9,
    "Vancouver",
    "East Hastings St",
    101,
    110,
    false,
    2012,
    1700,
    "2025-02-25",
    ["./assets/flatImages/9/1.jpg", "./assets/flatImages/9/2.jpg"]
  ),
  new Flat(
    10,
    "Vancouver",
    "Marine Dr",
    77,
    88,
    true,
    2007,
    1850,
    "2025-03-12",
    ["./assets/flatImages/10/1.jpg", "./assets/flatImages/10/2.jpg"]
  ),
];
