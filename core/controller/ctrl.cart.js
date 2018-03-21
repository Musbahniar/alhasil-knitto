/**
 * Created with Visual Studi Code.
 * User: Musbahniar.
 */

define([


], function(){
    function Ctrlcart($scope,$timeout,serviceAjax,localStorageService,growl,$location,$rootScope,$window){
        var nis = localStorageService.get('user');
        if(localStorageService.get('user')){
            $scope.level = true;
            $scope.namalevel = nis[0]['c_NamaLengkap'];
            $scope.$apply();
        } else {
            $scope.level = false;                
            $scope.$apply();
        } 

        var tblC  = localStorage.getItem("todos");
        tblC = JSON.parse(tblC);
        if(tblC == null)    {
            $scope.todos = [];
        } else {
            $scope.todos = tblC;
        }

        $scope.xdata = {};
    
        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo){
                count+= todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo){
                if (!todo.done)
                    $scope.todos.push(todo);
            });
            localStorage.setItem('todos', JSON.stringify($scope.todos));
        };


        $scope.saveAll = function() {
            // $scope.belibarang = {};
            // console.log('you can save all the rows as a document: ');
            // console.log($scope.todos);
            // console.log('or save row by row:');
            // var index = 0;
            // $scope.todos.forEach(function (row) {
            //     console.log('row #' + (index++) + ': ' + JSON.stringify(row));
            //     // $scope.belibarang = JSON.stringify(row);
            // });
            serviceAjax.posDataToServer('Cart',$scope.todos).then(function(response){
                    var status = response;
                    // $timeout(function(){
                        if (status == 'ok') {
                            growl.addWarnMessage("Ok, Permintaan Pembelian sudah tersimpan segera kami tindak lanjuti ",{ttl: 3000});
                             localStorage.removeItem('todos');
                            // $scope.loading = false;
                        } else {
                            growl.addErrorMessage("Ops, Ada kesalahan pada jaringan kami ",{ttl: 3000});
                            // $scope.loading = false;   
                        }
                    // },2000);
                });
        }

    }

    // set to global
    window.Ctrlcart = Ctrlcart;
    return Ctrlcart;
});