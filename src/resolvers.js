const Post = require('./models/Post');

export default {
	Query: {
		posts: () => {
			return Post.find();
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
