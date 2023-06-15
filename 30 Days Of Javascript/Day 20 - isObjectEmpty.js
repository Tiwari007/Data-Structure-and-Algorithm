var isEmpty = function(obj) {
    return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]";


    // 1 -  Check if an Object is Empty with Object.keys()
        // return Object.keys(obj).length === 0

    // 2 - Check if an Object is Empty with a for…in Loop
        // const isObjectEmpty = (objectName) => {
        //     for (let prop in objectName) {
        //     if (objectName.hasOwnProperty(prop)) {
        //         return false;
        //     }
        //     }
        //     return true;
        // };
      
        // console.log(isObjectEmpty(userDetails)); // false

    // 3 - Check if an Object is Empty with JSON.stringify()
        // return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]";
};