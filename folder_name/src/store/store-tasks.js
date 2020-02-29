import Vue from 'vue'
const state={
tasks:{
	 	'ID1':{
			name:'Go to shop',
			component:false,
			dueDate: '2019/05/12',
			dueTime: '18:30'
	 	},
	 	'ID2':{
	 		name:'Get bananas',
			component:false,
			dueDate: '2020/05/12',
			dueTime: '20:00'
	 	},
	 	'ID3':{
	 		name:'Get apples',
			component:false,
			dueDate: '2018/05/12',
			dueTime: '00:00'
	 	}
}
}
const mutations ={
updateTask(state, payload){
		Object.assign(state.tasks[payload.id], payload.
			updates)
},
deleteTask(state, id){

	Vue.delete(staste.tasks, id)
}
}
const actions={
updateTask({commit}, payload){
	commit ('updateTask',payload)
},
deleteTask({commit},id){
	commit('deleteTask',id)
}
}
const getters= {
tasks: (state) => {
	return state.tasks
}

}
export default{
namespaced:true,
state,
mutations,
actions,
getters

}