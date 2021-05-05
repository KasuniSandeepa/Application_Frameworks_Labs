/*
//In this file add all crud operations

//Create the database and the collection
const posts = require('./').db('posts').collection('posts')
/!*
--DB name : posts
--Collection Name : posts*!/



const save = async ({id, name, description, postedDate}) => {
    const result = await posts.insertOne({id, name, description,
        postedDate});
    return result;
};
module.exports = {save};
*/
