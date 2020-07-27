<template>
  <div class="totalIdols">
    <label>Total Idols: </label>
    <input v-model="value | sci">
    </div>
</template>

<script>
export default {
  name: 'totalIdols',
  props: {
    value: {
      type: Number,
      twoWay: true
    }
  },
  filters: {
    sci: {
      read: function(value) {
        return value.toExponential(2)
      },
      write: function(value) {
        return parseFloat(value)
      }
    }
  }
}
