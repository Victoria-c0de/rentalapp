import React from 'react';

const CarList = () => {
  const cars = [
    {id: 1, marca: "Ferrari", modelo: "488 GTB", anio: 2020},
    {id: 2, marca: "Lamborghini", modelo: "Huracán", anio: 2021},
    {id: 3, marca: "Porsche", modelo: "911 Turbo S", anio: 2021},
    {id: 4, marca: "McLaren", modelo: "720S", anio: 2022},
    {id: 5, marca: "Aston Martin", modelo: "Vantage", anio: 2021}
  ];

  return (
    <>
      {cars.map((car) => (
        <option key={car.id} value={car.id}>
          {car.marca} {car.modelo} ({car.anio})
        </option>
      ))}
    </>
  );
};

export default CarList;
