
const {MongoClient} = require('mongodb');

async function main(){
    //saves database URI
    const uri = "mongodb+srv://t-hyland:Tomh@cluster0.0uz4cny.mongodb.net/?retryWrites=true&w=majority";

    //creates client that is linked to the database
    const client = new MongoClient(uri);

    try {
        //connects client to the database
        await client.connect();

        await deleteByTitle(client, "a");
        await deleteByTitle(client, "b");
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
};

main().catch(console.error());

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function insertPost(client, post){
    await client.db("RateMyProffessor").collection("posts").insertOne(post);
    console.log("Added post " + post.title + " to RateMyProffessor collection posts.");
}

async function findPost(client, title){
    const result = await client.db("RateMyProffessor").collection("posts")
                            .find({title: title}).toArray(); 

    if (result) {
        console.log(result);
    } else {
        console.log("couldnt find post with title: " + title);
    }
}

async function deleteByTitle(client, title){
    const result = await client.db("RateMyProffessor").collection("posts")
                            .deleteMany({title: title});
}

async function getAllPosts(client) {
    const result = await client.db("RateMyProffessor").collection("posts").find().toArray();
    console.log(result);
}