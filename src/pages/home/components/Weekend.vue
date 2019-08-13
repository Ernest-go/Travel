<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" />
				</div>	
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name:'HomeWeekend',
	data () {
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/2cb12a625b4f5cb4d6d9a1f4cd307d65.jpg',
				title: '北京野生动物园',
				desc: '敢与森林之王近距离接触吗？'
			},
			{
				id: '0002',
				imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/2cb12a625b4f5cb4d6d9a1f4cd307d65.jpg',
				title: '北京野生动物园',
				desc: '敢与森林之王近距离接触吗？'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
	line-height: .8rem
	background: #eee
	text-indent: .2rem
.ietm-img-wrapper
	overflow:hidden
	height: 0
	padding-bottom: 37.09%
	.item-img
		width: 100%
.item-info
	padding: .1rem
	.item-title
		line-height: .54rem
		font-size: .32rem
		ellipsis()
	.item-desc
		line-height: .4rem
		color: #ccc
		ellipsis()
</style>