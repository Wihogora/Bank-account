$(document).ready(function(){
    $("button#buttonhide").click(function(){
        $(".container1").hide();
        $(".container2").show();
 
var deposit=$("#name1").val();
console.log(deposit);
$("#adding").text(deposit);

var deposit1=$("#initialamount").val();
console.log(deposit1);
$("#adding1").text(deposit1);
if ($("button#amount9")) {

	$("button#amount9").click(function(){
    var deposit2 = parseInt($('#amount1').val());
    var sum = deposit2 + parseInt(deposit1);
    $('#adding1').text(sum);
})

}

$("button#amount10").click(function(){
    var deposit24 = parseInt($('#amount777').val());
    var sum = parseInt(deposit1)-deposit24;
    $('#adding1').text(sum);


});
});
 });