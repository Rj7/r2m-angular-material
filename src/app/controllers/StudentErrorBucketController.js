/**
 * Created by raja on 1/13/16.
 */


(function () {
    angular
        .module('app')
        .controller('StudentErrorBucketController', [
            StudentErrorBucketController
        ]);

    //function StudentErrorBucketController( $mdDialog ) {
    //    var vm = this;
    //
    //    this.game_name = "Game Name";
    //
    //    this.showAlert = function(ev){
    //        alert("hi");
    //        console.log($mdDialog);
    //        $mdDialog.show(
    //            $mdDialog.alert()
    //                .clickOutsideToClose(true)
    //                .title('This is an alert title')
    //                .textContent('You can specify some description text in here.')
    //                .ariaLabel('Alert Dialog Demo')
    //                .ok('Got it!')
    //                .targetEvent(ev)
    //        );
    //    }
    //}

    function StudentErrorBucketController() {
        var alert;

        this.game_name = "Error Bucket";

    }
})();

