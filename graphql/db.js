export const People = [
  {
    id: "0",
    name: "Rakim",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "Francis",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Christoper",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "Webster",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "Oster",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "Ringgo",
    age: 18,
    gender: "male"
  },
  {
    id: "6",
    name: "Earl",
    age: 18,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = People.filter(person => person.id === String(id));
  return filteredPeople[0];
}