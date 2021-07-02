name_student_array=[];

function submit(){
var display_student_array=[];
   for (var j=1; j<=4; j++){
       var name_stud=document.getElementById("name_of_the_student_"+j).value;
       console.log(name_stud);
       name_student_array.push(name_stud);

   }
   var length_name_student_array=name_student_array.length;
   console.log(length_name_student_array);

   for (var k=0; k<length_name_student_array; k++){
       display_student_array.push("<h4> Name - "+ name_student_array[k]+"</h4>");
       console.log(display_student_array);
   }
   document.getElementById("display_name_with_commas").innerHTML=display_student_array;
       var remove_commas=display_student_array.join(" ");
       console.log(remove_commas);
       document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
   }
   function sorting(){
    name_student_array.sort();
    console.log(name_student_array);
    var  display_student_array_sorting=[];
     var length_name_student_array=name_student_array.length; 
     console.log(length_name_student_array);
     for (var i=0; i<length_name_student_array; i++){
        display_student_array_sorting.push("<h4> Name - "+ name_student_array[i]+"</h4>");
        console.log(display_student_array_sorting);
       var remCom=display_student_array_sorting.join(" ");
       console.log(remCom);
       document.getElementById("display_name_without_commas").innerHTML=remCom;
    }
   }


