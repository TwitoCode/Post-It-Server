const Post = require('./models/Post');

module.exports = {
	Query: {
		posts: (parent, args) => {
			if (args.userID) return Post.find({ userID: args.userID });
			else if (args.username) return Post.find({ username: args.username });
			else return Post.find();
		},
	},

	Mutation: {
		createPost: (parent, args) => {
			const { userID, name, desc, username } = args;
			// console.log(userID, name, desc, username);

			if (!userID) return null;
			if (!name) return null;
			if (!desc) return null;
			if (!username) return null;

			// console.log('Created a new Post')
			const post = new Post({ userID, name, desc, username });
			
			return post.save();
		},
	},
};
