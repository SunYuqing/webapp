angular.module("myApp",["ng","ngRoute"]).
controller("myController",function($scope){
    $scope.isPopup=false;
    $scope.sentEmails=[];
    $scope.writeEmail={};
    $scope.activeTab='inbox';

    $scope.showPopup=function(detail){
        $scope.isPopup=true;
        $scope.selectEmail=detail;
    };
    $scope.showWritePopup=function(){
        $scope.writeEmail={};
    };
    $scope.sendEmail=function(){
        //$scope.sentEmails=[];
        $scope.writeEmail.from = "我";
        $scope.sentEmails.splice(0,0,$scope.writeEmail);
        $scope.writeEmail.date = new Date();
    };
    $scope.forward = function() {
        $("#myModal").modal('hide');
        $scope.writeEmail = {};
        angular.copy($scope.selectEmail, $scope.writeEmail);

        $scope.writeEmail.body =
            "\n\n\n-------------------------------\n"
            + "发件人: " + $scope.writeEmail.from + "\n"
            + "日期: " + $scope.writeEmail.date + "\n"
            + "收件人: " + $scope.writeEmail.to + "\n"
            + "主题: " + $scope.writeEmail.subject + "\n"
            + "内容: "+ $scope.writeEmail.body;

        $scope.writeEmail.subject = "转发: " + $scope.writeEmail.subject+"\n";
        $scope.writeEmail.to = ""+"\n";
        $scope.writeEmail.from = "我"+"\n";
        $("#myModal2").modal("show");
    };
    $scope.reply=function(){
        $("#myModal").modal('hide');
        $scope.writeEmail={};
        angular.copy($scope.selectEmail, $scope.writeEmail);
        $scope.writeEmail.body =
            "\n\n\n-------------------------------\n"
            + "发件人: " + $scope.writeEmail.from + "\n"
            + "日期: " + $scope.writeEmail.date + "\n"
            + "收件人: " + $scope.writeEmail.to + "\n"
            + "主题: " + $scope.writeEmail.subject + "\n"
            + "内容: "+$scope.writeEmail.body+"\n";
        $scope.writeEmail.subject =
              "回复: " + $scope.writeEmail.subject+"\n";
        $scope.writeEmail.to = $scope.writeEmail.from+"\n";
        $scope.writeEmail.from = "我"+"\n";
        $("#myModal2").modal("show");
    };
    $scope.emails=[
            {
                from:"Monica",
                to:"我",
                subject:"我爱前端1",
                date:"May 13",
                body:"你好前端1"
            },
            {
                from:"Recheal",
                to:"我",
                subject:"我爱前端2",
                date:"May 23",
                body:"你好前端2"
            },
            {
                from:"Ross",
                to:"我",
                subject:"我爱前端3",
                date:"May 30",
                body:"你好前端3"
            }
        ];
});
