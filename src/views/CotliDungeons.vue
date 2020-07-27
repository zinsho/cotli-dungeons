<template>
  <div class="cotli-dungeons">
    <dungeonInputs />
    <dungeonOutputs />
  </div>
</template>

<script>
// @ is an alias to /src
import dungeonInputs from '@/components/DungeonInputs.vue'
import dungeonOutputs from '@/components/DungeonOutputs.vue'

export default {
  name: 'cotli-dungeons',
  components: {
      dungeonInputs,
      dungeonOutputs
  }
}
</script>
