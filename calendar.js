$(document).ready(function(){	

    $("#timeSelect").keyup(function () {
            $("#datepicker").val($("#timeSelect").val());
        });

        $("#datepicker").datepicker({
            showOn: "button",
            buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date"});
});