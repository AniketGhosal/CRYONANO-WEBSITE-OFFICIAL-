// const db = require('../config/db');
// const sendEmail = require('../utils/sendEmail');

// exports.submitContact = async (req, res) => {
//   try {
//     const { name, email, phone, country, subject, message } = req.body;

//     const query = `INSERT INTO contact_messages (name, email, phone, country, subject, message) VALUES ($1, $2, $3, $4, $5, $6)`;
//     await db.query(query, [name, email, phone, country, subject, message]);

//     const emailHtml = `
//       <h3>New Contact Message</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
//       <p><strong>Country:</strong> ${country || 'N/A'}</p>
//       <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message}</p>
//     `;
//     await sendEmail(`NEW CONTACT: ${subject || 'General Inquiry'}`, emailHtml);

//     res.status(201).json({ message: "Message sent successfully!" });
//   } catch (err) {
//     console.error("Contact Form Error:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// };

// exports.submitIndustryQuote = async (req, res) => {
//   try {
//     const { firstName, lastName, email, phone, country, company, designation, industry, application, applicationOther, projectStage, purchaseTimeline, quantity, technicalRequirements, additionalInfo, selectedProducts } = req.body;
    
//     const productsString = selectedProducts ? selectedProducts.join(", ") : "";

//     const query = `
//       INSERT INTO industry_quotes 
//       (first_name, last_name, email, phone, country, company, designation, industry, application, application_other, project_stage, purchase_timeline, quantity, technical_requirements, additional_info, selected_products) 
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
//     `;
//     await db.query(query, [firstName, lastName, email, phone, country, company, designation, industry, application, applicationOther, projectStage, purchaseTimeline, quantity, technicalRequirements, additionalInfo, productsString]);

//     const emailHtml = `
//       <h3>New Industry Quote Request</h3>
//       <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//       <p><strong>Company:</strong> ${company} (${designation || 'N/A'})</p>
//       <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
//       <p><strong>Country:</strong> ${country}</p>
//       <hr/>
//       <p><strong>Industry:</strong> ${industry}</p>
//       <p><strong>Application:</strong> ${application} ${applicationOther ? `(${applicationOther})` : ''}</p>
//       <p><strong>Products of Interest:</strong> ${productsString}</p>
//       <p><strong>Project Stage:</strong> ${projectStage} | <strong>Timeline:</strong> ${purchaseTimeline} | <strong>Qty:</strong> ${quantity}</p>
//       <p><strong>Technical Req:</strong> ${technicalRequirements}</p>
//       <p><strong>Additional Info:</strong> ${additionalInfo}</p>
//     `;
//     await sendEmail("NEW QUOTE: Industry Request", emailHtml);

//     res.status(201).json({ message: "Industry quote submitted successfully!" });
//   } catch (err) {
//     console.error("Industry Quote Error:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// };

// exports.submitResearchQuote = async (req, res) => {
//   try {
//     const { firstName, lastName, email, phone, country, institution, applicationArea, projectDetails, requirements, projectStage, purchaseTimeline, budgetRange, additionalInfo, selectedProducts } = req.body;
    
//     const productsString = selectedProducts ? selectedProducts.join(", ") : "";

//     const query = `
//       INSERT INTO research_quotes 
//       (first_name, last_name, email, phone, country, institution, application_area, project_details, requirements, project_stage, purchase_timeline, budget_range, additional_info, selected_products) 
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
//     `;
//     await db.query(query, [firstName, lastName, email, phone, country, institution, applicationArea, projectDetails, requirements, projectStage, purchaseTimeline, budgetRange, additionalInfo, productsString]);

//     const emailHtml = `
//       <h3>New Research Quote Request</h3>
//       <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//       <p><strong>Institution:</strong> ${institution}</p>
//       <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
//       <p><strong>Country:</strong> ${country}</p>
//       <hr/>
//       <p><strong>Application Area:</strong> ${applicationArea}</p>
//       <p><strong>Products of Interest:</strong> ${productsString}</p>
//       <p><strong>Project Stage:</strong> ${projectStage} | <strong>Timeline:</strong> ${purchaseTimeline}</p>
//       <p><strong>Budget:</strong> ${budgetRange}</p>
//       <p><strong>Project Details:</strong> ${projectDetails}</p>
//       <p><strong>Requirements:</strong> ${requirements}</p>
//       <p><strong>Additional Info:</strong> ${additionalInfo}</p>
//     `;
//     await sendEmail("NEW QUOTE: Research Request", emailHtml);

