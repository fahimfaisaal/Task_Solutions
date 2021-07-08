console.clear();

function isObject(obj) {
    if (obj instanceof Object) {
        return true;
    }

    return false;
}

function resetObject(object) {
    const resetObj = {};

    for (const key in object) {
        const type = typeof object[key];

        resetObj[key] = (
            type === 'string' ? ''
                : type === 'number' ? 0
                    : type === 'bigint' ? 0n
                        : type === 'boolean' ? false
                            : Array.isArray(object[key]) ? []
                                : isObject(object[key]) ? resetObject(object[key])
                                    : null
        );
    }

    return resetObj;
}

const object = {
    name: 'fahim faisal',
    age: 22,
    address: {
        city: 'Rajshahi',
        town: 'par-naogoan, Naogaon',
        country: 'Bangladesh'
    },
    skills: ['c', 'java', 'javascript', 'python']
};

const resetObj = resetObject(object);
console.log(resetObj);