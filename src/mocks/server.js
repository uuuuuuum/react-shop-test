import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// mocking
export const server = setupServer(...handlers);
