module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  let ImgSchema = new Schema({
    fileName: { type: String },
    url: { type: String },
    filePath: { type: String },
    fileType: { type: String, default : '1'},
    title: { type: String, required: true },//标题
    createAt: { type: Date, default: Date.now }
  });
  return mongoose.model("Imglist", ImgSchema);
}