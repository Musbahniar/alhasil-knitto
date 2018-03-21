define([

], function(){
    function Ctrkontak($scope,serviceAjax,$location,localStorageService,growl,$timeout){

        $scope.loading = false;
        $scope.kontak = {};

        $scope.cekKontak = function(){
            $scope.loading = true;
            if($scope.kontak['nama'] !== undefined && $scope.kontak['email'] !== undefined && $scope.kontak['hp'] != undefined && $scope.kontak['pesan'] != undefined ){
               serviceAjax.posDataToServer('Kontak',$scope.kontak).then(function(data){
                    $timeout(function(){
                        if (data.status == 'ok') {
                            growl.addWarnMessage("Ok, Permintaan sudah tersimpan segera kami tindak lanjuti ",{ttl: 3000});
                            $scope.loading = false;
                        } else {
                            growl.addErrorMessage("Ops, Ada kesalahan pada jaringan kami ",{ttl: 3000});
                            $scope.loading = false;   
                        }
                    },2000);
                });
            }else{
                $scope.loading = false;
                growl.addErrorMessage("Ops, Cek kembali Nama, Email,No Telp dan Pesan",{ttl: 4000});
            }
        };
    }

    // set to global
    window.Ctrkontak = Ctrkontak;

    return Ctrkontak;
});