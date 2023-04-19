<script lang="ts">
    import HeartIcon from "../icons/HeartIcon.svelte";

    export let id: string = "";
    let images = new Array(4);
    let comments = new Array(2);
</script>

<div class="mt-5 pb-10 w-">
    <div class="flex justify-between items-center gap-3">
        <h1 class="font-bold text-xl">
            <span class="badge font-bold bg-green-500 text-white rounded p-3">
                Node.js
            </span>
            Project
        </h1>
        <div
            class="flex justify-center align-center gap-3 bg-base-300 rounded p-2"
        >
            <div class="avatar">
                <div class="w-8 mask mask-squircle">
                    <img src="https://api.lorem.space/image/face?hash=47449" />
                </div>
            </div>
            <span class="font-medium"> Samuel Jackson </span>
        </div>
    </div>
    <div class="flex gap-6 p-3">
        <figure class="rounded-lg w-[500px]">
            <img src="https://api.lorem.space/image/movie?w=500&h=300" alt="" class="rounded-md">
        </figure>
        <figure class="rounded-lg w-[500px]">
            <img src="https://api.lorem.space/image/movie?w=500&h=300" alt="" class="rounded-md">
        </figure>
        <figure class="rounded-lg w-[500px]">
            <img src="https://api.lorem.space/image/movie?w=500&h=300" alt="" class="rounded-md">
        </figure>
    </div>
    <div class="flex justify-between items-center mt-6">
        <button class="btn btn-ghost">
            <HeartIcon />
        </button>
        <button class="btn btn-sm btn-primary rounded"> Git Repository </button>
    </div>

    <p class="py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quos exercitationem iusto, autem sunt aut suscipit minima commodi
        possimus, ad dignissimos aspernatur illo recusandae tempore impedit
        esse, mollitia natus animi saepe consequatur alias similique? Maxime
        magni aliquam architecto sunt, exercitationem praesentium inventore
        similique voluptatum cupiditate! Praesentium id, maxime delectus facilis
        eius maiores animi ipsam iste. Beatae aut deserunt veritatis optio
        facere neque tempora tenetur sunt repudiandae assumenda odit, sapiente
        ducimus modi explicabo eaque officiis veniam ipsa, voluptatum quos fuga
        dolores. Voluptatem delectus laboriosam incidunt beatae non perferendis
        quaerat explicabo alias voluptatum recusandae 
    </p>

    <h1 class="text-2xl py-6 border-b border-white/25">Comments</h1>

    <div class="flex gap-3 p-4">
        <input
            type="text"
            placeholder="Your name"
            class="input w-full max-w-xs"
        />
        <input type="text" placeholder="Message" class="input w-full " />
        <button class="btn btn-primary">Send</button>
    </div>
    <div class="flex pb-10 p-4 flex-col gap-3">
        {#each comments as comment}
        <div class="card w-full bg-base-100 p-3 flex flex-col gap-3 ">
                <div class="text-sd font-bold text-secondary">Anonim</div>
       
                <p class="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    dolorum officia labore maiores minima obcaecati nihil natus
                    mollitia doloribus reiciendis pariatur culpa beatae quis porro,
                    asperiores exercitationem harum quasi voluptates necessitatibus.
                    Enim quae totam corporis id non at perferendis laudantium facere
                    officiis eaque autem corrupti cupiditate dolores, veniam
                    accusamus iure, doloremque expedita modi sunt tempora tempore
                    itaque quaerat deserunt placeat. Ex facilis repellat nobis iure
                    commodi saepe natus officia quisquam?
                </p>
            <div class="card-actions">
                <span class="text-sm text-secondary">10.04.2022</span>
            </div>
        </div>
        {/each}
    </div>
</div>
