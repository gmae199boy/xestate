const Post = require('../../model/post');
// id: {
//     type: Number,
//     unique: true,
// },
// name: {
//     type: String,
// },
// roomType: {
//     type: String,
// },
// dealType: {
//     type: String,
// },
// price: {
//     type: Number,
// },
// address: {
//     type: String,
// },
// registDealer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Dealer',
// }

const createPosts = async () => {
    try{
        const one = new Post({
            name: 'one', roomType: 'cash', dealType: '??', price: 10000, address: '청계산',
        });
        const two = new Post({
            name: 'two', roomType: 'cash', dealType: '??', price: 200, address: '정원',
        });
        const three = new Post({
            name: 'three', roomType: 'card', dealType: '??', price: 10000, address: '집앞'
        });
        console.log(one);
        console.log(two);
        console.log(three);
        await one.save();
        await two.save();
        await three.save();
        return true
    } catch (e) {
        console.log(e);
    }
}

const readPost = async (req, res) => {
    try {
        const firstId = await Post.findByPostId(0);
        if (firstId == undefined) {
            await createPosts();
        }
        const { post } = await Post.findByPostId(req.params);
        return post;
    } catch (e) {
        console.log(e);
    }
}

const createPost = async (req, res) => {
    try {
        const newPost = new Post({...req.body});
        return newPost.save();
    } catch (e) {
        console.log(e);
    }
}

const deletePost = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

const updatePost = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

module.exports = {readPost, createPost, deletePost, updatePost};