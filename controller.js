application.controller("myController", function($scope) {
    $scope.details = [{
        Name: "Mariel Boiser",
        Address: "Hilongos,Leyte",
        Age: "21"
    }, {
        Name: "Jemalyn Goyo",
        Address: "Matalom,Leyte",
        Age: "21"
    }, {
        Name: "Danilo Alingasa",
        Address: "Hilongos,Leyte",
        Age: "21"
    }, {
        Name: "Dimpna Boiserr",
        Address: "Mabini, Bohol",
        Age: "50"
    }, {
        Name: "Jona Boiser",
        Address: "Hilongos,Leyte",
        Age: "18"
    }, {
        Name: "Maristella Racal",
        Address: "Tagum City, Davao",
        Age: "22"
    }, {
        Name: "Mae Silva",
        Address: "Hilongos,Leyte",
        Age: "21"
    }, {
        Name: "Kath Bernardo",
        Address: "Quezon City",
        Age: "22"
    }, {
        Name: "Khent Dela Paz",
        Address: "Cebu, City",
        Age: "28"
    }, {
        Name: "Vincent Olarte",
        Address: "Hilongos,Leyte",
        Age: "37"
    }]

    $scope.add = function(d, d1, d2) {
        var toadd = {
            Name: d,
            Address: d1,
            Age: d2
        }
        $scope.details.push(toadd);
        $scope.clearSearch = function() {
            $scope.sudlanan = null;
        }
    }
})