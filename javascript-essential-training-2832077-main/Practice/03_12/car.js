class Car {
    constructor(
        Brand,
        name,
        doors,
        lightsOn,
        fwd,
        awd
    )
    {
        this.Brand = Brand;
        this.Name = name;
        this.Doors = doors;
        this.lightsOn = lightsOn;
        this.DriveTrain = {
            FWD: fwd,
            AWD: awd
        }
    }
    toggleDrive(Front, All){
        this.DriveTrain.FWD = Front;
        this.DriveTrain.AWD = All;
    }
    toggleLights(LightStatus){
        this.lightsOn = LightStatus;
    }
}

export default Car