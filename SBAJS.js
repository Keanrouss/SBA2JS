// // The provided course information.
// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
//   };
  
//   // The provided assignment group.
//   const AssignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//       {
//         id: 1,
//         name: "Declare a Variable",
//         due_at: "2023-01-25",
//         points_possible: 50
//       },
//       {
//         id: 2,
//         name: "Write a Function",
//         due_at: "2023-02-27",
//         points_possible: 150
//       },
//       {
//         id: 3,
//         name: "Code the World",
//         due_at: "3156-11-15",
//         points_possible: 500
//       }
//     ]
//   };
  
  //The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
 
  function getLearnerData(course, ag, submissions) {
  console.log(submissions[0].learner_id)
  }


//     // here, we would process this data to achieve the desired result.
// //     const result = [
// //       {
// //         id: 125,
// //         avg: 0.985, // (47 + 150) / (50 + 150)
// //         1: 0.94, // 47 / 50
// //         2: 1.0 // 150 / 150
// //       },
// //       {
// //         id: 132,
// //         avg: 0.82, // (39 + 125) / (50 + 150)
// //         1: 0.78, // 39 / 50
// //         2: 0.833 // late: (140 - 15) / 150
// //       }
// //     ];
  
// //     return result;
// //   }
  
// //   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
// //   console.log(result);
  
// I need to declare the ID as something that can't be changed as they are not meant to changed and are giving
//for this SBA. 
//Example stated an array is needed. This is an Array with the IDs #, Assig#, assignscores.

//Always console.log everything.
//This is an Array with the IDs #
const learner_id = [125,125,132,132]
let userassignmentsIDs = [1,2,3,1,2]
let scoreforusers = [47,150,400,39,140]
console.log(learner_id) // first array

let newArrayIDs=[]

for(let i =0; i < learner_id. length; i++){
  if (newArrayIDs.includes(learner_id[i])){
    newArrayIDs.push(i)
  }
}
console.log(newArrayIDs);

// declaring the assignments ID and the user scores

//console.log(listuserIDs);

 let studenta125 =[]
 let studenta132 =[]
 let studenta125score =[]
 let studenta132score =[]
 for(let i=0; i < LearnerSubmissions.length; i++)
  if(LearnerSubmissions[i].learner_id===125){
    studenta125.push(LearnerSubmissions[i].learner_id)
  studenta125score.push(LearnerSubmissions[0].submission.score)
}else{
 studenta132.push(LearnerSubmissions[i].learner_id)
 studenta132score.push(LearnerSubmissions[1].submission.score)
}
console.log (studenta125)
console.log (studenta125score)
console.log (studenta132)
console.log (studenta132score)



/*

    here, we would process this data to achieve the desired result.

    1. first figure out who are the students
    generate an array of unique students ids
    generate an array of students ids -> [125,125,125,132,132]
    generate the array from submissions data then make it unique -> [125,132]

    2. convert it into array of object where you have a key called id
    then value be studendid -> [{id:125},{id:132}]

    3. get the assignments and calulcate the grade
    find the assignment for each student and thier score
    -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]
    now you have an object for each student that has score

    4. we need to calculate the grade
    go every student and match assignment using id to find points points_possible
    you just divide the score by points points_possible
    -> [{id:125,1:0.94,2:1.0}]
    avg (add assignment scores together )/ (points possible)
    remove not due assignments

    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0, // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833, // late: (140 - 15) / 150
      },
    ];

  */
 
  // let result = [];
  // write some code that makes results like that
  // for (let i = 0; i < submissions.length; i++) {
  //   //
  // }
  // result [125,125,125,32,32]
  // return result;
