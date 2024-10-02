import './index.html';
import './index.scss';
import Tom from './img/Tom.jpg'
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img')

const img = new Image();
img.src = Tom;
img.width = 300;

imgWrap.append(img);

console.log(mult(2, 4));
console.log(sum(2, 4));

