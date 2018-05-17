const watchList = ['36CAD', '82GBP', '243EUR'];

$(document).ready(() => {
  $('#add-currency-btn').on('click', (e) => {

  });

  $.post('/api/currency', { watchList }, (rates) => {
    console.log('Launching Puppeteer');

    // Display watched currencies
    console.log('Exchange rate: ', rates[0]);
    $('#cad-rate').text(rates[0]);

    for (let i = 0; i < rates.length; i += 1) {
      const currency = $('<tr>');
      const currencyInfo = $(`<th scope="row">${i + 1}</th><td>${watchList[i]}</td><td>${rates[i]}</td>`);
      currency.append(currencyInfo);
      $('#watchlist-body').append(currency);
    }
  });
});
