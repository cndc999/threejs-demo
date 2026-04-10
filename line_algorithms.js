function DDA(x1,y1,x2,y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const steps = Math.max(Math.abs(dx),Math.abs(dy));

    const xInc = dx / steps;
    const yInc = dy / steps;

    let x = x1;
    let y = y1;

    for(let i=0;i<=steps;i++)
    {
        drawPixel(Math.round(x),Math.round(y), 0xff0000);
        x += xInc;
        y += yInc;
    }
    
}

function Bresenham(x1,y1,x2,y2) {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);

    const sx = (x1 < x2) ? 1 : -1;
    const sy = (y1 < y2) ? 1 : -1;

    let err = dx - dy;
    while(true)
    {
        drawPixel(x1,y1, 0x0000ff);
        if(x1 === x2 && y1 === y2) 
             break;

        const err2 = err * 2;

        if(err2 > -dy)
            {
                err -= dy;
                x1 += sx;
            }
        if(err2 < dx)
        {
            err += dx;
            y1 += sy;
        }

    }

}

function Midpoint(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    let d = dy - dx / 2;

    let x = x1;
    let y = y1;

    drawPixel(x, y, 0x00ff00);

    while (x < x2) {
        x++;

        if (d < 0) {
            d += dy;
        } else {
            d += dy - dx;
            y++;
        }

        drawPixel(x, y, 0x00ff00);
    }
}

export {DDA, Bresenham, Midpoint};
