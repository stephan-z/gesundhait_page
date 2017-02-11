var controllers = {};

controllers.HomeController = function($scope)
{
};

controllers.NavigationController = function ($scope)
{
    var active = 'navigationActive';

    function clearVars()
    {
        $scope.varHomeLinkClass = '';
    }

    $scope.homeViewOpened = function ()
    {
        clearVars();
        $scope.varHomeLinkClass = active;
    }
};

mainApp.controller(controllers);