<template>
<div class="question-box-container">
	<b-jumbotron >
	    <template slot="lead">
	    	{{currentQuestion.question}}
	    </template>
	    <hr class="my-4">
	    <b-list-group>
		  <b-list-group-item v-for="(answer, index) in answers" :key="index">
		  	{{ answer }}
		  </b-list-group-item>
		</b-list-group>
	    <b-button variant="primary" href="#">Submit</b-button>
	    <b-button variant="success" @click="next" href="#">Next</b-button>  
	</b-jumbotron>
</div>
</template>
<script>
	export default {
		props: {
			currentQuestion: Object,
			next: Function
		},
		computed: {
			answers() {
				let answers = [...this.currentQuestion.incorrect_answers]  //spread opreator
				answers.push(this.currentQuestion.correct_answer)
				return answers
			}
		}
		//it means specifying only the properties you want and use the spread operator for the rest
		//But in this case, it takes only incorrect_answers from object of currentQuestion 
		//And it is also called rest operator that can take an indefinite number of arguments,
			// function sum(...numbers) {
			// 	return numbers.reduce((accumulator, current) => {
			// 		return accumulator += current;
			// 	});
			// };
			 
			// sum(1,2) // 3
			// sum(1,2,3,4,5) // 15

	}
</script>
<style scoped>
	.list-group {
		margin-bottom: 15px;
	}
	.btn {
		margin: 0 15px;
	}
</style>