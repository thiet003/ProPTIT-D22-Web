const originalObject = {
    name: "Tung",
    age: 20,
    address: {
      city: "Vinh Yen",
      country: "Vietnam"
    }
};

function deepClone(obj) {
    if(!obj || typeof obj !== "object") {
        return obj;
    }

    if(Array.isArray(obj)) {
        const cloneArray = [...obj];
    }

    const cloneObject = {}
    Object.keys(obj).forEach(key => {
        cloneObject[key] = deepClone(obj[key]);
    });
    return cloneObject;
}

const cloneObject = deepClone(originalObject);

console.log(cloneObject);