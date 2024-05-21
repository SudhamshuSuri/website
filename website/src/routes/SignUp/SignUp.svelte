<script>
  let email = '';
  let password = '';
  let confirmPassword = '';
  let errorMessage = '';
  import { surreal } from '/src/lib/main.js';

  const handleFormSubmit = async (event) => {
  event.preventDefault();

  if (password !== confirmPassword) {
    errorMessage = 'Passwords do not match.';
    return;
  }

  try {
    surreal.signup({
      NS:'test',
      DB: 'test',
      SC: 'user',
      
      email: email,
      password: password,
    })
    // Handle successful sign up
    console.log('User signed up successfully.');
  } catch (error) {
    // Handle sign up error
    errorMessage = error.message;
    console.error(error);
  }
};

</script>

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
  <div class="w-full max-w-md space-y-8 bg-slate-900 p-8 rounded-xl shadow-lg">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
        Sign up
      </h2>
    </div>
    <form class="mt-8 space-y-6" on:submit|preventDefault={handleFormSubmit}>
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" bind:value={email}>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-slate-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" bind:value={password}>
        </div>
        <div>
          <label for="confirm-password" class="sr-only">Confirm Password</label>
          <input id="confirm-password" name="confirm-password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-slate-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" bind:value={confirmPassword}>
        </div>
      </div>
      {#if errorMessage}
        <p class="mt-2 text-sm text-red-600">{errorMessage}</p>
      {/if}
      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-400 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>