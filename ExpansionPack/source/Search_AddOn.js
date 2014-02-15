var searchBar = {};
(function () {
	var pTC = UI.pickTopicClick;
    UI.pickTopicClick = function(element) {
        pTC(element);
        var modal = $(".simplemodal-data");
        var container = modal.find(".listContainer");
        var titel = modal.find(".overlayTitle").text("Pick Topic".localize("heading"));
        var search = $('<span style="font-size:18px; margin-left: 40px;">Search Topic: </span><input id="filterbox" type="text" value="" maxlength="35" style="font-size: 22pt; width: 200px;" />')
        titel.append(search);

        jQuery.expr[':'].epmstartswith = function(a, i, m) {
            return jQuery(a).text().toUpperCase().substr(0, m[3].length) === m[3].toUpperCase();
        };

        $('#filterbox').on('input', function(e) {
            var searchstr = $(this).val();

            $('#myoutput').text(searchstr);

            $('.listContainer > *').css({ position: 'absolute' }).show();

            if (searchstr === "" || searchstr === "*") {
                return;
            }
            if (searchstr.length > 0) {
                $('.listContainer > :not(:epmstartswith(' + searchstr + '))').css({ position: '' }).hide();
                $('.listContainer > :epmstartswith(' + searchstr + ')').css({ position: '' });
            }
        });
    };
})();
