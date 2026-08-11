// const express = require('express');
// const router = express.Router();
// const { submitContact, submitIndustryQuote, submitResearchQuote } = require('../controllers/formController');

// router.post('/contact', submitContact);
// router.post('/industry-quote', submitIndustryQuote);
// router.post('/research-quote', submitResearchQuote);

// module.exports = router;




const express = require('express');
const router = express.Router();
const multer = require('multer');
// const { submitContact, submitIndustryQuote, submitResearchQuote } = require('../controllers/formController');
const { submitContact, submitIndustryQuote, submitResearchQuote, submitInternApplication } = require('../controllers/formController');

// Configure multer for memory storage (files kept in RAM as buffers)
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 } // 25 MB limit per file
});

router.post('/contact', submitContact);

// Add upload.array('attachments') middleware to handle the files
router.post('/industry-quote', upload.array('attachments'), submitIndustryQuote);
router.post('/research-quote', upload.array('attachments'), submitResearchQuote);
// The frontend appends the file as "resume", so we use upload.array('resume')
router.post('/intern-application', upload.array('resume'), submitInternApplication);

module.exports = router;