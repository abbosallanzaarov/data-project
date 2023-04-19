<script lang="ts">
import { Link } from 'svelte-navigator'
import CommentIcon from "../icons/CommentIcon.svelte";
import HeartIcon from "../icons/HeartIcon.svelte";

export let id: number = 0

</script>

<div class="card card-compact w-80 bg-base-100 shadow-md rounded">

  <figure><img class="h-60" src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>

  <div class="card-body">
      <div class="flex justify-between items-center">
        <span class="badge font-bold bg-green-500 text-white rounded p-3">
            Node.js
        </span>

        <div class="flex justify-center align-center gap-3 bg-base-200 rounded p-2">
            <div class="avatar">
                <div class="w-5 mask mask-squircle">
                    <img src="https://api.lorem.space/image/face?hash=47449" />
                </div>
            </div>
            <span class="font-medium"> Samuel Jackson </span>
        </div>

      </div>
    <h2 class="card-title mt-3">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
    <div class="card-actions mt-3 items-center justify-between">
      <div class="flex items-center gap-3">
           <div class="flex gap-2 items-center">
            <HeartIcon/> 
             <span class="font-bold">264</span>       
          </div>
          <div class="flex gap-2 items-center">
            <CommentIcon/> 
             <span class="font-bold">16</span>       
          </div>
      </div>
      <Link to="project/{id}" class="btn normal-case btn-outline btn-sm">Show Project</Link>
    </div>
  </div>
</div>