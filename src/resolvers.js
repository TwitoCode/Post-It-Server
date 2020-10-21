const Post = require('./models/Post');

module.exports = {
	Query: {
		posts: (parent, args) => {
			if (args.userID !== null || '') return Post.find({ userID: args.userID });
			else if (args.username !== null || '')
				return Post.find({ username: args.username.toString().toLowerCase() });
			else return Post.find();
		},
		// post: (parent, args) => {
		// 	if (args.userID) return Post.findOne({ userID: args.userID });
		// 	if (args.username)
		// 		return Post.findOne({ username: args.username.toString().toLowerCase() });
		// },
	},

	Mutation: {
		createPost: (parent, args) => {
			const {
				data: { userID, name, desc, username },
			} = args;

			const lower = username.toString().toLowerCase();
			const post = new Post({ userID, name, desc, username: lower });
			return post.save();
		},
	},
};
