// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mocks/server";

//모든 테스트가 시작하기 전에 listen 해준다.
beforeAll(() => server.listen());

//테스트 중에 추가한 핸들러들을 리셋해준다
afterEach(() => server.resetHandlers());

//서버를 꺼준다.
afterAll(() => server.close());
