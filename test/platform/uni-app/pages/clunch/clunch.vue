<template>
	<view>
		<canvas canvas-id="canvas1"></canvas>
		<button type="primary" @click="updateSize">
			点击我改变画布大小
		</button>
	</view>
</template>

<script>
	import Clunch from "../../../../../dist/clunch-template.js";
	export default {
		data() {
			return {
				clunch: null
			};
		},
		onReady() {
			this.clunch = new Clunch({
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
				<circle :cx="_width*0.5" :cy="_height*0.5" radius='100' type='stroke' stroke-color='white' />
			  `
			});
		},
		methods: {
			updateSize() {
				this.clunch.$resize(200, 200);
			}
		}
	}
</script>

<style>
	canvas {
		width: 300px;
		height: 300px;
		background-color: #007AFF;
	}
</style>
