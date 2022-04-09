function updateOutput(){

    $("iframe").contents().find("html").html("<html><head><style>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    window.frames[0].frameElement.contentWindow.eval($("#javascriptPanel").val()); 
}

$(".toggleButton").click(function(){

    $(this).toggleClass("active");

    let panelId = $(this).attr('id') + "Panel";

    $("#" + panelId).toggle();

})

updateOutput();

$(".panel").height($(window).height() - $("#header").height() - 20)

$("textarea").on('change keyup paste', function() {

    updateOutput();

})