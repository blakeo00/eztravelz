const http = require('http');
http.get('http://localhost:3000/pet-travel', (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
        let match = data.match(/\"message\":\"([^\"]+)\"/);
        console.log(match ? match[1] : data.substring(0, 500));
        process.exit(0);
    });
});
