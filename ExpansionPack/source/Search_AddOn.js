var searchBar = {};
(function () {
	/* Remove this when UL 1.4 is out */
	jQuery.expr[':'].epmstartswith = function (a, i, m) {
		return jQuery(a).text().toUpperCase().substr(0, m[3].length) === m[3].toUpperCase();
	};
	/* */ 
  
	//Add search
	function addSearchTopics() {
		
		var keepme = UI.pickTopicClick;
		UI.pickTopicClick = function (element) {
 
			keepme(element);
			var isResearch = element === "research";

			if (isResearch == false) {
				var game = GameManager.company.currentGame;
				if (game && (game.flags.lockedSettings && game.flags.lockedSettings.topic)) {

					return
				}

			}
			if (!isResearch && element) {
				return
			}

			var modal = $(".simplemodal-data");
			var container = modal.find(".listContainer");
			var title = modal.find(".overlayTitle").text("Pick Topic".localize("heading"));

			var e = title.find('.listContainer').find('.selectorButton');
			var a = title.parent().find('.listContainer')

			a.html('<div id="topicSearchDiv" class="centeredButtonWrapper">Topic Search: <input id="topicSearch" type="text" value="" maxlength="35" style="font-size: 22pt" /></div>' +

				'<div id="topicsToPick">' + a.html() + '</div>'
				);
			

			$('#topicSearch').on('input', function (e) {
				var searchstr = $(this).val();

				$('#topicsToPick > *').css({ position: 'absolute' }).show();

				if (searchstr.length > 0) {
					$('#topicsToPick > :not(:epmstartswith(' + searchstr + '))').css({ position: '' }).hide();
					$('#topicsToPick > :epmstartswith(' + searchstr + ')').css({ position: '' });

					
				}
			});
		}
		$('head').append('<style id="topicSearchCss" type="text/css"> .listContainer { overflow-x: hidden; overflow-y: hidden; } #topicsToPick { overflow-x: hidden;	overflow-y: visible; height: 92%; position: relative; padding-bottom: 3px; padding-left: 10px; } </style>');

		//UltimateLib.Visuals.Custom.setCss("listContainerFix", ".listContainer { overflow-x: hidden; overflow-y: hidden; }");
		//UltimateLib.Visuals.Custom.setCss("topicSearchOverflow", "#topicsToPick { overflow-x: hidden;	overflow-y: visible; height: 92%; position: relative; padding-bottom: 3px; padding-left: 10px; }");
	} addSearchTopics();
})();