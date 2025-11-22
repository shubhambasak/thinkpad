import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = (await Note.find()).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller");
    res.status(500).json({ message: "Internal Server Error :(  : " });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getAllNotes Controller");
    res.status(500).json({ message: "Internal Server Error :(  : " });
  }
}

export async function createNote(req, res) {
  // res.status(200).send("you got 20 notes");

  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in getAllNotes Controller");
    res.status(500).json({ message: "Internal Server Error :(  : " });
  }
}
export async function updateNote(req, res) {
  // res.status(200).json({ message: "Note Updated Successfully!!" });

  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      }
    );
    if (!updateNote)
      return res.status(404).json({ message: "Note not found!!" });
    res.status(200).json({ message: "Note Updated Successfully" });
  } catch (error) {
    console.error("Error in getAllNotes Controller");
    res.status(500).json({ message: "Internal Server Error :(  : " });
  }
}

export async function deleteNote(req, res) {
  // res.status(200).json({ message: "Note Deleted Successfully!!" });

  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote)
      return res.status(404).json({ message: "Note not found!!" });
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Error in getAllNotes Controller");
    res.status(500).json({ message: "Internal Server Error :(  : " });
  }
}
