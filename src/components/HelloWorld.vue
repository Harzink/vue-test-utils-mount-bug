<template>
  <div class="hello">
    Model: {{ model }}
    <br/>
    <el-select v-model="model">
      <el-option
        value="true"
        label="foo"/>

      <el-option
        value="false"
        label="bar"/>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: null,
    }
  },
}
</script>
