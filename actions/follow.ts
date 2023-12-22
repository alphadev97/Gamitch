"use server";

export const onFollow = async (id: string) => {
  try {
    console.log("I am the same as an api call", id);
  } catch (error) {
    throw new Error("internal error");
  }
};
