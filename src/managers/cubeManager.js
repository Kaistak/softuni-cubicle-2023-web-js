const uniqueId = require('uniqid')
const cube = [
    {
        id: '5vqnv2ukli4qdx0v',
        name: 'pesho gubreto',
        description: 'very funny', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUCdgv4rQFAC-NVMQtcqhbnHvWnsZvvVoYw&usqp=CAU',
        difficultyLevel: 2
    },
    {
        id: '5vqdfv2ukli4qdxiej212v',
        name: 'pesho gubret1o',
        description: 'very dummy', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3z6r05f2C9kM0rDi-zCDxF5D9gxFGKp7gg&usqp=CAU',
        difficultyLevel: 5
    },
    {
        id: '5vqnv2uk3sdi33qdx0v',
        name: 'pesho gubreto2',
        description: 'very difficult', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3z6r05f2C9kM0rDi-zCDxF5D9gxFGKp7gg&usqp=CAU',
        difficultyLevel: 3
    }
];


exports.getOne = (cubeId) => cube.find(x => x.id == cubeId) 

exports.getAll = () => cube.slice()

exports.create = (cubeData) => {
    
    const newCube =  {
        id: uniqueId(),
        ...cubeData
    }
    
    cube.push(newCube)

    return newCube
}