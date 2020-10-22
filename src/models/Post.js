const { model, Schema } = require('mongoose');

const Post = new Schema({
	name: { type: String, required: false },
	desc: { type: String, required: false },
	userID: { type: String, required: false },
	username: { type: String, required: false },
});

module.exports = model('Post', Post);
