function logOwnProerties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`obj[${key}]: ${obj[key]}`);
        }
    }
}