import Vex from 'vexflow';

const JuifErrant = () => {

    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" })
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" })

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "8" }).setStemDirection(-1)
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "8" }).setStemDirection(-1)
    let note3_m2 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "8" }).setStemDirection(-1)
    let note4_m2 = new Vex.Flow.StaveNote({ keys: ["g/4", "g/5"], duration: "8" }).setStemDirection(-1)
    // beams
    let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2, note3_m2, note4_m2])

    // measure 3
    // notes
    let note1_m3 = new Vex.Flow.StaveNote({ keys: ["f/4", "f/5"], duration: "8" })
    let note2_m3 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }).addDotToAll()

   return (
        {
            id: 'juif-errant',
            title: 'Le juif errant',
            number: 11,
            clef: 'treble',
            keySignature: 'Bb',
            timeSignature: '2/4',
            measures: [
                {
                    index: 0,
                    notes: [note1_m1, note2_m1], 
                    weight: 2
                },
                {
                    index: 1,
                    notes: [note1_m2, note2_m2, note3_m2, note4_m2],
                    weight: 5
                },
                {
                    index: 2,
                    notes: [note1_m3, note2_m3],
                    weight: 2
                }
            ],
            beams: [beam1_m2],
            ties: []
        }
    )
}

export default JuifErrant