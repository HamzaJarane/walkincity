<template>
    <div class="radio radio_container" id="radio-player" data-current-channel="0" data-radio="<%= randomRadio %>">
        <button class="play_radio_container">
            <span class="play_radio_containerIco material-icons">
                <i class="fa-solid fa-play"></i>
            </span>
        </button>

        <span class="sidebar-radio voice_radio_container material-icons">
            <i class="fa-solid fa-volume-high"></i>
        </span>

        <input class="volume_radio_container" type="range" min="0" max="1" value="1" step="0.01">
        
        <button id="radio-backward-step" class="play_radio_container">
            <span class="play_radio_containerIco material-icons">
                <i style="padding-right: 6px;" class="fa-solid fa-backward-step"></i>
            </span>
        </button>
        
        <button id="radio-forward-step" class="play_radio_container">
            <span class="play_radio_containerIco material-icons">
                <i class="fa-solid fa-forward-step"></i>
            </span>
        </button>
    </div>
</template>