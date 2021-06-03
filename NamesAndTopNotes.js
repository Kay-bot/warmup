// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes (an empty array) then let's assume topNote: 0.

const getStudentsWithNamesAndTopNotes = students => students.map(student => ({
    name: student.name,
    toNote: Math.max(...students.notes, 0)
}))