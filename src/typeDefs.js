const { gql } = require('apollo-server');

module.exports = gql`
	type Post {
		_id: ID
		name: String!
		desc: String!
		userID: ID!
	}

	type Query {
		posts: [Post]
		post(userID: ID): Post
	}

	input PostInput {
		_id: ID
		name: String!
		desc: String!
		userID: ID!
	}

	type Mutation {
		createPost(data: PostInput): Post
	}
`;
