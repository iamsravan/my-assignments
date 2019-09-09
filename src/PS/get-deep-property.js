function getDeepProperty(obj, path) {
  try {
    const pathArray = path.split(".");
    let objValue = obj;
    pathArray.forEach(key => {
      if (!objValue.hasOwnProperty(key)) {
        throw `invalid path: ${path}`;
      }
      objValue = objValue[key];
    });
    return objValue;
  } catch (e) {
    return e;
  }
}
const someObj = {
  person: {
    name: { first: "FirstName", middleInitial: "I", lastName: "LastName" }
  }
};
const value = getDeepProperty(someObj, "person.name.lastName");
console.log(value);
