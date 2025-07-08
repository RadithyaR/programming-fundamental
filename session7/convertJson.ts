const obj =  {
    name : "Radithya",
    age : 22,
    Email : "radit$gmail.com",
};

 const jsonObj = JSON.stringify(obj);

 const parsedObj = JSON.parse(jsonObj)

// console.log(JSON.stringify(obj)); //dari obj ke json
// console.log(JSON.parse(jsonObj)); //dari json ke obj

export default obj;

export {
    jsonObj,
    parsedObj,
}