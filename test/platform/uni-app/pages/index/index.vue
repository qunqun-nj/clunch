<template>
	<view class="content">
		<view class="canvas">
			<canvas canvas-id="canvas1" id='canvas1_'></canvas>
		</view>
		<view class="clunch">
			<canvas canvas-id="canvas2" id='canvas2_'></canvas>
		</view>
	</view>
</template>

<script>
	import Clunch from '../../../../../dist/clunch-template.js';
	export default {
		data() {
			return {

			}
		},
		onReady() {

			this.doCanvas();

			//试试clunch
			new Clunch({
				el: {
					platform: 'uni-app',
					painter: uni.createCanvasContext('canvas2'),
					width: 375,
					heigth: 375
				},
				data(){
					return{
						info:"uni-app中的clunch测试"
					};
				},
				template: `<circle cx='150' cy='150' radius='100' type='stroke' line-width='10' />
					<text x='150' y='150' :content='info' align='center' fill-color='red' />
				`
			});

		},
		methods: {
			doCanvas() {
				let context = uni.createCanvasContext('canvas1');
				context.setStrokeStyle("#ff0000");
				context.moveTo(160, 100);
				context.arc(100, 100, 60, 0, 2 * Math.PI, true);
				context.moveTo(140, 100);
				context.arc(100, 100, 40, 0, Math.PI, false);
				context.moveTo(85, 80);
				context.arc(80, 80, 5, 0, 2 * Math.PI, true);
				context.moveTo(125, 80);
				context.arc(120, 80, 5, 0, 2 * Math.PI, true);
				context.stroke();
				context.draw();
			}
		}
	}
</script>

<style>
	canvas {
		width: 750rpx;
		height: 750rpx;
	}
</style>
