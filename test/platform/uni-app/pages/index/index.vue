<template>
	<view class="content">
		<view class="canvas">
			<canvas canvas-id="canvas1" id='canvas1_'></canvas>
		</view>
		<view class="clunch">
			<canvas canvas-id="canvas2" id='canvas2_'></canvas>
		</view>
		<navigator url="../clunch/clunch">
			<button type="primary">
				对象本身
			</button>
		</navigator>
		<navigator url="../series/series">
			<button type="primary">
				内置组件
			</button>
		</navigator>
		<navigator url="../defineSeries/defineSeries">
			<button type="primary">
				自定义组件
			</button>
		</navigator>
	</view>
</template>

<script>
	import Clunch from "../../../../../dist/clunch-template.js";
	export default {
		onReady() {
			this.doCanvas();

			//试试clunch
			new Clunch({
				platform: "uni-app",
				el: {
					painter: uni.createCanvasContext("canvas2", this),
					width: 375,
					height: 375
				},
				data() {
					return {
						color: "#ff0000"
					};
				},
				template: `
					<circle :stroke-color='color' cx='100' cy='100' radius='60' type='stroke' />
					<circle :stroke-color='color' cx='80' cy='80' radius='5' type='stroke' />
					<circle :stroke-color='color' cx='120' cy='80' radius='5' type='stroke' />
					<arc :fill-color='color' radius1='40' radius2='41' cx='100' cy='100' deg='1pi' type='fill' />

					<text deg='-10deg' x='10' y='190' baseline='bottom' font-size='10' fill-color='green'>
						欢迎使用clunch.js : https://hai2007.gitee.io/clunch
					</text>
				`
			});
		},
		methods: {
			doCanvas() {
				let context = uni.createCanvasContext("canvas1", this);
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
	};
</script>

<style>
	canvas {
		width: 375px;
		height: 200px;
	}

	button {
		margin: 10rpx;
		width: 250rpx;
		font-size: 12px;
	}

	navigator {
		display: inline-block;
	}
</style>
