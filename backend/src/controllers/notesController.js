import Note from "../models/Note.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller");
    res.status(500).json({ message: "Internal Server Error :(  : " });
  }
}

export async function createNote(req, res) {
  // res.status(200).send("you got 20 notes");

  try {
  } catch (error) {}
}
export async function updateNote(req, res) {
  res.status(200).json({ message: "Note Updated Successfully!!" });
}

export async function deleteNote(req, res) {
  res.status(200).json({ message: "Note Deleted Successfully!!" });
}
