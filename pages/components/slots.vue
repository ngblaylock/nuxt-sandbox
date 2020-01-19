<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <Btn>Red Button</Btn>
            <p>This red button uses a component for the button, then a slot within the component that gives the button a name. In this case, the slot is <code>Red Button</code>.</p>
        </div>
    </div>
</div>
  
</template>

<script>
import Btn from '@/components/Btn'

export default {
    components: {
        Btn
    }
}
</script>

<style>

</style>