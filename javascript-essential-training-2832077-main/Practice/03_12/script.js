/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Car from "./car.js"

const newBackPack = new Backpack(
    "Tron",
    30,
    "blue",
    5,
    20,
    21,
    false
);

const HyperCar = new Car(
    "Bugatti",
    "Veyron",
    2,
    true,
    false,
    true
)

console.log(newBackPack.strapLength.left)
console.log(HyperCar.DriveTrain.FWD)
HyperCar.toggleDrive(true,false)
HyperCar.toggleLights(false)
console.log(HyperCar.DriveTrain.FWD)
console.log(HyperCar.lightsOn)  