$(document).ready(() => {
  $.get('/api/currency', (rates) => {
    console.log('Launching Puppeteer');

    // Display CAD rate
    console.log('Exchange rate: ', rates[0]);
    $('#cad-rate').text(rates[0]);
  });
});
