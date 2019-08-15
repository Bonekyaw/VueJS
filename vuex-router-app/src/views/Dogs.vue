<template>
  <div>
    <PetTable species="dogs" :pets="dogs" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

  export default {
    components: {
      PetTable
    },
    data() {
      return { }
    },
    computed: {
      ...mapState([
          'dogs'
        ])
    }

  }
</script>
// mapState helper which generates computed getter functions for us
// ...mapState Object Spread Operator