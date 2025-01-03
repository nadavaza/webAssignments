import mongoose from "mongoose";

export interface IComments {
  content: string;
  writer: mongoose.Schema.Types.ObjectId;
  postId: mongoose.Schema.Types.ObjectId;
}

const commentsSchema = new mongoose.Schema<IComments>({
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts",
    required: true,
  },
});

const commentsModel = mongoose.model<IComments>("Comments", commentsSchema);

export default commentsModel;
