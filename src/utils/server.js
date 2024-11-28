const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/credentials.json', // Path to your credentials file
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const spreadsheetId = 'your_spreadsheet_id'; 

app.post('/add-to-sheet', async (req, res) => {
  const { formData } = req.body;

  try {
    const authClient = await auth.getClient();
    const request = {
      spreadsheetId,
      range: 'Sheet1!A1', // Adjust the range as needed
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [
            formData.name,
            formData.email,
            formData.phone,
            formData.gender,
            formData.food,
            formData.collegeName,
            formData.degree,
            formData.department,
            formData.yearOfStudy,
            formData.events.join(', '),
            formData.passportPic,
            formData.signaturePic,
            formData.paymentReceipt,
          ],
        ],
      },
      auth: authClient,
    };

    await sheets.spreadsheets.values.append(request);
    res.status(200).send('Data added to Google Sheets');
  } catch (error) {
    console.error('Error adding data to Google Sheets:', error);
    res.status(500).send('Error adding data to Google Sheets');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});