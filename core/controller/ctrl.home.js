/**
 * Created with Visual Studi Code.
 * User: Musbahniar.
 */

define([


], function(){
    function Ctrlhome($scope,$timeout,serviceAjax,localStorageService,growl,$location,$rootScope,$window){

            var nis = localStorageService.get('user');
            if(localStorageService.get('user')){
                $scope.level = true;
                $scope.namalevel = nis[0]['c_NamaLengkap'];
                $scope.$apply();
            } else {
                $scope.level = false;                
                $scope.$apply();
            } 
        
        //Get Barang
        serviceAjax.getDataFromServer('Barang','getBarang')
        .then(function(data){
            if (data) {
                    $scope.barang = data;
                    // $scope.$apply();  
            }
        });

        //pesan
        $scope.pesan = function (id,namabrg,ketbrg,hargakg,hargaroll) {
            $rootScope.idbarang = id;
            $rootScope.namabrg = namabrg;
            $rootScope.ketbrg = ketbrg;
            $rootScope.hargakg = hargakg;
            $rootScope.hargaroll= hargaroll;
            $window.location.href = "./index.html#!/pesan";
           
        }
    }

    // set to global
    window.Ctrlhome = Ctrlhome;
    return Ctrlhome;
});