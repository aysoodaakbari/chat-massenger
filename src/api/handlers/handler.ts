import { faker } from "@faker-js/faker";
import { rest } from "msw";
const loginEndPoint = `${window.location.href}/api/login`;
const getMassegeEndPoint = "/api/massages";

export const handlers = () => [
  rest.post(loginEndPoint, (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json({
        phoneNumber: faker.number.int(),
        password: faker.internet.password(),
      }),
    );
  }),

  // massage get Api
  rest.get("getMassegeEndPoint", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json({
        id: 1,
        massage: {
          massageId: faker.number.int(),
          textMassage: faker.string.sample({ min: 5, max: 25 }),
          sender: faker.helpers.arrayElement(["Aysooda", "bot"]),
        },
      }),
    );
  }),
];
