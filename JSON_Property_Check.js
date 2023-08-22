//question 1
//How to compare two JSON have the same properties without order
//lets create two objects according to the task
let obj1 = {name:"person1", age:5};    
let obj2 = {age:5, name:"person1"};


let property_check = true  //A variable to check if they have same properties or not

 //to see if they both have same properties first they should have same length
if(Object.keys(obj1).length==Object.keys(obj2).length){  
     
    for(var key in obj1){     //here using for-in loop to get property key and check it if is available in both objects
        if(obj1[key]==obj2[key]){
            continue;
        }else{
             property_check = false //if property value are differnt then just break out of loop
             break;
        }
    }

}else{
    property_check = false
}
if(property_check){  // if property_check is true then the properties are same and viceversa
    console.log('The two Objects have same properties')
}else{
    console.log('The two objects have different properties')
}


