const cube = [];


exports.getAll = () => cube.slice()

exports.create = (cubeData) => {
    
    const newCube =  {
        id: cube.length + 1,
        ...cubeData
    }
    
    cube.push(newCube)

    return newCube
}