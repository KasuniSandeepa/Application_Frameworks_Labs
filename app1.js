//4th question

const fs = require('fs'); // import file system module to read the file


const fileName = __dirname+"/test.txt";
const outFileName =  __dirname+"/test-copy.txt";

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName); //  OutPut

//Pipe the read stream to write stream.
readStream.pipe(writeStream);


writeStream.addListener('end',()=>{
    console.log('End of file write');
    console.log(fs.readFileSync('test-copy.txt','utf-8'));
});

readStream.addListener('end',()=>{
    console.log('End of file read');
})



/*
readStream.on('data', data => {
    console.log(data.toString());
});
*/



