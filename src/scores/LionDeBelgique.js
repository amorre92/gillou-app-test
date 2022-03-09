import React from 'react';
import Vex from 'vexflow';
import { StaveNote } from 'vexflow/src/stavenote';

const LionDeBelgique = () => {

    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "qr" }).addDotToAll()
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "8" }).setStemDirection(-1)

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "q" }).setStemDirection(-1)
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["a/5"], duration: "q" }).setStemDirection(-1)

    // measure 3
    // notes
    let note1_m3 = new Vex.Flow.StaveNote({ keys: ["g/5"], duration: "16" }).setStemDirection(-1)
    let note2_m3 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "16" }).setStemDirection(-1)
    let note3_m3 = new Vex.Flow.StaveNote({ keys: ["e/5"], duration: "16" }).setStemDirection(-1)
    let note4_m3 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "16" }).setStemDirection(-1)
    let note5_m3 = new Vex.Flow.StaveNote({ keys: ["g/5"], duration: "8" }).setStemDirection(-1)
    let note6_m3 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "8r" })
    // beams
    let beam1_m3 = new Vex.Flow.Beam([note1_m3, note2_m3, note3_m3, note4_m3]);
    // ties
    let tie1_m3 = new Vex.Flow.StaveTie({
        first_note: note1_m3,
        last_note: note5_m3,
        first_indices: [0],
        last_indices: [0]
    })


   return (
        {
            id: 'lion-de-belgique',
            title: 'Lion de Belgique',
            number: 2,
            clef: 'treble',
            keySignature: 'F',
            timeSignature: '2/4',
            measures: [
                {
                    index: 0,
                    notes: [note1_m1, note2_m1], 
                    weight: 3
                },
                {
                    index: 1,
                    notes: [note1_m2, note2_m2],
                    weight: 3
                },
                {
                    index: 2,
                    notes: [note1_m3, note2_m3, note3_m3, note4_m3, note5_m3, note6_m3],
                    weight: 6
                }
            ],
            beams: [beam1_m3],
            ties: [tie1_m3]
        }
    )
}

export default LionDeBelgique