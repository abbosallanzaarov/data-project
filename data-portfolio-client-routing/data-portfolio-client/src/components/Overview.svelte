<script lang="ts">
    import axios from 'axios'
    
    export let id: string = ""

    let data: string = ''

    axios.get('http://172.24.0.16:5050/projects/' + id)
         .then(res => {
             data = JSON.stringify(res.data)
         })
         .catch(err => {
             console.log(err);
         })


</script>

<div class="">
    {data}
</div>