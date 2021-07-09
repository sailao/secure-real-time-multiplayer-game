// import Player from './Player.mjs';
// import Collectible from './Collectible.mjs';

// const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

var mainImg = new Image()
mainImg.src = '../public/image/main-player.png'
mainImg.onload = () => context.drawImage(mainImg, 100, 100, 30, 30)

var otherImg = new Image()
otherImg.src = '../public/image/other-player.png'
otherImg.onload = () => context.drawImage(otherImg, 200, 100, 30, 30)