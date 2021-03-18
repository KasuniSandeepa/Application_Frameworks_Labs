

//1 st question
console.log("Hello Wolrd");

console.error("Something went wrong");

//console.error(new Error('Something went wrong'));

//2nd question
const os = require('os');

console.log('Architecture '+os.arch);
console.log('CPUs '+os.cpus().length);
console.log('OS '+os.platform());

for(const cpu of os.cpus()){
    console.log(cpu);
}

console.log(os.uptime());

//3rd Question
const fs = require('fs'); // import file system module to read the file
const fileName = __dirname+'/test.txt'; //Using the system variable __dirname to set the location

//Read the file using readFile asynchronous method and print the content of the file
// to console.

fs.readFile(fileName , (err,data)=>{
    //err is an exception , this is not a boolean value
    //but it checks following conditions
    //err = null => false
    //err = undefined => false
    //err = 0 => false
    //err = '' => false  /!*****last three are not valid for objects***********!/
    //err = false => false
    if(err){
        console.error(err);
        return;
    }
    console.log(data.toString());
});



const data = fs.readFileSync(fileName);
console.log(data.toString());



fs.readFile(fileName , 'utf-8',(err,data)=>{
    //err is an exception , this is not a boolean value
    //but it checks following conditions
    //err = null => false
    //err = undefined => false
    //err = 0 => false
    //err = '' => false  /!*****last three are not valid for objects***********!/
    //err = false => false
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

fs.readFile(fileName ,(err,data)=>{
    //err is an exception , this is not a boolean value
    //but it checks following conditions
    //err = null => false
    //err = undefined => false
    //err = 0 => false
    //err = '' => false  /!*****last three are not valid for objects***********!/
    //err = false => false
    if(err){
        console.error(err);
        return;
    }
    console.log(data.toString('utf-8'));
});