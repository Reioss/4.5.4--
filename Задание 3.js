

function NoProto() {
    const empty = Object.create(null);
    console.log(empty.constructor);
    console.log(empty.getPrototypeOf);
    console.log(empty.__proto__) 
}

NoProto()