//     res.status(201).json({ message: "Research quote submitted successfully!" });
//   } catch (err) {
//     console.error("Research Quote Error:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// };






const db = require('../config/db');
const sendEmail = require('../utils/sendEmail');

// Helper function to format multer files for Nodemailer
const formatAttachments = (files) => {
  if (!files || files.length === 0) return [];
  return files.map(file => ({
    filename: file.originalname,
    content: file.buffer,
    contentType: file.mimetype
  }));
};

exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, country, subject, message } = req.body;

    const query = `INSERT INTO contact_messages (name, email, phone, country, subject, message) VALUES ($1, $2, $3, $4, $5, $6)`;
    await db.query(query, [name, email, phone, country, subject, message]);

    const emailHtml = `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Country:</strong> ${country || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
    await sendEmail(`NEW CONTACT: ${subject || 'General Inquiry'}`, emailHtml);

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact Form Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};

exports.submitIndustryQuote = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, country, company, designation, industry, application, applicationOther, projectStage, purchaseTimeline, quantity, technicalRequirements, additionalInfo, selectedProducts } = req.body;
    
    const query = `
      INSERT INTO industry_quotes 
      (first_name, last_name, email, phone, country, company, designation, industry, application, application_other, project_stage, purchase_timeline, quantity, technical_requirements, additional_info, selected_products) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    `;
    await db.query(query, [firstName, lastName, email, phone, country, company, designation, industry, application, applicationOther, projectStage, purchaseTimeline, quantity, technicalRequirements, additionalInfo, selectedProducts]);

    const emailHtml = `
      <h3>New Industry Quote Request</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${company} (${designation || 'N/A'})</p>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <hr/>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Application:</strong> ${application} ${applicationOther ? `(${applicationOther})` : ''}</p>
      <p><strong>Products of Interest:</strong> ${selectedProducts || 'None'}</p>
      <p><strong>Project Stage:</strong> ${projectStage} | <strong>Timeline:</strong> ${purchaseTimeline} | <strong>Qty:</strong> ${quantity}</p>
      <p><strong>Technical Req:</strong> ${technicalRequirements}</p>
      <p><strong>Additional Info:</strong> ${additionalInfo}</p>
    `;

    // Process attachments
    const attachments = formatAttachments(req.files);

    await sendEmail("NEW QUOTE: Industry Request", emailHtml, attachments);

    res.status(201).json({ message: "Industry quote submitted successfully!" });
  } catch (err) {
    console.error("Industry Quote Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};

exports.submitResearchQuote = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, country, institution, applicationArea, projectDetails, requirements, projectStage, purchaseTimeline, budgetRange, additionalInfo, selectedProducts } = req.body;

    const query = `
      INSERT INTO research_quotes 
      (first_name, last_name, email, phone, country, institution, application_area, project_details, requirements, project_stage, purchase_timeline, budget_range, additional_info, selected_products) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `;
    await db.query(query, [firstName, lastName, email, phone, country, institution, applicationArea, projectDetails, requirements, projectStage, purchaseTimeline, budgetRange, additionalInfo, selectedProducts]);

    const emailHtml = `
      <h3>New Research Quote Request</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Institution:</strong> ${institution}</p>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <hr/>
      <p><strong>Application Area:</strong> ${applicationArea}</p>
      <p><strong>Products of Interest:</strong> ${selectedProducts || 'None'}</p>
      <p><strong>Project Stage:</strong> ${projectStage} | <strong>Timeline:</strong> ${purchaseTimeline}</p>
      <p><strong>Budget:</strong> ${budgetRange}</p>
      <p><strong>Project Details:</strong> ${projectDetails}</p>
      <p><strong>Requirements:</strong> ${requirements}</p>
      <p><strong>Additional Info:</strong> ${additionalInfo}</p>
    `;

    // Process attachments
    const attachments = formatAttachments(req.files);

    await sendEmail("NEW QUOTE: Research Request", emailHtml, attachments);

    res.status(201).json({ message: "Research quote submitted successfully!" });
  } catch (err) {
    console.error("Research Quote Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};