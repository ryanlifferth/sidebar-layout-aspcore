$(document).ready(
    function () {

        // Stuff goes here

        $("#AddContent").on("click", function () {
            $(".main").append("<br /><br />More content<br /><br />");

            return false;
        });

    }
);