import { StaveNote, Beam, Dot } from "vexflow";

const PostillonDeLongjumeauSib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({
    keys: ["b/4"],
    duration: "qr",
  });
  let note2_m1 = new StaveNote({ keys: ["b/4"], duration: "qr" });
  let note3_m1 = new StaveNote({
    keys: ["c/5"],
    duration: "8",
  }).setStemDirection(-1);

  // measure 2
  // notes
  let note1_m2 = new StaveNote({ keys: ["f/4"], duration: "8" });
  let note2_m2 = new StaveNote({ keys: ["a/4"], duration: "8" });
  let note3_m2 = new StaveNote({ keys: ["c/5"], duration: "8" });
  let note4_m2 = new StaveNote({ keys: ["f/4"], duration: "8" });
  let note5_m2 = new StaveNote({ keys: ["a/4"], duration: "8" });
  let note6_m2 = new StaveNote({ keys: ["c/5"], duration: "8" });

  let beam1_m2 = new Beam([note1_m2, note2_m2, note3_m2]);
  let beam2_m2 = new Beam([note4_m2, note5_m2, note6_m2]);
  // ties

  // measure 3
  // notes
  let note1_m3 = new StaveNote({ keys: ["f/4"], duration: "4" });
  let note2_m3 = new StaveNote({ keys: ["a/4"], duration: "8" });
  let note3_m3 = new StaveNote({ keys: ["c/5"], duration: "8" });
  let note4_m3 = new StaveNote({ keys: ["b/4"], duration: "qr" });

  Dot.buildAndAttach([note1_m1], { all: true });

  return {
    keySignature: "F",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1, note3_m1],
        weight: 4,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2, note4_m2, note5_m2, note6_m2],
        weight: 6,
      },
      {
        index: 2,
        notes: [note1_m3, note2_m3, note3_m3, note4_m3],
        weight: 5.2,
      },
    ],
    beams: [beam1_m2, beam2_m2],
    ties: [],
  };
};

export default PostillonDeLongjumeauSib;
