function solve(cars) {
    function getCarsByBrand(brand) {
        return cars.filter(car => car.brand === brand);
    }

    function addCar(id, brand, model, year, price, inStock) {
        const newCar = { id, brand, model, year, price, inStock };
        cars.push(newCar);
        return cars;
    }

    function getCarById(id) {
        const foundCarById = cars.find(car => car.id === id);

        if (foundCarById) {
            return foundCarById;
        }
        else {
            return `Car with ID ${id} not found`;
        }
    }

    function removeCarById(id) {
        const index = cars.findIndex(car => car.id === id);

        if (index !== -1) {
            cars.splice(index, 1);
            return cars;
        }
        else {
            return `Car with ID ${id} not found`;
        }
    }

    function updateCarPrice(id, newPrice) {
        const foundCar = cars.find(car => car.id === id);

        if (foundCar) {
            foundCar.price = newPrice;
            return cars;
        }        
            return `Car with ID ${id} not found`;        
    }

    function updateCarStock(id, inStock) {
        const foundCar = cars.find(car => car.id === id);

        if (foundCar) {
            foundCar.inStock = inStock;
            return cars;
        }        
            return `Car with ID ${id} not found`;        
    }

    return {
        getCarsByBrand,
        addCar,
        getCarById,
        removeCarById,
        updateCarPrice,
        updateCarStock
    };
}

let cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020, price: 20000, inStock: true },
    { id: 2, brand: "Honda", model: "Civic", year: 2019, price: 22000, inStock: true },
    { id: 3, brand: "Ford", model: "Mustang", year: 2021, price: 35000, inStock: false }
];

const dealership = solve(cars);
//const filteredCarsByBrand = dealership.getCarsByBrand("Toyota");
//console.log(JSON.stringify(filteredCarsByBrand));

//const newCar = dealership.addCar(4, "Tesla", "Model S", 2022, 80000, true);
//console.log(JSON.stringify(newCar));


//const foundCarById = dealership.getCarById(2);
//console.log(JSON.stringify(foundCarById));

//const removedCarById = dealership.removeCarById(4);

//console.log(JSON.stringify(removedCarById));

/*const carUpdatedPriceById = dealership.updateCarPrice(1, 50000);
const carUpdatedPriceById = dealership.updateCarPrice(4, 50000);
console.log(JSON.stringify(carUpdatedPriceById));*/

/*const carUpdatedStockById = dealership.updateCarStock(1, false);
const carUpdatedStockById = dealership.updateCarStock(4, true);
console.log(JSON.stringify(carUpdatedStockById));*/