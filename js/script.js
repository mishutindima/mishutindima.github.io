
function initialize() {
    var myLatlng = new google.maps.LatLng(55.694419, 37.42244); 

    var myOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	var marker = new google.maps.Marker({
		position: myLatlng, 
		map: map,
		title:"«Торговый Дом «Регионы»"
	});
}

$(document).ready(function() {
	// hover
	
	/**/
	initialize();
	$('#splash_menu a').hover(function(){
		$(this).find('.bord').stop().animate({top:-80})	
		$(this).find('img').stop().animate({top:-72, height:204})
		$(this).find('.button').stop().animate({top:132, height:52,paddingTop:0})								   
	}, function(){
		$(this).find('.bord').stop().animate({top:0})	
		$(this).find('img').stop().animate({top:8, height:0})
		$(this).find('.button').stop().animate({top:8, height:66,paddingTop:10})								   
	})
	
	$('.button1 span').css({opacity:0})
	$('.button1').hover(function(){
		$(this).find('span').stop().animate({opacity:1})						 
	}, function(){
		$(this).find('span').stop().animate({opacity:0})						 
	})
	
	$('#gallery1 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('.button1x span').css({opacity:0})
	$('.button1x').hover(function(){
		$(this).find('span').stop().animate({opacity:1})						 
	}, function(){
		$(this).find('span').stop().animate({opacity:0})						 
	})
	
	$('#gallery1 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery1').cycle({
		fx:    'scrollVert',
		pager:'.pagination',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery2 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery2').cycle({
		fx:    'scrollVert',
		pager:'.pagination2',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});	
	
	$('#gallery3 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery3').cycle({
		fx:    'scrollVert',
		pager:'.pagination3',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery4 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery4').cycle({
		fx:    'scrollVert',
		pager:'.pagination4',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery5 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery5').cycle({
		fx:    'scrollVert',
		pager:'.pagination5',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery6 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery6').cycle({
		fx:    'scrollVert',
		pager:'.pagination6',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery7 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery7').cycle({
		fx:    'scrollVert',
		pager:'.pagination7',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery8 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery8').cycle({
		fx:    'scrollVert',
		pager:'.pagination8',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery9 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery9').cycle({
		fx:    'scrollVert',
		pager:'.pagination9',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery10 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery10').cycle({
		fx:    'scrollVert',
		pager:'.pagination10',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery11 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery11').cycle({
		fx:    'scrollVert',
		pager:'.pagination11',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery12 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery12').cycle({
		fx:    'scrollVert',
		pager:'.pagination12',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery13 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery13').cycle({
		fx:    'scrollVert',
		pager:'.pagination13',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery14 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery14').cycle({
		fx:    'scrollVert',
		pager:'.pagination14',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery15 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery15').cycle({
		fx:    'scrollVert',
		pager:'.pagination15',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('#gallery16 a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#gallery16').cycle({
		fx:    'scrollVert',
		pager:'.pagination16',  // selector for element to use as pager container
		activePagerClass: 'active', // class name used for the active pager link
		timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
		speed: 800, // speed of the transition (any valid fx speed value)
		prev: '.prev',  // selector for element to use as event trigger for previous slide 
		next: '.next'  // selector for element to use as event trigger for next slide 
	});

    $('#gallery17 a').hover(function() {
        $(this).find('img').stop().animate({ opacity: 0.8 })
    }, function() {
        $(this).find('img').stop().animate({ opacity: 1 })
    })

	$('#gallery17').cycle({
	    fx: 'scrollVert',
	    pager: '.pagination17',  // selector for element to use as pager container
	    activePagerClass: 'active', // class name used for the active pager link
	    timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
	    speed: 800, // speed of the transition (any valid fx speed value)
	    prev: '.prev',  // selector for element to use as event trigger for previous slide 
	    next: '.next'  // selector for element to use as event trigger for next slide 
	});
    
	$('#gallery18 a').hover(function () {
	    $(this).find('img').stop().animate({ opacity: 0.8 })
	}, function () {
	    $(this).find('img').stop().animate({ opacity: 1 })
	})

	$('#gallery18').cycle({
	    fx: 'scrollVert',
	    pager: '.pagination18',  // selector for element to use as pager container
	    activePagerClass: 'active', // class name used for the active pager link
	    timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
	    speed: 800, // speed of the transition (any valid fx speed value)
	    prev: '.prev',  // selector for element to use as event trigger for previous slide 
	    next: '.next'  // selector for element to use as event trigger for next slide 
	});
    
	$('#gallery19 a').hover(function () {
	    $(this).find('img').stop().animate({ opacity: 0.8 })
	}, function () {
	    $(this).find('img').stop().animate({ opacity: 1 })
	})

	$('#gallery19').cycle({
	    fx: 'scrollVert',
	    pager: '.pagination19',  // selector for element to use as pager container
	    activePagerClass: 'active', // class name used for the active pager link
	    timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
	    speed: 800, // speed of the transition (any valid fx speed value)
	    prev: '.prev',  // selector for element to use as event trigger for previous slide 
	    next: '.next'  // selector for element to use as event trigger for next slide 
	});
    
	$('#gallery20 a').hover(function () {
	    $(this).find('img').stop().animate({ opacity: 0.8 })
	}, function () {
	    $(this).find('img').stop().animate({ opacity: 1 })
	})

	$('#gallery20').cycle({
	    fx: 'scrollVert',
	    pager: '.pagination20',  // selector for element to use as pager container
	    activePagerClass: 'active', // class name used for the active pager link
	    timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
	    speed: 800, // speed of the transition (any valid fx speed value)
	    prev: '.prev',  // selector for element to use as event trigger for previous slide 
	    next: '.next'  // selector for element to use as event trigger for next slide 
	});
    
	$('#gallery21 a').hover(function () {
	    $(this).find('img').stop().animate({ opacity: 0.8 })
	}, function () {
	    $(this).find('img').stop().animate({ opacity: 1 })
	})

	$('#gallery21').cycle({
	    fx: 'scrollVert',
	    pager: '.pagination21',  // selector for element to use as pager container
	    activePagerClass: 'active', // class name used for the active pager link
	    timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
	    speed: 800, // speed of the transition (any valid fx speed value)
	    prev: '.prev',  // selector for element to use as event trigger for previous slide 
	    next: '.next'  // selector for element to use as event trigger for next slide 
	});
    
	$('#gallery22 a').hover(function () {
	    $(this).find('img').stop().animate({ opacity: 0.8 })
	}, function () {
	    $(this).find('img').stop().animate({ opacity: 1 })
	})

	$('#gallery22').cycle({
	    fx: 'scrollVert',
	    pager: '.pagination22',  // selector for element to use as pager container
	    activePagerClass: 'active', // class name used for the active pager link
	    timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
	    speed: 800, // speed of the transition (any valid fx speed value)
	    prev: '.prev',  // selector for element to use as event trigger for previous slide 
	    next: '.next'  // selector for element to use as event trigger for next slide 
	});
    
	$('#gallery23 a').hover(function () {
	    $(this).find('img').stop().animate({ opacity: 0.8 })
	}, function () {
	    $(this).find('img').stop().animate({ opacity: 1 })
	})

	$('#gallery23').cycle({
	    fx: 'scrollVert',
	    pager: '.pagination23',  // selector for element to use as pager container
	    activePagerClass: 'active', // class name used for the active pager link
	    timeout: false, // milliseconds between slide transitions (0 to disable auto advance)
	    speed: 800, // speed of the transition (any valid fx speed value)
	    prev: '.prev',  // selector for element to use as event trigger for previous slide 
	    next: '.next'  // selector for element to use as event trigger for next slide 
	});
	
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	
	


	
	$( "#tabs_target" ).tabs();
	$('#slides').slides({
				preload: true,
				generateNextPrev: false,
				pagination: false,
				generatePagination: false
			});
	$("#send_request_form_submit").click(function(){
	   
      var sender_name = $("#sender_name").val();
      var sender = $("#sender").val();
	  var phone = $("#phone").val();
      var message = $("#message").val();
	  var subject = $("#subject").val();
      $.ajax({
         type: "POST",
         url: "bin/MailHandler1.php",
         data: {"sender_name": sender_name, "sender": sender, "phone": phone, "subject": subject, "message": message},
		 
         cache: false,
         success: function(response){
             var messageResp = new Array('Ваше сообщение отправлено','Неправильный адрес электронной почты','Нельзя отправлять пустые сообщения','Ошибка прои отправке сообщения');
			 
             var resultStat = messageResp[Number(response)];
			 alert(resultStat);
             if(response == 0){
				$("#sender_name").val('');
      			$("#sender").val('');
	  			$("#phone").val('');
      			$("#message").val('');
	  			$("#subject").val('');
             }
             $("#resp").text(resultStat).show().delay(1500).fadeOut(800);
          }
          });
          return false;                                                 
    });	

	
    /*$('#ContactForm').forms({
        ownerEmail: '#'
    });*/
	
	day=['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
	SetData();
    function SetData() {
	    var now = new Date();
		$('.date').html(day[now.getDay()]+' ');
	    if (now.getDate()<10) {$('.date').append('0')}
		$('.date').append(now.getDate()+', ');
		$('.date').append(now.getFullYear());
		/*Cufon.replace('.date', { fontFamily: 'Calibri'});*/
	}
	
	
	
 });

$(window).load(function() {	
	
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:54,
		trackCl:'track',
		shuttleCl:'shuttle'
	})		
	fl=false;
	//content switch
	var content=$('#content'),
		nav=$('.menu');
    nav.navs({
        useHash: true,
        hoverIn: function(li) {
            $('> a .bord', li).stop().animate({ height: 84 }, 600);
        },
        hoverOut: function(li) {
            if (!$(li).hasClass('sfHover')) {
                $('> a .bord', li).stop().animate({ height: 6 }, 600);
            }
        },
        hover: true
    });
    nav.navs(function(n, _) {
        content.cont_sw(n);
        if (_.n == -1) {
            $('.bord', nav).stop().animate({ height: 6 }, 600);
        }
    });
    content.cont_sw({
        showFu: function() {
            var _ = this;
            
            var pageHeight = 620;
            if (location.hash.search("#!/partners_zsjb5") != -1) {
                pageHeight = 1070;
            }
            if (location.hash.search("#!/partners_specstroyr") != -1) {
                pageHeight = 720;
            }
            if (location.hash.search("!/partners_starocementny") != -1) {
                pageHeight = 1020;
            }
            if (location.hash.search("!/partners_bashbeton") != -1) {
                pageHeight = 700;
            }

            $.when(_.li).then(function() {
                _.next.css({ display: 'block' }).stop().animate({ height: pageHeight, paddingTop: 30 }, 600);

            });
            $('#content').stop().animate({ height: pageHeight + 300 }, 600);
            $('.bg_menu').stop().animate({ marginTop: -40, height: 164 });
            $('#splash_menu').find('.bord').stop().animate({ top: 0 });
            $('#splash_menu').find('.button').stop().animate({ top: 8, height: 66, paddingTop: 10 });
            $('#splash_menu').find('img').stop().animate({ top: 8, height: 0 }, function() {
                $('#splash_menu').css({ display: 'none' });
            });
            fl = true;
            setSize();

        },
        hideFu: function() {
            var _ = this
            _.li.stop().animate({ height: 0, paddingTop: 0 }, 600, function() { $(this).css({ display: 'none' }) });
        },
        preFu: function() {
            var _ = this
            _.li.css({ position: 'absolute', display: 'none' });
        }
    });
	var h, new_h;
	setHeight();
	h=new_h;
	setSize();
	function setHeight(){
		new_h=$(window).height();
	}
	function setSize(){
		if (fl) {h_cont=992;} else {h_cont=496;}
		if (h>h_cont) {
			$('#content').parent().stop().animate({paddingTop:~~((h-h_cont)/2)});	
		} else {
			$('#content').parent().stop().animate({paddingTop:0});	
		}
	}
	setInterval(setNew,1);
	function setNew(){
		setHeight();
		if ((h!=new_h)) {
			h=new_h;
			setSize();
		}
	}
})