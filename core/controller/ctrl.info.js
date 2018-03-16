
define([

], function(){
    function Ctrinfo($scope,serviceAjax,$sce){
            $scope.data = {};
            serviceAjax.getDataFromServer('Info')
                .then(function(data){
                    if (data) {
                        $scope.info = data;
                        // $scope.isiInfo = $sce.trustAsHtml($scope.info[0].c_infoLengkap);
                        $scope.$apply();  
                    }
            }); 
    }
    // set to global
    window.Ctrinfo = Ctrinfo;
    return Ctrinfo;
});