$(document).ready(function(){
    $("button#buttonhide").click(function(){
        $(".container1").hide();
        $(".container2").show();
        
    

var deposit=$("#name1").val();
console.log(deposit);
$("#guteranya").text(deposit);

var deposit1=$("#initialamount").val();
console.log(deposit1);
$("#urakibura").text(deposit1);
if ($("button#amount9")) {

	$("button#amount9").click(function(){
    var deposit2 = parseInt($('#amount1').val());
    var sum = deposit2 + parseInt(deposit1);
    $('#urakibura').text(sum);
})
    

}



// $("button#amount10").click(function(){
//     var withdraw2 = parseInt($('#amount777').val());
//     var sum = deposit2 + parseInt(deposit1);
//     $('#urakibura').text(sum);

$("button#amount10").click(function(){
    var deposit24 = parseInt($('#amount777').val());
    var sum = parseInt(deposit1)-deposit24;
    $('#urakibura').text(sum);


});
});
 });