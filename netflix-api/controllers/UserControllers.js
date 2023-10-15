const { json } = require("express");
const User = require("../models/UserModel");
const Operations = require("../server");

module.exports.addToLikedMovies = async(req,res)=>{
    try {
        const{email,data} = req.body;
        const user = await User.findOne({email});
        if(user){
            const{likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find(({id})=>(id===data.id));
            if(!movieAlreadyLiked){
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies:[...user.likedMovies,data],
                    },
                    {new:true}
                );
            }else return res,json({msg:"Movie Already added to liked list."});
        }else await User.create({email,likedMovies:[data]})
        return res.json({msg:"Movie Added Successfully"});
    } catch (error) {
        return res.json({msg:"Error adding movie"});
    }
};

module.exports.getLikedMovies = async(req,res)=>{
    try {
        const {email} = req.params;
        const user = await User.findOne({email});

        if(user){
            res.json({msg: "Success" , movies : user.likedMovies});
        }else return res.json({msg:"User with given email not found."});

    } catch (error) {
        return res.json({msg: "Error fetching movie"})
    }
}

module.exports.removeFromLikedMovies = async(req,res)=>{
    try {
        const{email,movieId} = req.body;
        const user = await User.findOne({email});
        if(user){
            const{likedMovies} = user;
            const movieIndex = likedMovies.findIndex(({id})=> id === movieId);
            if(!movieIndex) res.status(400).send({msg:"Movie not found"})
            likedMovies.splice(movieIndex,1);
            await User.findByIdAndUpdate(
                user._id,
                {
                    likedMovies,
                },
                {new:true}
            );
            return res.json({msg: "Movie Deleted",movies:likedMovies})
            // return likedMovies;
        }
        }catch (error) {
            // console.log(error);
            return res.json({msg:"Error deleting movie"});
    }
}

// const url = `mongodb+srv://divi:Iy79uaMlha8nZmjh@netflix-cluster.e4o7mel.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(url);
// if (client){ 
//     console.log("Db Connencted");
// }

// module.exports.addToLikedMovies = async(req,res)=>{
//     try {
//         const database = client.db("netflix");
//         const user = database.collection("user");

//         const{email,data} = req.body;


//     } catch (error) {
//         console.log(error);
//     }
// }