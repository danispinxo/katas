const organizeInstructors = function(instructors) {
  let organizedInstructors= {};
    for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "iOS") {
      organizedInstructors.iOS = [];
    } else if (instructors[i].course === "Web") {
      organizedInstructors.Web = [];
    } else if (instructors[i].course === "Blockchain") {
      organizedInstructors.Blockchain = [];
    }
  }
  
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "iOS") {
      organizedInstructors.iOS.push(instructors[i].name);
    } else if (instructors[i].course === "Web") {
      organizedInstructors.Web.push(instructors[i].name);
    } else if (instructors[i].course === "Blockchain") {
      organizedInstructors.Blockchain.push(instructors[i].name);
    }
  }
  return organizedInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));