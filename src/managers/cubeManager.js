const uniqueId = require('uniqid')
const cubes = [
    {
        id: '5vqnv2ukli4qdx0v',
        name: 'pesho gubreto',
        description: 'very funny', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUCdgv4rQFAC-NVMQtcqhbnHvWnsZvvVoYw&usqp=CAU',
        difficultyLevel: 2
    },
    {
        id: '5vqdfv2ukli4qdxiej212v',
        name: 'cube 1',
        description: 'very dummy', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3z6r05f2C9kM0rDi-zCDxF5D9gxFGKp7gg&usqp=CAU',
        difficultyLevel: 5
    },
    {
        id: '5vqnv2uk3sdi33qdx0v',
        name: 'other cube',
        description: 'very difficult', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3z6r05f2C9kM0rDi-zCDxF5D9gxFGKp7gg&usqp=CAU',
        difficultyLevel: 3
    }
];


exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId) 

exports.getAll = (search, from, to) => {
    let result =  cubes.slice();

    if(search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }

    if(to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return result;
}

exports.create = (cubeData) => {
    
    const newCube =  {
        id: uniqueId(),
        ...cubeData
    }
    
    cubes.push(newCube)

    return newCube
}