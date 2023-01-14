const staticNoise = (grid) => {
    for(let y = 0; y < grid.length; y ++) {
        for(let x = 0; x < grid.length; x ++) {
            let r = getRandomNumber(255);
            drawSquare(x*(c.width/grid.length),y*(c.height/grid.length),c.width/grid.length,c.height/grid.length,"rgb("+r+","+r+","+r+")");
        }
    }
}
const addNoise = (noiseMap, width, height, depth, params) => {
    let {fn, scale} = params;
    let noisefn = fn === 'simplex' ? noise.simplex3 : noise.perlin3;        
    for (let y = 0; y < height; y++) {
        if(!noiseMap[y]) noiseMap[y]=[];
        for (let x = 0; x < width; x++) {
            let value = noisefn(x / scale, y / scale, depth);
            let newNoise = ((1 + value) * 1.1 * 128);
            if(typeof noiseMap[y][x]==='undefined'){
                noiseMap[y][x] = newNoise;
            }
            else{
                noiseMap[y][x] *=newNoise;
                noiseMap[y][x] += 0.55;
            }
            noiseMap[y][x] * 255;
            //drawSquare(x*(c.width/width),y*(c.height/height),c.width/width,c.height/height,"rgb("+noise/6+","+0+","+noise+")");
        }
    }
    return noiseMap;
}