const dbpassword = encodeURIComponent('PlacementCell@codingninjas');
const development = {
    name :'developement',
    mongoose_path :`mongodb+srv://anuragv:${dbpassword}@cluster0.emzh9dy.mongodb.net/?retryWrites=true&w=majority`,
}
module.exports = development;