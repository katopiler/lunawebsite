const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// Set up the Express router
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/styles.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'styles.css'));
});

router.get('/logo.png', function(req, res) {
  res.sendFile(path.join(__dirname, 'logo.png'));
});

app.use('/', router);

// Set up the Express server to listen on port 3000 and log some messages when the server is ready
let server = app.listen(3000, function() {
  console.log("App server is running on port 3000");
});

// JavaScript code for the accordion interaction
const items = document.querySelectorAll('.accordion button');

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item button');

  function toggleAccordion() {
    const content = this.nextElementSibling;
    const expanded = this.getAttribute('aria-expanded') === 'true';

    // Close all accordion items
    accordionItems.forEach(item => {
      item.setAttribute('aria-expanded', 'false');
      content.style.maxHeight = '0';
    });

    // Toggle the selected accordion item
    this.setAttribute('aria-expanded', !expanded);
    content.style.maxHeight = expanded ? '0' : content.scrollHeight + 'px';
  }

  accordionItems.forEach(item => {
    item.addEventListener('click', toggleAccordion);
  });
});
