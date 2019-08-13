module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  let VideoSchema = new Schema({
    name: { type: String },
    url: { type: String },
    title: { type: String, required: true },//标题
    createAt: { type: Date, default: Date.now }
  });
  return mongoose.model("Videolist", VideoSchema);
}