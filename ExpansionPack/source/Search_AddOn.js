var searchBar = {};
(function () {
	jQuery.expr[':'].epmstartswith = function (a, i, m) {
		return jQuery(a).text().toUpperCase().substr(0, m[3].length) === m[3].toUpperCase();
	};
  
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
			$('#topicsToPick > *').each(function (i, e) {
				e = $(e)
				count = usedTopics(e.html());
				if (count >= 0) {
					count = ' <span class="numberCircle">' + count + '</span>';
				} else {
					count = '';
				}
				e.append(count);
			});
			$('#topicSearch').on('input', function (e) {
				var searchstr = $(this).val();
				$('#topicsToPick > *').css({ position: 'absolute' }).show();
				$('#topicsToPick .numberCircle').css({ position: 'absolute', float: '', top: '1px' });
				if (searchstr.length > 0) {
					$('#topicsToPick > :not(:epmstartswith(' + searchstr + '))').css({ position: '' }).hide();
					$('#topicsToPick > :epmstartswith(' + searchstr + ')').css({ position: '' });
					$('#topicsToPick .numberCircle').css({ position: 'relative', float: 'right' });
					$('#topicsToPick .numberCircle').first().css({ top: '-49px' });
				}
			});
		}
		$('head').append('<style id="topicSearchCss" type="text/css"> .listContainer { overflow-x: hidden; } #topicsToPick { overflow-x: hidden;	overflow-y: visible; height: 92%; position: relative; padding-bottom: 3px; padding-left: 10px; } </style>');
		$('#topicSearchCss').append('.numberCircle { position: absolute; top: 1px; right: 1px; display: block; height: 20px; width: 20px; line-height: 18.5px; border-radius: 50%; background-color: #494949; color: #ededed; text-align: center; font-size: 13px; }');
	} addSearchTopics();
	
	function usedTopics(topic) {
		var a = GameManager.company;
		var uses = 0;
		if (topic === "?") {
			uses = -1;
		}
		if (a.gameLog.length >= 1) {
			for (var i = 0; i < a.gameLog.length; i++) {
				console.log(topic)
				console.log(a.gameLog[i].topic.name)
				if (a.gameLog[i].topic.name == topic) {
					uses++;
				}
			}
		}
		return uses;
	}
	function pickTopicBypass() {
		var keepme = UI.pickTopicClick;
 
		UI.pickTopicClick = function (element) {
			console.log(element);
			$(element).find(".numberCircle").remove();
			console.log(element);
			return keepme(element);
		}
	} pickTopicBypass();
})();