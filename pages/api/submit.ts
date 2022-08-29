import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  email: string;
  wmt: string;
  hosky: string;
  min: string;
  charli: string;
  wing: string;
  sundae: string;
  meld: string;
  vyfi: string;
  xray: string;
  drip: string;
  emp: string;
  milk: string;
  agix: string;
  dana: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests are allowed" });
  }

  const body = req.body as SheetForm;
  console.log("body: " + body);
  try {
    // prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    console.log("auth: " + auth);

    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    console.log("sheets: " + sheets);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: "A1:O1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.email,
            body.wmt,
            body.hosky,
            body.min,
            body.charli,
            body.wing,
            body.sundae,
            body.meld,
            body.vyfi,
            body.xray,
            body.drip,
            body.emp,
            body.milk,
            body.agix,
            body.dana,
          ],
        ],
      },
    });
    console.log("response api: " + response);

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
