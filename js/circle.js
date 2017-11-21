// 圆形进度条
$(function(){

	$('#html').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj1 = $('#html').data('radialIndicator');
			radialObj1.animate(80);

			$('#java').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj2 = $('#java').data('radialIndicator');
			radialObj2.animate(70);
			
			$('#css').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj3 = $('#css').data('radialIndicator');
			radialObj3.animate(80);
			
			$('#oracle').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});			
			var radialObj4 = $('#oracle').data('radialIndicator');
			radialObj4.animate(80);
			
			$('#SQL').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});			
			var radialObj5 = $('#SQL').data('radialIndicator');
			radialObj5.animate(80);
			
			$('#javascript').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj6 = $('#javascript').data('radialIndicator');
			radialObj6.animate(75);
			
			$('#jquery').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj7 = $('#jquery').data('radialIndicator');
			radialObj7.animate(70);
			
			$('#BootStrap').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj8 = $('#BootStrap').data('radialIndicator');
			radialObj8.animate(70);
			
			$('#ssm').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj9 = $('#ssm').data('radialIndicator');
			radialObj9.animate(75);

	
})