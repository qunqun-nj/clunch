<template>
	<view>
		<canvas canvas-id="canvas1"></canvas>
	</view>
</template>

<script>
	import Clunch from "../../../../../dist/clunch-template.js";
	export default {
		onReady() {
			new Clunch({
				platform: "uni-app",
				el: {
					painter: uni.createCanvasContext("canvas1", this),
					width: 375,
					height: 500
				},
				data() {
					return {
						color: "#ff0000",
						dots: [100, 340, 200],
						dash: [10, 5],
						value1: ["星期1", "星期2", "星期3", "星期4", "星期5", "星期6", "星期7"]
					};
				},
				template: `
					<arc cx='100' cy='100' radius1='0' radius2='30' deg='1pi' :fill-color='color' />
					<arc cx='200' cy='300' radius1='100' radius2='50' deg='0.5pi' :stroke-color='color' type='stroke'/>
					<arc cx='200' cy='300' radius1='100' begin='0.6pi' dash='[10]' line-width='5' radius2='50' deg='0.5pi' :stroke-color='color' type='stroke'/>
					
					<circle cx='50' cy='50' radius='50' />
					
					 <path stroke-color='blue'>
						<move-to x='100' y='100'></move-to>
						<line-to :x='150*index' :y='item' c-for='(item,index) in dots'></line-to>
					</path>
					
					<path stroke-color='green' dash='[10]' line-width='5'>
						<move-to x='300' y='300'></move-to>
						<bezier-to x='200' y='300' cp1x='300' cp1y='400'></bezier-to>
					</path> 
					
					<rect x='200' y='100' width='100' height='200' type='stroke' />
					
					<text c-bind:x='_width*0.5' c-bind:y='_height*0.5' align='center'>
						上下左右居中的文字！
					</text>
					<text x='100' y='100' content='位置（100,100）'></text>
					<text x='100' y='200' content='位置（100,200）' font-size='30' type='full' stroke-color='red'></text>
					<text x='10' y='300' content='O虚线O' font-size='100' stroke-color='red' type='stroke' c-bind:dash='dash'></text>

					<ruler x='10' y='400' length='300' :value='value1' />
					
					<polar-ruler cx='200' cy='200' radius='150' :value='value1' color='pink'/>

				`
			});
		}
	}
</script>

<style>
	canvas {
		width: 375px;
		height: 500px;
	}
</style>
