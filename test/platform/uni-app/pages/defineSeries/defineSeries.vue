<template>
	<view>
		<canvas canvas-id="canvas1"></canvas>
	</view>
</template>

<script>
	import Clunch from "../../../../../dist/clunch-template.js";
	export default {
		onReady() {

			Clunch.series('ui-test', ['string', function($stirng) {
				return {
					attrs: {
						info: $stirng()
					},
					link(painter, attr) {

						painter.config('textAlign', 'center').fillText(attr.info, 150, 150);

					}
				};
			}]);

			new Clunch({
				platform: "uni-app",
				el: {
					painter: uni.createCanvasContext("canvas1", this),
					width: 300,
					height: 300
				},
				data() {
					return {

					};
				},
				template: `
					<ui-test info='自定义组件测试' />
				`
			});
		}
	}
</script>

<style>
	canvas {
		width: 300px;
		height: 300px;
	}
</style>
