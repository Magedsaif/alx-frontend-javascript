export default function getStudentIdsSum(students){
return students.reduce((added,obj) => {obj.id + added;
}
)
}