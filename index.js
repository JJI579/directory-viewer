const fs = require('fs').promises;
const path = require('path');

async function walk(dir) {
    let files = await fs.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) return [filePath, true];
        else if(stats.isFile()) {
            var fileSplit = filePath.split('.');
            return [filePath, fileSplit[fileSplit.length-1]];
        } 
    }));

    return files
}

walk('bruh').then(files => {
})
