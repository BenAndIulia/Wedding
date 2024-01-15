
document.querySelector(".close-modal").addEventListener("click", function()
{
document.querySelector(".modal-container").style.display = "none";
});

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".modal-container").style.display = "block";
        },
        2500
    )

});