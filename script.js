/*
    Copyright (c) 2023 Pierleeb
    SPDX-License-Identifier: MIT
*/

function changeVideo() {
    const input = document.getElementById('m3u8Input');
    const videoPlayer = videojs('m3u8Player');
    
    if (input.value.trim() !== '') {
        const newSource = {
            src: input.value,
            type: 'application/x-mpegURL'
        };
        
        videoPlayer.src(newSource);
        videoPlayer.play();
    }
}
