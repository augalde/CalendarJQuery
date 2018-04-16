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
            buttonText: "Select date",
            
            beforeShowDay: function(date) {
                var eventDates = {};

            var dateSelected = new Date($("#timeSelect").val());
            var fullDate = (dateSelected.getMonth()+1)+"/"+(dateSelected.getDate()+1)+"/" + dateSelected.getFullYear();
            var dias = $("#numberOfDays").val();            
            
            for(var i=0; i<dias;i++){
                var dayToPaint= new Date(fullDate);
                dayToPaint.setDate(dayToPaint.getDate()+i);
                var newFecha = (dayToPaint.getMonth() + 1)+ '/' +dayToPaint.getDate()+ '/' + dayToPaint.getFullYear();
                eventDates[ new Date(newFecha)] = new Date(newFecha);
            }
                    
                    var highlight = eventDates[date];
                    if( highlight ) {
                         return [true, "selectedDays", 'Tooltip text'];
                    } else {
                          return [true, "nonValidDays", 'Tooltip text'];
                    }
                }
            });
        
        });

