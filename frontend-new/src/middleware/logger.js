import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJndWJlcmFraGlsYW0uZGV2QGdtYWlsLmNvbSIsImV4cCI6MTc4MTY3OTgwNSwiaWF0IjoxNzgxNjc4OTA1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZjgyNzA5ODctZjE1NS00NDFlLTllNTgtMzk5OGFmZTczZGJlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ3ViZXIgYWtoaWxhbiBzIiwic3ViIjoiY2Y0ZTg0MmUtOWMwMi00NWM5LTgwMjAtNTlmMDkzNzQwZDhlIn0sImVtYWlsIjoiZ3ViZXJha2hpbGFtLmRldkBnbWFpbC5jb20iLCJuYW1lIjoiZ3ViZXIgYWtoaWxhbiBzIiwicm9sbE5vIjoiMTEzMDIzMjQzMDI5IiwiYWNjZXNzQ29kZSI6Imp1RnBodiIsImNsaWVudElEIjoiY2Y0ZTg0MmUtOWMwMi00NWM5LTgwMjAtNTlmMDkzNzQwZDhlIiwiY2xpZW50U2VjcmV0IjoiVmF5Tnh5VUJ2bURzalBhQSJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJndWJlcmFraGlsYW0uZGV2QGdtYWlsLmNvbSIsImV4cCI6MTc4MTY4MTM5OSwiaWF0IjoxNzgxNjgwNDk5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZmRkNWZkYzEtNGJhMy00YzBiLWIwZGUtMjI5ZDNlMTkyYTUxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ3ViZXIgYWtoaWxhbiBzIiwic3ViIjoiY2Y0ZTg0MmUtOWMwMi00NWM5LTgwMjAtNTlmMDkzNzQwZDhlIn0sImVtYWlsIjoiZ3ViZXJha2hpbGFtLmRldkBnbWFpbC5jb20iLCJuYW1lIjoiZ3ViZXIgYWtoaWxhbiBzIiwicm9sbE5vIjoiMTEzMDIzMjQzMDI5IiwiYWNjZXNzQ29kZSI6Imp1RnBodiIsImNsaWVudElEIjoiY2Y0ZTg0MmUtOWMwMi00NWM5LTgwMjAtNTlmMDkzNzQwZDhlIiwiY2xpZW50U2VjcmV0IjoiVmF5Tnh5VUJ2bURzalBhQSJ9.UcP31mIvIir7UoO_d9tG_W3gxjoHMPhnJP4Oy_vEqTA";

export async function Log(stack, level, packageName, message) {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Log API Error");
  }
}