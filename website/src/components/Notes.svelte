<!-- src/components/Notes.svelte -->
<script>
    import { surreal } from '../lib/surreal.js';
    import { onMount } from 'svelte';

    let notes = [];
  
    async function fetchNotes() {
      try {
        const result = await surreal.query(`
          select * from users/notes
        `);
  
        notes = result.result;
      } catch (error) {
        console.error(error);
      }
    }
  
    // Fetch the notes when the component is mounted
    onMount(fetchNotes);
  </script>
  
  <div class="flex items-center justify-center h-screen">
    <div class="w-1/3">
      <div class="bg-slate-900 text-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Your notes</h2>
        {#each notes as note}
          <div class="bg-slate-800 p-4 rounded-lg mb-2">
            <h3 class="text-xl font-bold mb-1">{note.title}</h3>
            <p class="text-gray-300">{note.body}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>