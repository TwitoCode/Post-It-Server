const Post = require('./models/Post');

module.exports = {
	Query: {
		posts: (parent, args) => {
			if (args.userID) return Post.find({ userID: args.userID });
			return Post.find();
		},
		post: (parent, args) => {
			if (args.userID) return Post.findOne({ userID: args.userID });
			if (args.username)
				return Post.findOne({ userID: args.username.toString().toLowerCase() });
		},
	},

	Mutation: {
		createPost: (parent, args) => {
			const {
				data: { userID, name, desc },
			} = args;

			const post = new Post({ userID, name, desc });
			return post.save();
		},
	},
};
