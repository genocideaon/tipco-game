window.onload = function () {
    $(document).ready(function () {
		
		/* =hide scroll
		========================================================================== */
		window.addEventListener("load",function() {
			setTimeout(function(){
				// This hides the address bar:
				window.scrollTo(0, 1);
			}, 0);
		});
		
		/* =Light box
		========================================================================== */
		$('.fancybox').fancybox({
			padding: 0,
			closeBtn: false,
			beforeShow: function(){
				$(".fancybox-skin").css("backgroundColor","transparent");
			},
			afterLoad: function(){
				$('.light-box-close').on('click', function(e){
					e.preventDefault();
					$.fancybox.close();	
					
				});
				
			}
		});
		
		$('.fancybox-victory').fancybox({
			padding: 0,
			beforeShow: function(){
				$(".fancybox-skin").css("backgroundColor","transparent");
			},
			afterLoad: function(){
				$('.light-box-close').on('click', function(e){
					e.preventDefault();
					$.fancybox.close();	
					
				});
				
			}
		});
		
		$('#button_play').fancybox({
			padding: 0,
			closeBtn: false,
			beforeShow: function(){
				$(".fancybox-skin").css("backgroundColor","transparent");
				
			},
			afterLoad: function(){
				$('.light-box-close').on('click', function(e){
					e.preventDefault();
					$.fancybox.close();	
					setTimeout(function(){
						window.location.href = "play.html";
					},20000);
				});
				
			},
			closeClick: true,
			afterClose: function(){
				window.location.href = "play.html";
				
			}
		});
		
		/* =Animation when load
		========================================================================== */
		$('.home').addClass('play');
		
		/* page play */
		$('.play').addClass('play-begin');
		
		/* play state 1 */
		
		/* page result */
		$('.result').addClass('play');
		
		/* page victory */
		if($('.result-wrapper').length){
			setTimeout(function(){
				$('.victory').addClass('play');
				$('.result-wrapper').addClass('hide-this');
				
				setTimeout(function(){
					$('.prize-wrapper').addClass('active');
					if($('.prize').length){
						var prizeNumber = (Math.floor(Math.random() * 3) + 1) - 1;
						
						setTimeout(function(){
							$('.prize').removeClass('active');
							$('.prize-item').eq(prizeNumber).addClass('active');
							
							$('.prize-item a').fancybox({
								padding: 0,
								closeBtn: false,
								beforeShow: function(){
									$(".fancybox-skin").css("backgroundColor","transparent");
								},
								afterLoad: function(){
									$('.light-box-close').on('click', function(e){
										e.preventDefault();
										$.fancybox.close();	
										
									});
									
								}
							});
							
							
							
						}, 3000);
					}
				}, 2000);
				
			}, 5000);
		}
		
		
		/* =Random victory
		========================================================================== */	
		/*function randomVictory(){
			var arrayNumber = [];
			var j = 0;
			var oldNumber = 1;
			for(var i = 0; i < 20; i++){
				var randomThis = Math.floor(Math.random() * 4) + 1;
				if(oldNumber == randomThis && oldNumber < 5) {
					randomThis + 1;
					oldNumber = randomThis;
				}else if(oldNumber == randomThis && oldNumber == 5){
					randomThis - 1;
					oldNumber = randomThis;
				}
				
				arrayNumber.push(randomThis);
			}
			console.log(arrayNumber);
			
			var randomNumber = setInterval(function(){
				
				$('#image_result').attr('src','asset/images/victory/'+ arrayNumber[j] + '.png');
				j++;
				if(j > 19) {
					clearInterval(randomNumber);
					
					setTimeout(function(){
						$.fancybox.open({
							href: "#please_share",
							padding: 0,
							closeBtn: false,
							beforeShow: function(){
								$(".fancybox-skin").css("backgroundColor","transparent");
							},
							afterLoad: function(){
								$('.light-box-close').on('click', function(e){
									e.preventDefault();
									$.fancybox.close();	
									
								});
								
							},
							closeClick: true
						});
					}, 1000);
				}
			}, 200);
		}*/
		
		
		
		
		/* =page play
		========================================================================== */	

		/*function step 2 */
		function step_2(){
			$('#menu_2').on('click', function(){
				
				
				$('#menu_1').off('click');
				
				$(this).addClass('active');
				$(this).removeClass('wait');
				
				/* change label */
				$('#label_1').removeClass('show-bot');
				$('#label_2').addClass('show-bot');
				
				/* do step 2 */
				$('#object_2').addClass('step-1');
				
				/* and do step 3 */
				setTimeout(function(){
					$('#menu_3').addClass('wait');
					$('#object_1 > img').fadeOut();
					step_3();
				}, 3500);
			});
		}
		
		/*function step 3 */
		function step_3(){
			$('#menu_3').on('click', function(){
				
				$('#menu_2').off('click');
				
				$(this).addClass('active');
				$(this).removeClass('wait');
				
				/* change label */
				$('#label_2').removeClass('show-bot');
				$('#label_3').addClass('show-bot');
				
				/* do step 3 */
				$('#object_3').addClass('step-1');
				
				/* and do step 3 */
				setTimeout(function(){
					$('#menu_4').addClass('wait');
					$('#object_2 > img').fadeOut();
					step_4();
				}, 3500);
			});
		}
		
		/*function step 4 */
		function step_4(){
			$('#menu_4').on('click', function(){
				
				
				$('#menu_3').off('click');
				
				$(this).addClass('active');
				$(this).removeClass('wait');
				
				/* change label */
				$('#label_3').removeClass('show-bot');
				$('#label_4').addClass('show-bot');
				
				/* do step 4 */
				$('#object_4').addClass('step-1');
				
				/* and do step 5 */
				setTimeout(function(){
					$('#menu_5').addClass('wait');
					$('#object_3 > img').fadeOut();
					$('#object_3 .pine-apple').fadeOut();
					
					step_5();
				}, 3500);
			});
		}
		
		/*function step 5 */
		function step_5(){
			$('#menu_5').on('click', function(){
				
				
				$('#menu_4').off('click');
				
				$(this).addClass('active');
				$(this).removeClass('wait');
				
				/* change label */
				$('#label_4').removeClass('show-bot');
				$('#label_5').addClass('show-bot');
				
				/* do step 5 */
				$('#object_4').addClass('step-2');
				$('#object').addClass('step-1');
				$('#object_5').addClass('step-1');
				
				/* and do final */
				setTimeout(function(){
					$.fancybox.open({
						href: "#result",
						padding: 0,
						closeBtn: false,
						beforeShow: function(){
							$(".fancybox-skin").css("backgroundColor","transparent");
						},
						afterLoad: function(){
							$('.light-box-close').on('click', function(){
								$.fancybox.close();	
								setTimeout(function(){
									window.location.href = "result.html";
								},20000);
							});
							
						},
						closeClick: true,
						afterClose: function(){
							window.location.href = "result.html";
							
						}
					});
				}, 5000);
				
			});
		}
		
		
		
		
		/* do it */
		$('#menu_1').on('click', function(){
			$(this).addClass('active');
			$(this).removeClass('wait');
			
			/* state 1 */
			$('#object_1').addClass('step-1');
			
			
			$('.clump img').on('click', function(){
				$('#object_1').addClass('step-2');
				$('#menu_2').addClass('wait');
				
				
				step_2();
				
			});
			
			
			$('#label_1').addClass('show-bot');
			
			
								
			
			
		});
		
		
		
		
		
		
    });
};





































