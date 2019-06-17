application.controller("homeController", function($scope) {
        $scope.details = [{
            Name: "Mariel Boiser",
            Address: "Hilongos,Leyte",
            Age: "22"
        }, {
            Name: "Jemalyn Goyo",
            Address: "Matalom,Leyte",
            Age: "21"
        }, {
            Name: "Danilo Alingasa",
            Address: "Hilongos,Leyte",
            Age: "25"
        }, {
            Name: "Dimpna Boiser",
            Address: "Mabini, Bohol",
            Age: "50"
        }, {
            Name: "Jona Boiser",
            Address: "Hilongos,Leyte",
            Age: "18"
        }, {
            Name: "Vincent Olarte",
            Address: "Hilongos,Leyte",
            Age: "37"
        }]

        $scope.Add = function() {
            $scope.details.push({
                Name: $scope.name,
                Address: $scope.address,
                Age: $scope.age
            })

            $scope.name = null;
            $scope.address = null;
            $scope.age = null;
        }

        $scope.Updatee = function(name, address, age) {
            $scope.name = name;
            $scope.address = address;
            $scope.age = age;
            $scope.selectedRow = this.$index;
        }

        $scope.Delete = function() {
            $scope.details.splice(0, 1);
        }
        $scope.Update = function() {
            $scope.details[$scope.selectedRow].Name = $scope.name,
                $scope.details[$scope.selectedRow].Address = $scope.address,
                $scope.details[$scope.selectedRow].Age = $scope.age

            $scope.name = null;
            $scope.address = null;
            $scope.age = null;
        }
    })
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "homeController",
                controllerAs: "home",
                templateUrl: "views/home.html"
            })
            .when("/about", {
                controller: "aboutController",
                controllerAs: "about",
                templateUrl: "views/about.html"
            })
            .when("/team", {
                controller: "teamController",
                controllerAs: "team",
                templateUrl: "views/team.html"
            })
            .otherwise({
                redirectTo: "/"
            });

    })
    .controller("aboutController", function($scope) {
        $scope.notif = "My name is Mariel Boiser";
    })
    .controller("teamController", function($scope) {
        $scope.notify = "I'm the one who made this lovely project";
    })