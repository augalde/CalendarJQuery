$(document).ready(function(){	

    $("#timeSelect").change(function () {
        var dateSelected = new Date($("#timeSelect").val());
        var fullDate = (dateSelected.getMonth()+1)+"/"+(dateSelected.getDate()+1)+"/" + dateSelected.getFullYear();
            $("#datepicker").val(fullDate);
        });

        $("#datepicker").datepicker({
            showOn: "button",
            buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date"});
});