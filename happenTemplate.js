var library = (function() {
    var date = new Date();
    console.log(date);
    var hours = new Date().getHours();
    var seconds =new Date().getHours();
    num1=date.getHours
    num2=12
    
    return {
        
        TimeStamp: (function(){
            return {
                UnixTimestamp: function(){
                    return Math.round(+ new Date()/1000).toString()
                },
                UnixMillisecond: function(){
                    return + new Date();
                }
            }
        })(),
        Local: (function(){
            return {
                Time: (function() {
                    return {
                        WithSeconds: function(){

                                


                            var d = new Date();
                            var n = d.toLocaleTimeString();
                            
                            if (hours >=12 && seconds<10){
                                
                                return (d.getHours() -12)+ ':'+ d.getMinutes() +':0' +d.getSeconds() +' PM'
                            }
                            else if( hours>=12){
                                return (d.getHours() -12)+ ':'+ d.getMinutes() +':'  +d.getSeconds() +' PM'
                            }
                            else if (seconds<10) {
                               
                                return d.getHours()+ ':'+ d.getMinutes() +':O'  +d.getSeconds() +' AM'
                            }
                        },
                        WithOutSeconds: function() {
                            var d = new Date();
                            var n = d.toLocaleTimeString();


                            if (d.getHours() >=12){
                                return (d.getHours() - 12) + ':' + d.getMinutes() +' PM';
                                // return d.toString().substr(16,5) +' AM'
                            }
                            else {
                                return d.toString().substr(16,5) +' AM';
                            }
                            
                    //         if ((hours > 12)? hours -12 : hours){
                    // return date.getHours().toString()+':'+date.getMinutes()+'PM';
                // }
                    // else{
                    //     return date.getHours().toString()+':'+date.getMinutes()+'AM';  
                    // }









                        //     var d = new Date();
                        //     var n = d.toLocaleTimeString();
                        //     if (hours >=12){
                                
                        //         return d.toString().substr(16,5) +' AM'
                        //     }
                        //     else {
                        //         return d.toString().substr(16,5)+' PM';
                        //     }
                        }
                    }
                })(),
                MDY: (function(){
                    return {
                        Numeral: function(){
                            var month = new Array();
                        month[0] = '1';
                        month[1] = '2';
                        month[2] = '3';
                        month[3] = '4';
                        month[4] = '5';
                        month[5] = '6';
                        month[6] = '7';
                        month[7] = '8';
                        month[8] = '9';
                        month[9] = '10';
                        month[10] = '11';
                        month[11] = '12';

                        var d = new Date();
                        return month[d.getMonth().toString()]+'/'+date.getDate().toString()+'/'+date.getFullYear().toString();
                             
                        },
                        Name: function(){
                             var d = new Date();
                            var n = d.toLocaleTimeString();
                            var month = new Array();
                        month[0] = 'January ';
                        month[1] = 'Feburary ';
                        month[2] = 'March ';
                        month[3] = 'April ';
                        month[4] = 'May ';
                        month[5] = 'June ';
                        month[6] = 'July ';
                        month[7] = 'August ';
                        month[8] = 'September ';
                        month[9] = 'October ';
                        month[10] = 'Novemeber ';
                        month[11] = 'December ';

                        var d = new Date();
                        return month[d.getMonth().toString()] + d.toString().substr(8,2) + ', ' +d.toString().substr(11,4)
                            
                            
                        }
                    }
                })(),
            }
        })(),
        Second: (function(){
            return{
                Second: function(){
                    return date.getSeconds().toString();
                },
                DblDigit: function(){
                    if (date.getSeconds()<10){
                        return '0'+ date.getSeconds().toString().substr(0 , 2);
                    }
                    else{
                    return date.getSeconds().toString().substr(0 , 2)
                    }
                }
            }
        })(),
        Minute: (function(){
            return{
                Minute: function(){
                    return date.getMinutes().toString();
                },
                DblDigit: function(){
                    if(date.getMinutes()<10){
                        return '0' + date.getMinutes().toString();
                    }
                    else {
                    return date.getMinutes().toString();                
                    }
            }
            }
        })(),
        Hour: (function(){
            return {
                TwentyFourHour: function() {
                    return date.getHours().toString();
                },
                TwelveHour: function() {
                    if (hours>12){
                    return (date.getHours()-12).toString();
                }
                    else{
                        return date.getHours().toString();  
                    }
                },
                AMPM: (function() {
                    return {
                        UpperCase: function(){
                            if((date.getHours()-12) >0){
                                return  "PM";
                            }
                            else {
                                return "AM"
                            }
                           
                        },
                        LowerCase: function(){
                            if((date.getHours()-12) >0){
                                return "pm";
                            }
                            else {
                                return "am"
                            }
                        }
                    }
                })()
            }
        })(),
        Week: (function(){
            return {
                DayOfWeek: function(){
                    var day = new Array();
                        day[0] = 'Sunday';
                        day[1] = 'Monday';
                        day[2] = 'Tuesday';
                        day[3] = 'Wednesday';
                        day[4] = 'Thursday';
                        day[5] = 'Friday';
                        day[6] = 'Saturday';
                        

                        var d = new Date();
                        return day[d.getDay().toString()]
                    
                
                },
                AbrDayOfWeek: function(){
                    var day = new Array();
                        day[0] = 'Sun';
                        day[1] = 'Mon';
                        day[2] = 'Tue';
                        day[3] = 'Wed';
                        day[4] = 'Thu';
                        day[5] = 'Fri';
                        day[6] = 'Sat';
                        

                        var d = new Date();
                        return day[d.getDay().toString()]
                    
                },
                FirstTwoOfWeek: function(){
                    var day = new Array();
                        day[0] = 'Su';
                        day[1] = 'Mo';
                        day[2] = 'Tu';
                        day[3] = 'We';
                        day[4] = 'Th';
                        day[5] = 'Fr';
                        day[6] = 'Sa';
                        

                        var d = new Date();
                        return day[d.getDay().toString()]
                },
                WeekOfYear: function(){
                    
                }
            }
        })(),
        Month: (function(){
            return {
                DateOfMonth: (function(){
                    return {
                        Numeral: function(){
                            return date.getDate().toString();
                        },
                        Ordinal: function(){
                                   
                        },
                        DateDblDigit: function(){
                            return date.getDate().toString().substr(-2)
                        }
                    }
                })(),
                MonthNumber: function(){
                    var month = new Array();
                        month[0] = '1';
                        month[1] = '2';
                        month[2] = '3';
                        month[3] = '4';
                        month[4] = '5';
                        month[5] = '6';
                        month[6] = '7';
                        month[7] = '8';
                        month[8] = '9';
                        month[9] = '10';
                        month[10] = '11';
                        month[11] = '12';

                        var d = new Date();
                        return month[d.getMonth().toString()]
                    

                },
                MonthNumberDblDigit: function(){
                    var month = new Array();
                        month[0] = '01';
                        month[1] = '02';
                        month[2] = '03';
                        month[3] = '04';
                        month[4] = '05';
                        month[5] = '06';
                        month[6] = '07';
                        month[7] = '08';
                        month[8] = '09';
                        month[9] = '10';
                        month[10] = '11';
                        month[11] = '12';

                        var d = new Date();
                        return month[d.getMonth().toString()]
                },
                AbrOfCurrentMonth: function(){
                    var month = new Array();
                        month[0] = 'Jan';
                        month[1] = 'Feb';
                        month[2] = 'Mar';
                        month[3] = 'Apr';
                        month[4] = 'May';
                        month[5] = 'Jun';
                        month[6] = 'Jul';
                        month[7] = 'Aug';
                        month[8] = 'Sep';
                        month[9] = 'Oct';
                        month[10] = 'Nov';
                        month[11] = 'Dec';

                        var d = new Date();
                        return month[d.getMonth().toString()]
                },
                CurrentMonth: function(){
                    var month = new Array();
                        month[0] = 'January';
                        month[1] = 'February';
                        month[2] = 'March';
                        month[3] = 'April';
                        month[4] = 'May';
                        month[5] = 'June';
                        month[6] = 'July';
                        month[7] = 'August';
                        month[8] = 'September';
                        month[9] = 'October';
                        month[10] = 'November';
                        month[11] = 'December';

                        var d = new Date();
                        return month[d.getMonth().toString()]
                }
            }
        })(),
        Year: (function(){
            return {
                DayOfYear: (function(){
                    return {
                        Numeral: function(){
                            var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
return day.toString();

                        },
                        Ordinal: function(){}
                    }
                })(),
                YearFull: function(){
                    return date.getFullYear().toString();
                },
                YearAbr: function(){
                    return date.getFullYear().toString().substr(-2 )
                }
            }
        })(),
        Defaults: function(){
            var d = new Date();
            var n = d.toLocaleTimeString();
            var month = new Array();
                        month[0] = '1';
                        month[1] = '2';
                        month[2] = '3';
                        month[3] = '4';
                        month[4] = '5';
                        month[5] = '6';
                        month[6] = '7';
                        month[7] = '8';
                        month[8] = '9';
                        month[9] = '10';
                        month[10] = '11';
                        month[11] = '12';

                        var d = new Date();
                        return date.getFullYear().toString()+'-0' +month[d.getMonth().toString()]+ '-'+ date.getDate().toString() +'T'+d.toString().substr(16,8)
            

        }
    }
})();



//  var now = new Date();
//                     var hour12 = now.getHours() % 12 || 12;
//                         return hour12.toString();


