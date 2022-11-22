// window.alert("linked");
function reset(){
    $(".subheading").html("Deadlock Detector!")
    for(var i =1;i<=5;i++){
        for(var j=1;j<=3;j++){
            $("#a"+i+j).val("");
            $("#m"+i+j).val("");
            $("#n"+i+j).val("");
        }
        $("#p"+i).html("");
        
    }
    $("#av11").val("");
    $("#av12").val("");
    $("#av13").val("");
    $("#resourceA").val("");
    $("#resourceB").val("");
    $("#resourceC").val("");
    $("#p1").val("");
    $("#p2").val("");
    $("#p3").val("");
    $("#p4").val("");
    $("#p5").val("");
    // $("body").css("backgroundColor","#ffffff");
    $(".circles li").css("background","#B985CA")
    
}
function example(){
    sam = [[0,1,0],
        [2,0,0],
        [3,0,2],
        [2,1,1],
        [0,0,2]];

  max = [[7,5,3],
        [3,2,2],
        [9,0,2],
        [2,2,2],
        [4,3,3]];
        for(var i=1; i<=5; i++){
            for(var j=1; j<=3; j++){
                $("#a"+i+j).val(sam[i-1][j-1]);
                $("#m"+i+j).val(max[i-1][j-1]);
              
            }
          }
          $("#resourceA").val(10);
          $("#resourceB").val(5);
          $("#resourceC").val(7);
}
function find_avai(){
    // var a = document.getElementById('resourceA').value;
    var a = $("#resourceA").val();
    console.log(a);
    var b = $("#resourceB").val();
    var c = $("#resourceC").val();
    var x=0;
    var y=0;
    var z=0;
    for(var i=1; i<=5; i++){
        var x = x+parseInt($("#a"+i+"1").val())
        var y = y+parseInt($("#a"+i+"2").val())
        var z = z+parseInt($("#a"+i+"3").val())
    }
    $("#av11").val(a-x);
    $("#av12").val(b-y);
    $("#av13").val(c-z);

}
function find_need(){
    for(var i=1; i<=5; i++){
        for(var j=1; j<=3; j++){
            $("#n"+i+j).val(parseInt($("#m"+i+j).val()) - parseInt($("#a"+i+j).val()));
        }
    }

}

function run_algo(){
    find_avai();
    find_need();
    var k=1;
    var q =1;
    for(var j=1; j<=5; j++){
        x1=parseInt($("#av11").val());
        x2=parseInt($("#av12").val());
        x3=parseInt($("#av13").val());
        for(var i=k; i<=5; i++){
            var ex1 = parseInt($("#a"+i+"1").val());
            var ex2 = parseInt($("#a"+i+"2").val());
            var ex3 = parseInt($("#a"+i+"3").val());
            if(ex1!= 0 || ex2!= 0 || ex3!= 0){
                if(x1 >= parseInt($("#n"+i+"1").val()) && x2 >= parseInt($("#n"+i+"2").val()) && x3>= parseInt($("#n"+i+"3").val())){
                    $("#p"+q).val("p"+i);
                    $("#av11").val(parseInt($("#av11").val()) + parseInt($("#a"+i+"1").val()));

                    $("#av12").val(parseInt($("#av12").val()) + parseInt($("#a"+i+"2").val()));

                    $("#av13").val(parseInt($("#av13").val()) + parseInt($("#a"+i+"3").val()));

                    // $("#a"+i+"1").val("0");
                    // $("#a"+i+"2").val("0");
                    // $("#a"+i+"3").val("0");
                    k=i+1;
                    if (k==6){
                    k=1;        
                    }
                    q = q + 1;
                    break;
                }
            }
        }
    }
    if(q != 6){
        // document.body.style.backgroundColor = "#ff7171";
        // alert("Deadlock!!");
        $(".subheading").html("Deadlock detected!!!")
        $(".circles li").css("background","#EF0107")
      }
      else{
        // document.body.style.backgroundColor = "#28df99";
        // alert("Safe!!");
        $(".subheading").html("Safe!!!")
        $(".circles li").css("background","#3FC704")
      }
}
// function show_content(){
//     $("#need").removeClass("hide")
//     $("#alloc-table").removeClass("allocinmid")
//     $("#max-table").removeClass("maxinmid")
// }
// function hide_content(){
//     $("#need").addClass("hide")
//     $("#alloc-table").addClass("allocinmid")
//     $("#max-table").addClass("maxinmid")
// } 
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.ok').offset().top }, 'slow');
      return false;
    });
  });