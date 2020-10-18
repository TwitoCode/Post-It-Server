const { ApolloServer } = require('apollo-server');
const { connect } = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const connectMongo = async () => {
	try {
		await connect(
			'mongodb+srv://Admin:admin@projects.dkkdp.mongodb.net/Projects?retryWrites=true&w=majority',
			{ useNewUrlParser: true, useUnifiedTopology: true }
		);

		console.log('Connected to MongoDB');
	} catch (error) {
		console.log(error.message);
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
	try {
		const { url } = await server.listen({ port: process.env.PORT });
		console.log(`Server running on ${url}`);
	} catch (error) {
		console.log(error.message);
	}
};

startServer();
connectMongo();
