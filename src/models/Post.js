const { model, Schema } = require('mongoose');

const Post = new Schema({
	name: { type: String, required: true },
	desc: { type: String, required: true },
	userID: { type: String, required: true },
});

module.exports = model('Post', Post);
