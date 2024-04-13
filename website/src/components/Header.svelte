<script>
    export let y;

    import {Router, Link, Route} from 'svelte-routing';
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? 'py-4 bg-slate-950 border-violet-950' : 'py-6 bg-transparent border-transparent')}>

    
    <a class="font-medium text-3xl" href="/">
        <b class="font-bold JetBrains Mono text-violet-400">Sudhamshu</b> Suri
    </a>


    <div class="sm:flex items-center gap-4 hidden">
        <a href="/SignIn/" class="duration-200 hover:text-violet-400">
            <p>Sign In</p>
        </a>

        <a href="/SignUp" class="duration-200 hover:text-violet-400">
            <p>Sign Up</p>
        </a>
        

        <button class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
            <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"/>
            <a href="https://github.com/SudhamshuSuri" target="_blank">
                <h4 class="relative z-9">Get in touch</h4>
            </a>
        </button>

    </div>

</header>