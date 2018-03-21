define([

], function(){
    function Ctrlogin($scope,serviceAjax,$location,localStorageService,growl,$timeout){

        $scope.loading = false;
        $scope.login = {};

        $scope.cekLogin = function(){
            $scope.loading = true;
            if($scope.login['email'] !== undefined && $scope.login['password'] != undefined ){
                serviceAjax.posDataToServer('Login',$scope.login).then(function(data){
                    $timeout(function(){
                        if (data.length > 0) {
                            localStorage.removeItem('todos');
                            $location.path('/home');
                            localStorageService.add('user',data);
                        } else {
                            growl.addErrorMessage("Ops, Email / Password Anda Tidak Terdaftar Di Sistem Kami ",{ttl: 2000});
                            $scope.loading = false;
                        }
                    },2000);
                });
            }else{
                $scope.loading = false;
                growl.addErrorMessage("Ops, Cek kembali Email dan Password",{ttl: 2000});
            }
        };

        (this.cekLocalStorage = function(){
          if(localStorageService.get('user')) $location.path('/home');
        })();

    }

    // set to global
    window.Ctrlogin = Ctrlogin;
    return Ctrlogin;
});