$(document).ready(function(){	
    
//holidays hardcoded
var holidays = [
    [1, 1, 'uk'],
    [1, 2, 'uk'],
    [1, 3, 'uk'],
    [1, 4, 'uk'],
    [12, 24, 'uk'],
    [12, 25, 'uk'],
    [12, 26, 'uk'],
    [12, 27, 'uk'],
    [12, 28, 'uk'],
    [12, 29, 'uk'],
    [12, 30, 'uk'],
    [12, 31, 'uk'],
    [1, 1, 'us'],
    [1, 15, 'us'],
    [2, 19, 'us'],
    [5, 28, 'us'],
    [7, 04, 'us'],
    [7, 18, 'us'],
    [09, 03, 'us'],
    [11, 22, 'us'],
    [11, 23, 'us'],
    [12, 24, 'us'],
    [12, 25, 'us'],
    [12, 31, 'us'],
    [1, 1, 'cr'],
    [3, 29, 'cr'],
    [3, 30, 'cr'],
    [4, 11, 'cr'],
    [5, 1, 'cr'],
    [7, 25, 'cr'],
    [08, 2, 'cr'],
    [08, 15, 'cr'],
    [09, 15, 'cr'],
    [10, 12, 'cr'],
    [12, 25, 'cr']
  ];

  //TODO: Change this for an API calendar from google to validate holidays from all over the world
  //validating holidays from an array
  function isHoliday(dateObject, countryCode) {
    for(var i = 0; i < holidays.length; i++) {
        let localDay = parseInt(dateObject.getDate());
        let localMonth = parseInt(dateObject.getMonth()) + 1;
      if (localDay == parseInt(holidays[i][1]) &&  localMonth == parseInt(holidays[i][0]) && countryCode.toLowerCase() == holidays[i][2].toLowerCase()) {
                return true;
      }
    }
    
    return false;
  }

    //setting the dates
    $("#timeSelect").change(function () {
        var dateSelected = new Date($("#timeSelect").val());
        var fullDate = (dateSelected.getMonth()+1)+"/"+(dateSelected.getDate()+1)+"/" + dateSelected.getFullYear();
            $("#datepicker").val(fullDate);
        });

        //building the calendar picker
        $("#datepicker").datepicker({
            showOn: "button",
            buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date",
            
            //rendering the calendar using datePicker
            beforeShowDay: function(date) {
                var eventDates = {};
            var countryCode = $("#countryCode").val();
            var dateSelected = new Date($("#timeSelect").val());
            var fullDate = (dateSelected.getMonth()+1)+"/"+(dateSelected.getDate()+1)+"/" + dateSelected.getFullYear();
            var dias = $("#numberOfDays").val();            
            
            //creating the array of days we are going to paint
            for(var i=0; i<dias;i++){
                var dayToPaint= new Date(fullDate);
                dayToPaint.setDate(dayToPaint.getDate()+i);
                var newFecha = (dayToPaint.getMonth() + 1)+ '/' +dayToPaint.getDate()+ '/' + dayToPaint.getFullYear();
                eventDates[ new Date(newFecha)] = new Date(newFecha);
            }
                    //highlight the calendar
                    var highlight = eventDates[date];
                    if( highlight ) {
                        let myDay = new Date(highlight);
                        if(myDay.getDay() == 0 || myDay.getDay() == 6)
                        {
                            return [true, "weekend", 'Tooltip text'];
                        }
                        else if(isHoliday(myDay,countryCode.toLowerCase()))
                        {
                            return [true, "holiday", 'Tooltip text'];
                        }                
                        else{
                         return [true, "selectedDays", 'Tooltip text'];
                        }
                    } else {
                          return [true, "nonValidDays", 'Tooltip text'];
                    }
                }
            });
        
        });

