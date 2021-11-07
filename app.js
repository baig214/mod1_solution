

angular.module('LunchCheck',[])
.controller('LunchCheckController', function($scope) {
    var msg;
    $scope.items=null;
    $scope.msg=null;
    $scope.req = true;
$scope.check = function () {
    
   // if($scope.req ==True)
   if($scope.items==null)
   {
    $scope.msg = "Enter The items"
   }
   else
   {
    const itemN = $scope.items.split(",");;
    console.log(itemN);
    let x = itemN.length;
    console.log(x);
    if (x<= 3) 
    {
       $scope.msg = "Enjoy!!"
    }
    else
    {
        $scope.msg="Too much"
    }

}
}
});

