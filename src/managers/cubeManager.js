const cube = [];
const uniqueId = require('uniqid')

exports.getAll = () => cube.slice()

exports.create = (cubeData) => {
    
    const newCube =  {
        id: uniqueId(),
        ...cubeData
    }
    
    cube.push(newCube)

    return newCube
}