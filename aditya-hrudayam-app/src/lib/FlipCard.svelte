<script>
    let isFlipped = false;

    function handleClick() {
        isFlipped = !isFlipped;
    }

    export let frontContent = '';
    export let backContent = '';
    export let width = '300px';
    export let height = '200px';
</script>

<div
        class="flip-card"
        style="width: {width}; height: {height};"
        on:click={handleClick}
        on:keydown={(e) => e.key === 'Enter' && handleClick()}
        role="button"
        tabindex="0"
>
    <div class="flip-card-inner" class:flipped={isFlipped}>
        <div class="flip-card-front">
            <slot name="front">
                {@html frontContent}
            </slot>
        </div>
        <div class="flip-card-back">
            <slot name="back">
                {@html backContent}
            </slot>
        </div>
    </div>
</div>

<style>
    .flip-card {
        background-color: transparent;
        perspective: 1000px;
        cursor: pointer;
        margin: 10px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .flip-card-inner.flipped {
        transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
    }

    .flip-card-front {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .flip-card-back {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        transform: rotateY(180deg);
    }

    .flip-card:focus {
        outline: 2px solid #667eea;
        outline-offset: 2px;
    }
</style>
