
const users = [ 
    {
        id: 1,
        name: 'Hiram'
    },
    {
        id: 2,
        name: 'Axel'
    },
];

const getUserById = (id, callback) => {
    const user = users.find( user => user.id === id )

    if ( !user ) return callback('User not found')
    return callback (null, user)
}

module.exports = {
    getUserById
}