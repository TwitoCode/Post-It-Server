const Post = require('./models/Post');

module.exports = {
	Query: {
		posts: (parent, args) => {
			return Post.find({ userID: args.userID });
		},
		post: (parent, args) => {
			return Post.findOne({ userID: args.userID });
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
