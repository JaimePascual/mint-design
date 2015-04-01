if(typeof window.IGN === "undefined" || !window.IGN){ IGN = {}; }

IGN.HeroUnit = function(){
	var AUTOSCROLL_DELAY = 			4000,	// autoscroll delay before switching

		FADE_IN_SPEED = 			800,	// speed at which text whill hide
		FADE_OUT_SPEED = 			800,	// speed at which text whill display
		THUMB_HOVER_DELAY = 		25,

		selectedThumb,				// points to current selected thumb in dom
		selectedContent,			// points to current selected content in dom
		selectedIntervalThumb,		// setInterval ID for thumb

		lastVidNum,

		thumbHoverDelayId,

		FADE_OVERLAY = 'fade-overlay';		// classname for fade overlay
		
	// hide and show related text box.
	var show = function(target, anim){
		if(anim){
			$j(target).fadeIn(anim);
		}else{
			$j(target).fadeIn(FADE_IN_SPEED);
		}
	}

	// will transition from curr selected element to next element
	var showNext = function(next, curr, anim){

		if(curr){
			if(anim){
				$j(curr).fadeOut(anim);
			}else{
				$j(curr).fadeOut(FADE_OUT_SPEED);
			}
		}
		show(next, anim);

		selectedContent = next;
	}

	/* 
	 * swaps the current displayed image and text to next
	 */
	var swapContent = function(next, curr, anim){
		// do not swap if next and curr are the same element
		if(!curr || next.attr('id') !== curr.attr('id')){
			showNext(next, curr, anim);
		}
	}
	var resetView = function(el){
		$j(el).css('display', 'none');
	}
	var autoScroll = {
		// pointer to interval id for setInterval()
		intervalId : null,
		resumeLast : 0,
		_list : $j('#top-stories > .wrapper-thumbs > .thumbs > li'),
		start : function(num, noDelay){
			num = (num && num < autoScroll.length()) ? num : 0;
			var list = autoScroll._list,
				length = autoScroll.length();
			var initStart = function(){
				if(length > 0){
					num = num % length;
					next($j('a > img', $j(list[num])), false);
					num++;
					autoScroll.resumeLast = num;
				}
			}
			if(!autoScroll.intervalId){
				if(noDelay){
					initStart();
				}
				autoScroll.intervalId = setInterval(initStart, AUTOSCROLL_DELAY);
			}
		},
		stop : function(){
			clearInterval(autoScroll.intervalId);
			autoScroll.intervalId = null;
	    },
		pause : function(){
			autoScroll.stop();	
		},
		resume : function(){
			autoScroll.start(autoScroll.resumeLast || 0);	
		},
		reset : function(){
			autoScroll.stop();	
			autoScroll.start();	
		},
		length : function(){
			return this._list.length;
		}
	};

	// adds selected class to thumbnail
	var selectThumb = function(el){
		if(!selectedThumb || $j(el).attr('id') !== $j(selectedThumb).attr('id')){
			$j(selectedThumb).parent().parent().removeClass('selected');
			$j(el).parent().parent().addClass('selected');
			selectedThumb = el;
		}
	}

	//
	var next = function(aId, anim){
		selectThumb(aId);
		var nextSelectedContent = $j("#"+decodeIdValue($j(aId).parent('a').attr('id')));
		swapContent(nextSelectedContent, selectedContent, anim);
	}

	var decodeIdValue = function(id){
		if(id){
			return id+"l";
		}
	}
	
	// creates the overlay used for doign fake fade
	var createFadeOverlay = function(){
		var fade = document.createElement('div');
		fade.className = FADE_OVERLAY;	
		$j('#top-stories > .content').prepend($j(fade));
	}

function hideVideoPlayer(){}
	
function showVideoPlayer(vidNum,params,minAge){}

	return {
		autoScroll : autoScroll,
		pause : autoScroll.pause,
		resume : autoScroll.resume,
		reset : autoScroll.reset,
		showPlayer : showVideoPlayer,
		hidePlayer : hideVideoPlayer,
		
				 
		// todo: END remove after demmo
		init : function(startThumb){
			if(!$j('#top-stories').length){
				return false;
			}
			//createFadeOverlay();
			var show = startThumb || 0;
			var stories = $j('#top-stories > .wrapper-thumbs > .thumbs > li > a')
			for(var i = 0, len = $j(stories).length; i < len; i++){
				var value = decodeIdValue($j(stories[i]).attr('id'));
				var dataId = $j("#"+value);
				resetView(dataId);
			}
			IGN.HeroUnit.autoScroll.start(show, true);

			/*
			$j('#fe1, #fe2, #fe3, #fe4, #fe5, #fe6').mouseover(function(e){
				autoScroll.stop();
				next(this, false);
			});
			*/
			$j('#top-stories > .wrapper-thumbs > .thumbs > li').mouseover(function(e){
				var that = this;
				thumbHoverDelayId =	setTimeout(
					function(){
						autoScroll.stop();
						next($j('a > img', that), 400);
					}, THUMB_HOVER_DELAY);
			});
			$j('#top-stories > .wrapper-thumbs > .thumbs > li').mouseout(function(e){
					clearTimeout(thumbHoverDelayId);
			});
	    }
	};
}();
IGN.HeroUnit.init();
