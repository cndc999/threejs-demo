import { DDA } from "./line_algorithms.js";
import { Bresenham } from "./line_algorithms.js";
import { Midpoint } from "./line_algorithms.js";

function drawCircle(xc, yc, x, y) {
    drawPixel(xc + x, yc + y);
    drawPixel(xc - x, yc + y);
    drawPixel(xc + x, yc - y);
    drawPixel(xc - x, yc - y);
    drawPixel(xc + y, yc + x);
    drawPixel(xc - y, yc + x);
    drawPixel(xc + y, yc - x);
    drawPixel(xc - y, yc - x);
}

function midPointCircle(xc, yc, r) {
    let x = 0;
    let y = r;
    let p = 1 - r;

    drawCircle(xc, yc, x, y);

    while (x < y) {
        x++;
        if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--;
            p += 2 * (x - y) + 1;
        }
        drawCircle(xc, yc, x, y); 
    }
}
function drawCar() {
   Bresenham(5, -8 , 12 , -8);
   Bresenham(5, -2 , 12 , -2);
   Bresenham(5, -8 , 5 , -2);
   Bresenham(12, -8 , 12 , -2);

   midPointCircle(6, -12, 2);
   midPointCircle(11, -12, 2);
}

export {DDA, Bresenham, Midpoint, drawCar};