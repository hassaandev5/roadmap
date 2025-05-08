const getUserData = (userId) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId > 0){
                resolve({ id: userId, name: "User " + userId})
            }
            else{
                reject("Invalid user ID " + userId)
            }
        },2000)
    })
}

const getUserDetails = (userId) => {
    getUserData(userId)
    .then((value) => {
        console.log(value.name)
    }).catch((error) => {
        console.log(error)
    })
}

getUserDetails(6)


