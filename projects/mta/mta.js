/* global $ */
$("select").change(function(){
    $("#content").load("https://pswa.me/service/" + $("select").val() );
});