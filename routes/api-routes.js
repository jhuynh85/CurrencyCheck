// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// let Book = require('../models/book.js');
const puppeteer = require('puppeteer');

// BoA site constants
const ADD_CURRENCY_LINK = 'body > div.fsd-layout.fsd-2c-700lt-layout > div > div > div.columns > div.flex-col.lt-col > div.currency-fc-aps-dp-module.v-exchange > div > form > div.currency-calc-actions > a';
const CURRENCY_DROPDOWN = '#currency-calc-add-modal > select';
const CONFIRM_ADD_CURRENCY = '#currency-calc-add-modal > button';
const CANADA = '36CAD';
const EXCHANGE_RATE_FIELD = 'body > div.fsd-layout.fsd-2c-700lt-layout > div > div > div.columns > div.flex-col.lt-col > div.currency-fc-aps-dp-module.v-exchange > div > form > table > tbody > tr > td.col-rate';

// Routes
// =============================================================
module.exports = (app) => {
  // Navigates to BoA site and gets exchange rate (to USD) of a specific currency
  app.get('/api/currency', (req, res) => {
    (async () => {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto('https://www.bankofamerica.com/foreign-exchange/exchange-rates.go');
      await page.click(ADD_CURRENCY_LINK);
      await page.select(CURRENCY_DROPDOWN, CANADA);
      await page.click(CONFIRM_ADD_CURRENCY);
      const CAD_EXCHANGE_RATE = await page.$eval(EXCHANGE_RATE_FIELD, el => el.innerText.split('\n')[0]);
      await browser.close();
      console.log('Exchange rate: ', CAD_EXCHANGE_RATE);
      res.json([CAD_EXCHANGE_RATE]);
    })();
  });

  //   // Add sequelize code to get all books and return them as JSON
  //   app.get('/api/all', (req, res) => {
  //         Book.findAll().then((result) => {
  //             res.json(result);
  //         });
  //     });

  //   // Add sequelize code to get a specific book and return it as JSON
  //   app.get('/api/:book', (req, res) => {
  //         Book.findAll({
  //             where: {
  //                 title: req.params.book
  //             }
  //         }).then((result) => {
  //             res.json(result);
  //         });
  //     });

  //   // Add sequelize code to get all books of a specific genre and return them as JSON
  //   app.get('/api/genre/:genre', (req, res) => {
  //         Book.findAll({
  //             where: {
  //                 genre: req.params.genre
  //             }
  //         }).then((result) => {
  //             res.json(result);
  //         });
  //     });

  //   // Add sequelize code to get all books from a specific author and return them as JSON
  //   app.get('/api/author/:author', (req, res) => {
  //         Book.findAll({
  //             where: {
  //                 author: req.params.author
  //             }
  //         }).then((result) => {
  //             res.json(result);
  //         });
  //     });

  //   // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  //   app.get('/api/books/long', (req, res) => {
  //         Book.findAll({
  //             where: {
  //                 pages: {
  //                     $gt: 150
  //                 }
  //             }
  //         }).then((result) => {
  //             res.json(result);
  //         });
  //     });

  //   // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  //   app.get('/api/books/short', (req, res) => {
  //         Book.findAll({
  //             where: {
  //                 pages: {
  //                     $lt: 151
  //                 }
  //             }
  //         }).then((result) => {
  //             res.json(result);
  //         });
  //     });

  //   // Add sequelize code to create a book
  //   app.post('/api/new', (req, res) => {
  //         Book.create({
  //             title: req.body.title,
  //             author: req.body.author,
  //             genre: req.body.genre,
  //             pages: req.body.pages
  //         }).then(() => {
  //             console.log("Added new book!");
  //         });
  //     });

//   // Add sequelize code to delete a book
//   app.post('/api/delete', (req, res) => {
//         Book.destroy({
//             where: {
//                 id: req.body.id
//             }
//         }).then(() => {
//             console.log("Deleted book with ID: " + req.body.id);
//         });
//     });
};
