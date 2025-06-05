<script>
    import { FlipCard } from '$lib';
</script>

<main class="p-8 text-center max-w-6xl mx-auto">
    <h1 class="text-gray-800 text-4xl font-bold mb-4">Aditya Hrudayam</h1>
    <p class="text-gray-600 text-lg mb-8">Click on the cards to flip them and explore the content</p>

    <div class="flex flex-wrap justify-center gap-5 mt-8 md:gap-6 lg:gap-8">
        <FlipCard
                frontContent="<h2>Aditya Hrudayam</h2><p>Sacred Hymn to the Sun God</p>"
                backContent="<h3>About</h3><p>A powerful Sanskrit hymn dedicated to Lord Surya, found in the Ramayana</p>"
                width="320px"
                height="220px"
        />

        <FlipCard width="320px" height="220px">
            <div slot="front" class="p-4">
                <h2 class="text-2xl font-semibold mb-2">🌅 Morning Prayer</h2>
                <p class="text-gray-600">Start your day with devotion</p>
            </div>
            <div slot="back" class="p-4">
                <h3 class="text-xl font-semibold mb-3">Benefits</h3>
                <ul class="text-left list-none p-0 space-y-2">
                    <li class="pl-4 relative">
                        <span class="absolute left-0">✨</span>
                        Spiritual strength
                    </li>
                    <li class="pl-4 relative">
                        <span class="absolute left-0">✨</span>
                        Mental clarity
                    </li>
                    <li class="pl-4 relative">
                        <span class="absolute left-0">✨</span>
                        Divine protection
                    </li>
                </ul>
            </div>
        </FlipCard>

        <FlipCard
                frontContent="<h2>📿 Verses</h2><p>31 Sacred Shlokas</p>"
                backContent="<h3>Structure</h3><p>Each verse contains profound wisdom and divine praise for the Sun God</p>"
                width="320px"
                height="220px"
        />

        <FlipCard width="320px" height="220px">
            <div slot="front" class="p-4">
                <h2 class="text-2xl font-semibold mb-2">🕉️ Recitation</h2>
                <p class="text-gray-600">Listen & Learn</p>
            </div>
            <div slot="back" class="p-4">
                <h3 class="text-xl font-semibold mb-3">Practice</h3>
                <p class="text-gray-600">Regular recitation brings peace, prosperity, and spiritual growth</p>
            </div>
        </FlipCard>
    </div>
</main>
