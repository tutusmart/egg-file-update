module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  let VideoSchema = new Schema({
    fileName: { type: String },
    filePath: { type: String },
    title: { type: String, required: true },//标题
    fileType: { type: String, default: '3' },
    createAt: { type: Date, default: Date.now }
  });
  return mongoose.model("Videolist", VideoSchema);
}