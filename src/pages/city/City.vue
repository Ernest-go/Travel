<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities" ></city-search>
		<city-list 
		:cities="cities" 
		:hot="hotCities"
		:letter="letter"></city-list>
		<city-alphaber 
		:cities="cities"
		@change="handleLetterClick"></city-alphaber>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphaber from './components/Alphabet.vue'
export default {
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphaber
	},
	data () {
		return {
			cities: {},
			hotCities: [],
			letter: ''
		}
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city.json')
				.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc (res) {
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
		},
		handleLetterClick (letter) {
			this.letter=letter
			console.log(letter)
		}	
	},
	mounted () {
			this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>
	
</style>