
<template>
	<div>
		<h1 id="msg">{{ msg }}</h1>
		<span class="caus">hello world</span>
		<span> {{ $route.params.id }}</span>
		<router-view name="a"></router-view>
	</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'test',
      data: 123
    }
  }
}
</script>

<style scoped lang="scss">

$blue:#3bbfce;
@mixin wh($width,$height) {
	width: $width;
	height: $height;
	margin-left:10rem;
}
#msg {
	color:$blue;
	background:darken($blue,9%);
	font-size:1.4rem;
	@include wh(50%,40px);
}

.caus{
	color:blue;
}

</style>

