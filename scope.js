var app = angular.module("Mymodule", []);

// app.controller("myCtrl", function($scope) {
//     $scope.firstName = "John";
//     $scope.lastName = "Doe";
//   });


  // app.controller("myCtrla", function($scope) {
  //   $scope.firstName = "nikunj";
  //   $scope.lastName = "agrawal";
  // });


  // app.controller(function($rootScope){
  //   $rootScope.firstName = "mukul"
  //   $rootScope.age =20;
  // })

  app.controller("myCtrl", function($scope) {
        $scope.name = "Mukul";
        $scope.val = 300;
        $scope.stu_name = ['Doe', 'Nikunj', 'Mridul', 'Mukul', 'Himanshu'];
        // $scope.detail = [
        //   {email : 'abc@a', pass :"qbvg", id:10},
        //   {email : 'abhc@a', pass :"qkbvg", id:20},
        //   {email : 'abklc@a', pass :"qbdvg", id:30},
        //   {email : 'abcjk@a', pass :"qbvqg", id:40}
        // ]

        $scope.mob_detail = [
          {Model : 2000, price : 20000, brand:'Samsung'},
          {Model : 2500, price : 26000, brand:'vivo'},
          {Model : 3000, price : 60000, brand:'mi'},
          {Model : 5400, price : 80000, brand:'apple'}
          
        ];

        $scope.data = [1,2,3,4,5,0,-1,-2];
      });


