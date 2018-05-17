const watchList = ['36CAD', '243EUR'];

$(document).ready(() => {
  $('#add-currency-btn').on('click', (e) => {

  });

  // Retrieve exchange rates from BoA site
  $.post('/api/currency', { watchList }, (rates) => {
    console.log('Launching Puppeteer');

    // Display watched currencies
    console.log('Exchange rate: ', rates[0]);

    // Hide spinner
    $('.spinner').hide();

    // Display exchange rates
    $('#watchlist-table').show();
    for (let i = 0; i < rates.length; i += 1) {
      const currency = $('<tr>');
      const currencyInfo = $(`<th scope="row">${i + 1}</th><td>${watchList[i]}</td><td>${rates[i]}</td>`);
      currency.append(currencyInfo);
      $('#watchlist-body').append(currency);
    }
  });
});
