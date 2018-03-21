/**
 * Created with Visual Studi Code.
 * User: Musbahniar.
 */

define([


], function(){
    function Ctrlpesan($scope,$timeout,serviceAjax,localStorageService,growl,$location,$rootScope,$window){
        $scope.namabrg = $rootScope.namabrg;
        $scope.ketbrg = $rootScope.ketbrg;
        $scope.hargakg = $rootScope.hargakg;
        $scope.idbrg =  $rootScope.idbarang;
        $scope.hargaroll =  $rootScope.hargaroll;
        $scope.hargakali = $rootScope.hargakg;

        var tblC  = localStorage.getItem("todos");
        tblC = JSON.parse(tblC);
        if(tblC == null)    {
            $scope.todos = [];
        } else {
            $scope.todos = tblC;
        }

        $scope.xdata = {};
    
            var nis = localStorageService.get('user');
            if(localStorageService.get('user')){
                $scope.level = true;
                $scope.namalevel = nis[0]['c_NamaLengkap'];
                $scope.$apply();
            } else {
                $scope.level = false;                
                $scope.$apply();
            } 

        
        $scope.addTodo = function() {
            var jmlFromHTML = $('#jml').val();
            var xtotal = 0;
            var email = nis[0]['c_Email'];
            // alert($scope.idbrg);undefined 
            if ($scope.idbrg != undefined) {
                xtotal = parseFloat($scope.hargakg) * parseInt(jmlFromHTML); 
                $scope.todos.push({
                id: $scope.idbrg,
                namabrg: $scope.namabrg,
                hargakg: $scope.hargakg,
                hargaroll: $scope.hargaroll,
                jml: jmlFromHTML,
                total: xtotal,
                email: email,
                done: false
                });
                    $scope.todoText = ''; //clear the input after adding
                    localStorage.setItem('todos', JSON.stringify($scope.todos));
                    $window.location.href = './index.html#!/home';
            } else {
                growl.addErrorMessage("Ops, Ada Kesalahan Silahkan Pilih Barang Lagi",{ttl: 2000});
            }
        };

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

    }

    // set to global
    window.Ctrlpesan = Ctrlpesan;
    return Ctrlpesan;
});