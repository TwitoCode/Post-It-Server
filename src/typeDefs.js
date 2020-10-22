const { gql } = require('apollo-server');

module.exports = gql`
	type Post {
		_id: ID
		name: String
		desc: String
		userID: ID
		username: String
	}

	type Query {
		posts(userID: ID, username: String): [Post]
	}

	input PostInput {
		_id: ID
		username: String!
		name: String!
		desc: String!
		userID: ID!
	}

	type Mutation {
		createPost(username: String, userID: ID, name: String, desc: String): Post
	}

	schema {
		query: Query
		mutation: Mutation
	}
`;