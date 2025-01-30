import { google } from "googleapis";

// Service Account Credentials from budget-app-key.json
const CLIENT_EMAIL = "budget-app-service@budget-app-e478b.iam.gserviceaccount.com";
const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqpYvbZ4xu+GgN
3tKISTjaNS67+2vd8/t/eZXi1MBNvwIc2KHPQg/VpyW8zsNfaaDdtftMYxl40nEx
B5iSli4iS0l0fkwG2jqZK3gLFv8HY9LsqCIgL5KMZirgnoebfiSeKGF7Tc01l5XB
FQkAU4GFsPL5nFnAfExwwvdSk7vOJE9xO+T77P1YtX03rxeAXtE1bcbd0SmnYAPa
0SkVRJ42wmE/imRRP78IRYXXxEO33s1Cd6R/tH5u1Frasgy8Zc3KjjYJ2KLwevrY
1k3o3wMEEdZ4mKdegrGqoRmZQ5r/cAA6gwHTzoroPIMHO3MX5DN+YpRr4m5UcLXy
Qf64QV3BAgMBAAECggEAF0s1xiNiZht+iLYr4vKr0g2EbaCqXsfZQtNkBGyqO3Kh
ZTKlE9eetbl1S0qmHLYcgWdAAHNenMGNNfYle40IiyHfywkac60CZroqTsk60tVr
i2aAEgisZoHjxHmfZThY40X72IsMQg6JIKwwaFz9xzQaVrxi/AV7ocDbZehIsKDH
LnR+Isp2Xn92IRnNlc6oI8wAephwIELzBG2th1DpqBuhd08BSa/96kHyjBUNDzHl
z8MO6fvkrUHW6YBl7sNCdnF/phBvDPq5wXb+Z9ElhiraGLrNwO5p/uPv7UjbbpTf
ra1ZP8GIaTahJXiOoqRc4DOwXXKXnJLcwrZMciZTSQKBgQDTeW/vLlj+cx33W9VL
Jkp4rg1+HthkEx2zv8VvIYiPg0eOO7F1GGeV2j5vR65krVcATj0IjE5crRd2XSe8
NPBnifbdEeRIqnYCKmfwUHhzakFf58E5nb2RM2GdOvdj+A4VaDryoFWvzPliAPW4
GBWPMqk8DLeAfDJgPxw8V0irJwKBgQDOk3pUfFkvWFjzNq4q6Sc75lIGgtoEdRgJ
9OjCOOpx6aRUcpQRJBb0v3V3V36ENNrfgcv1t+lYuV3/H0xnyhme+l5IyMrxGO1B
lwBtFQIUdOODkcnod3NfYk2KpDaPhqiI0vBaX2dz1o2/5gB58vVm3pDdohohNLeh
B5ePqH1g1wKBgQCwTJEQqWbv2jClQx3yZJ25NgFxn21vILCmZb3HBAHBAwTogsNS
h2Hz/9oFE5FDxW6+hntDYRUDFhp1RvwVX1z8NHxlmMDkA5gV/hxgr/V64p5VwfPI
gMTFBDzgw4PzB51WI2rhUuGcihltprczHoD6vJVxxnhE2UV2D6cOdwXSCQKBgQDA
q1KMXBI+k1MbPOPDCATc3Fui0QaQ47mRB8jT5YvcxQLM9LTfK97xVWU08vkAS9/c
WM4nlungI7vkyIdVwmyVF4U6s3R83DflVfZCxzZSaBcPTrmXxVlpHGGgLrrosLqe
KsecMqFlrDY3RkkpdI6n7GwHGzrtv6KJYXBdv9N4rwKBgHRs5IRKQfQqsf8Uh3cI
2bXD9rySKFe0kr0oikxeoXAfA+tuP3SFuSFPjma8zrJ4vSP8KYJq7CIbTJe8VsZX
vvxQvdaG+ROmHngCTKJ2bqxZtalxgAp82uih0dEKp6aJZNSDyN+m5DupnxALTmP7
zSuF4NBy5FAefnP9mJhVVBBc
-----END PRIVATE KEY-----`.replace(/\\n/g, '\n'); // Fix key format

const SHEET_ID = "138sBICUrQVbRSc4jcsR-iBaMALW3SWcRFHo8RKrxlMM"; // Replace with the actual ID from Google Sheets

async function appendData(values) {
  try {
    const auth = new google.auth.JWT(
      CLIENT_EMAIL,
      null,
      PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Budget!A1",
      valueInputOption: "USER_ENTERED",
      resource: { values: [values] },
    });

    console.log("Data added:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export { appendData };
