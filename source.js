var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=9a7ecd179d3c4565bb571b48e533226d").success(function (response) {
	  
	  
// 	  function insertionSort(files,attrToSortBy){
//   for(var k=1; k < files.length; k++){
//      for(var i=k; i > 0 && new Date(files[i][attrToSortBy]) < 
//        new Date(files[i-1][attrToSortBy]); i--){

//         var tmpFile = files[i];
//         files[i] = files[i-1];
//         files[i-1] = tmpFile;

//      }
//   }

// }
// response.publishedAt = moment(response.publishedAt).format("MMM Do");
for (var i =response.articles.length - 1; i >= 0; i--) {
          response.articles[i].publishedAt = moment(response.articles[i].publishedAt).fromNow();
        }
var files = response.articles;

// insertionSort(files,"timestamp");
      $scope.myData= files;
      console.log(moment("20111031", "YYYYMMDD").fromNow());
  });
$http.get("https://newsapi.org/v1/articles?source=ars-technica&sortBy=latest&apiKey=9a7ecd179d3c4565bb571b48e533226d").success(function (response) {
 for (var i =response.articles.length - 1; i >= 0; i--) {
          response.articles[i].publishedAt = moment(response.articles[i].publishedAt).fromNow();
        }
var filess = response.articles;   
$scope.myData2= filess;    
});
}); 

$(document).ready(function(){
$("img").unveil();
    $("#b1").click(function(){
        $(".xmain").slideToggle();
    });


});
$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });


// $http.get("https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=9a7ecd179d3c4565bb571b48e533226d").success(function(data){
//       itemlist.push(data.articles[0].author);
//     })