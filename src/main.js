import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// global mixings
Vue.mixin({
	methods: {
		css_var(var_name) {
			return getComputedStyle(document.documentElement).getPropertyValue(var_name);
		},
	}
});


// eslint-disable-next-line
const app = new Vue({
	render: h => h(App),
}).$mount('#app')
