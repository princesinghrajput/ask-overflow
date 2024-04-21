"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-empty
  try {
    // connect to DB
    connectToDatabase();
  } catch (error) {}
}

export async function editQuestion(params: any) {
  // try {
  //   connectToDatabase();
  //   const { questionId, title, content, path } = params;
  //   const question = await Question.findById(questionId).populate("tags");
  //   if (!question) {
  //     throw new Error("Question not found");
  //   }
  //   question.title = title;
  //   question.content = content;
  //   await question.save();
  //   revalidatePath(path);
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
}
