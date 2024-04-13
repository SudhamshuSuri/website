<script>
    let title = '';
    let body = '';
    import Notes from '../components/Notes.svelte';
</script>
  
<div class="flex items-center justify-center h-screen">
    <div class="w-1/3">
      <div class="bg-slate-900 text-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Enter your note</h2>
        <input
          class="bg-transparent outline-2 outline-offset-2 outline-violet-400 text-white p-2 mb-4 rounded-lg w-full"
          placeholder="Title"
          bind:value={title}
        />
        <textarea
          class="bg-transparent outline-2 outline-offset-2 outline-violet-400 text-white p-2 mb-4 rounded-lg w-full"
          placeholder="Body"
          bind:value={body}
        />
        <button class="bg-violet-400 text-white p-2 rounded-lg">Submit</button>
      </div>
    </div>
</div>

<main>
  <Notes />
</main>