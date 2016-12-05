// for notes, enter eighth, triplet and sixteenth notes as strings with extra spaces
const challenges = [
  {
    "title": "Practice Rhythmic Notes",
    "hint": "Welcome to your first challenge of 88 Keys! Press start to set the countdown of 4 clicks for the metronome. On the 5th click, you will be on beat 1. Play the right notes within the right beats to earn points. Notes will light up green or red based on whether you played them accurately. Earn higher scores to unlock more keys. Each challenge corresponds to a different lesson, and will test the knowledge you've acquired.",
    "bpm": 92,
    "notes": ["C3", "space", "space", "space", "C3", "space", "C3", "space", "C3", "rest", "C3", "C3", "C3", "C3 C3", "C3", "C3"],
    "vexNotes": [
      {clef: 'treble', keys: ['c/4'], duration: '1'},
      {clef: 'treble', keys: ['c/4'], duration: '2'},
      {clef: 'treble', keys: ['c/4'], duration: '2'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: 'qr'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8'}
    ]
  },
  {
    "title": "Practice More Rhythmic Notes",
    "hint": "When you press 'START', the metronome will count out 4 clicks before the game begins. Use those clicks to get a feel for the rhythm of the piece before it begins.",
    "bpm": 80,
    "notes": ["C3", "space", "C3", "space", "C3", "C3", "C3", "rest", "C3 C3", "C3 C3", "rest C3", "C3 rest", "C3 C3 C3 C3", "C3 C3 C3 C3", "C3 C3 C3 C3", "C3 C3 C3 C3"],
    "vexNotes": [
      {clef: 'treble', keys: ['c/4'], duration: '2'},
      {clef: 'treble', keys: ['c/4'], duration: '2'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: 'qr'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8r'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8r'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'},
      {clef: 'treble', keys: ['c/4'], duration: '16'}
    ]
  },
  {
    "title": "Reading Treble Clef",
    "bpm": 100,
    "notes": ["C3", "E3", "D3", "F3", "G3", "rest", "B3", "space", "C4 A3", "B3 G3", "A3 F3", "G3 E3", "D3", "F3", "A3", "G3"],
    "vexNotes": [
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['e/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: 'qr'},
      {clef: 'treble', keys: ['b/4'], duration: '2'},
      {clef: 'treble', keys: ['c/5'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['f/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: 'q'}
    ]
  },
  {
    "title": "Jurassic Park Theme",
    "hint": "Play this classic tune from the 90s, using your newfound knowledge of accidentals.",
    "bpm": 108,
    "notes": ["Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4", "Bb4", "space", "F4", "Bb3", "G4", "space", "space"],
    "vexNotes": [
      {clef: 'treble', keys: ['bb/4'], duration: '8', accidental: 'b'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['bb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['eb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['bb/4'], duration: '8', accidental: 'b'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['bb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['eb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['bb/4'], duration: '8', accidental: 'b'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['bb/4'], duration: '2', accidental: 'b'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['bb/3'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['g/4'], duration: '2', dot: true}
    ]
  },
  {
    "title": "Hot Cross Buns",
    "bpm": 80,
    "notes": ["B3", "A3", "G3", "space", "B3", "A3", "G3", "space", "G3 G3", "G3 G3", "A3 A3", "A3 A3", "B3", "A3", "G3", "space"],
    "vexNotes": [
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: '2'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: '2'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: '2'}
    ]
  },
  {
    "title": "Old McDonald",
    "bpm": 80,
    "notes": ["G4 G4", "G4 D4", "E4 E4", "D4", "B4 B4", "A4 A4", "G4", "rest D4", "G4 G4", "G4 D4", "E4 E4", "D4", "B4 B4", "A4 A4", "G4", "rest"],
    "vexNotes": [
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8r'},
      {clef: 'treble', keys: ['d/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: 'qr'}
    ]
  },
  {
    "title": "Bass Clef Practice",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Octaves and Half-Steps",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Interval Distance",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Interval Quality",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Arpeggios",
    "hint": "Arpeggios are 'broken chords' - each arpeggio corresponds to a chord, and simply consists of that chord's notes, played sequentially rather than simultaneously.",
    "bpm": 92,
    "notes": ["C3", "E3", "G3", "C4"],
    "vexNotes": [

    ]
  },
  {
    "title": "Triad Qualities",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },{

    "title": "Suspended Chords",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Chord Inversions",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Major Scale",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Minor Scale",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Key Signatures",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  },
  {
    "title": "Circle of Fifths",
    "hint": "",
    "bpm": 92,
    "notes": [],
    "vexNotes": [

    ]
  }
]

module.exports = challenges;

// {
//   "title": "Second Example",
//   "bpm": 60,
//   "notes": ["A4 G4", "A4 G4", "A4 G4", "A4", "A4 G4", "A4 G4", "A4 G4", "A4", "B4"],
//   "vexNotes": [
//     {clef: 'treble', keys: ['a/4'], duration: '8'},
//     {clef: 'treble', keys: ['g/4'], duration: '8'},
//     {clef: 'treble', keys: ['a/4'], duration: '8'},
//     {clef: 'treble', keys: ['g/4'], duration: '8'},
//     {clef: 'treble', keys: ['a/4'], duration: '8'},
//     {clef: 'treble', keys: ['g/4'], duration: '8'},
//     {clef: 'treble', keys: ['a/4'], duration: 'q'},
//     {clef: 'treble', keys: ['a/4'], duration: '8'},
//     {clef: 'treble', keys: ['g/4'], duration: '8'},
//     {clef: 'treble', keys: ['a/4'], duration: '8'},
//     {clef: 'treble', keys: ['g/4'], duration: '8'},
//     {clef: 'treble', keys: ['a/4'], duration: '8'},
//     {clef: 'treble', keys: ['g/4'], duration: '8'},
//     {clef: 'treble', keys: ['a/4'], duration: 'q'}
//   ]
// }
