// const {sum,mul} =require("./functions")



// sum(5,6);
// mul(5,7);

// os moudles 

// const os =require("os");
// console.log(os);

// console.log(os.type);

// console.log(os.cpus());

// console.log(os.cpus().length);


//file system module
const fs =require("fs");

fs.writeFile("sample.txt", "wellcome to node js",()=>{
    console.log("file created")
    
});
fs.appendFile("sample.txt","Wellcome to all node class student",()=>{
    console.log("file modified")
})

