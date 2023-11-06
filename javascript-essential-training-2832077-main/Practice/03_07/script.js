/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const car = {
    door : 2,
    spoiler : true,
    tires : 4,
    engine : {
        vales : 8,
        power : 840
    },
    lights: "On",
    toggleLights: function(lightStatus){
        this.lights = lightStatus
    },
    driveTrain: {
        FWD: true,
        AWD: false,
    },
    toggleDriveTrain: function(fwd,awd){
        this.driveTrain.AWD = awd
        this.driveTrain.FWD = fwd
    },
};

console.log("Lights are:",car.lights)
car.toggleLights("Off")
console.log("Now lights are:",car.lights)

console.log("Current Drive Train: ", "FWD = "+car.driveTrain.FWD, "AWD = ",+car.driveTrain.AWD)
car.toggleDriveTrain(false,true)
console.log("Current Drive Train: ", "FWD = "+car.driveTrain.FWD, "AWD = ",+car.driveTrain.AWD)