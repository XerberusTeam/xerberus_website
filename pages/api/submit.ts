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
  ctosi: string;
  audit: string;
  newm: string;
  ibile: string;
  stripper: string;
  cardax: string;
  resi: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests are allowed" });
  }

  const body = req.body as SheetForm;
  try {
    // prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

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
            body.ctosi,
            body.audit,
            body.newm,
            body.ibile,
            body.stripper,
            body.cardax,
            body.resi,
          ],
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
