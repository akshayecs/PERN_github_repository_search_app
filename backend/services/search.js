const axios = require('axios');

const handleGetGithubRepositoryByUsername = async(args) => {
    try {
        const {username} = args.data;
                
        const role = args.role;
        if(role !== 'admin'){
            return {status:401,message:"You are Unauthorized for this operation",data:null}
        }
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        // Extract necessary data from the response
        const repositories = response.data.map(repo => ({
            name: repo.name,
            description: repo.description,
            watcherCount: repo.watchers_count
        }));
        
        if(!repositories.length){
            return {status:404,message:"Username Not Found",data:null}
        }
        repositories.sort((a, b) => b.watcherCount - a.watcherCount);

        return {
            status:200,
            message:"success",
            data:{ 
                avatarUrl: `https://github.com/${username}.png`, 
                repositories:repositories 
            }
        }

    } catch (error) {
        return {status:400,mesage:"internal Server Error",data:null}
    }
}

module.exports = {
    handleGetGithubRepositoryByUsername
}