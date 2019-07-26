// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidCreator{
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;  
    }
    volume(){
        return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }

}

  const cuboid2 = new CuboidCreator({
    length: 4,
    width: 5,
    height: 5,
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeCreator extends CuboidCreator{
    constructor(CuboidCreatorAttrs){
        super(CuboidCreatorAttrs)
    }

    cubeArea(){
        return 6 * (this.height + this.width)
    }

    cubeVolume(){
      return  6 * (this.height + this.width) * 3
    }
}
const cuboid3 = new CubeCreator({
    length: 8,
    width: 8,
    height: 8,
  })


console.log(cuboid3.cubeVolume());
console.log(cuboid3.cubeArea());


