app.controller('studentsController', ['$scope', '$resource', function($scope, $resource){
  var Student = $resource('/api/students');

  Student.query(function (results) {
    $scope.students = results;
  });

  $scope.students = [];
  
  $scope.createStudent = function () {
    var student = new Student();
    student.name = $scope.studentName;
    student.course = $scope.studentCourse;
    student.rec1 = $scope.studentRec1;
    student.rec2 = $scope.studentRec2;
    student.rec3 = $scope.studentRec3;
    student.note = $scope.studentNote;
    student.$save(function (result) {
      $scope.students.push(result);
      $scope.studentName = '';
      $scope.studentCourse = '';
      $scope.studentRec1 = '';
      $scope.studentRec2 = '';
      $scope.studentRec3 = '';
      $scope.studentNote = '';
    });
  }; 
  $scope.removeStudent=function(){ 
    $scope.students.splice($scope.students.indexOf({"name":"aron"}),1);
  };
}]);


// $scope.createMeetup = function () {
  //   $scope.meetups.push({ 
  //        name: $scope.meetupName, 
  //     speaker: $scope.meetupSpeaker,
  //        time: $scope.meetupTime,
  //        food: $scope.meetupFood
  //   });
  //   //clears boxes after clicking button
  //   $scope.meetupName = '';
  //   $scope.meetupSpeaker = '';
  //   $scope.meetupTime = '';
  //   $scope.meetupFood = '';
  // }; 


// { name: "Ray", location: "texas", time: "one", food: "chips" },
//     { name: "Melinda", location: "florida", time: "two", food: "pizza" }
