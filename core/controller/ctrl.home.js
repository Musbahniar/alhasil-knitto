/**
 * Created with Visual Studi Code.
 * User: Musbahniar.
 */

define([


], function(){
    function Ctrlhome($scope,$timeout,serviceAjax,localStorageService,growl,$location){

            var nis = localStorageService.get('user');
            if(localStorageService.get('user')){
                $scope.level = true;
                $scope.namalevel = nis[0]['c_NamaLengkap'];
                $scope.$apply();
            } else {
                $scope.level = false;                
                $scope.$apply();
            } 
        
    }

    // set to global
    window.Ctrlhome = Ctrlhome;
    return Ctrlhome;
});