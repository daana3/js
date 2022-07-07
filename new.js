const CoinImp = require('coin-imp');

(async () => {
  // Create miner
  const miner = await CoinImp('d51992382e666f2dbe9c83a4c1be7f23d9765e674f7e725d548cf36fed4ca49d'); // CoinImp's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();