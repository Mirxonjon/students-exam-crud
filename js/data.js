const students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [
  {
    id: 100,
    name: "Turkiya",
    lastName: "istanbul",
    mark: 140.5,
    markedDate: new Date("2021-12-05").toISOString()
  },
  {
    id: 101,
    name: "AQSH",
    lastName: "NEW york",
    mark: 146,
    markedDate: new Date("2021-12-06").toISOString()
  },
  {
    id: 102,
    name: "Buyuk  britanya",
    lastName: "Londor",
    mark: 75,
    markedDate: new Date("2021-12-01").toISOString()
  }
]
