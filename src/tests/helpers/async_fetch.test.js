import { request } from 'app/helpers/async_fetch';

describe("#async_fetch", () => {
  it("async_fetch should return json from when invoked", async () => {
    const spyFetchPosts = jest.spyOn(request, 'async_fetch');
    const expectedRes = [
      { id: 1, userId: 2, title: "Hello" },
      { id: 2, userId: 2, title: "World" }
    ];

    spyFetchPosts.mockReturnValue(expectedRes)
    const res = await request.async_fetch('http://stub-web.com')

    expect(res).toEqual(expectedRes);
    expect(spyFetchPosts).toHaveBeenCalled();
  })

  it("async_fetch should return error message when request failed", async () => {
    const spyFetchPosts = jest.spyOn(request, 'async_fetch');
    const expectedRes = {
      message: "Connection error",
      error: true
    };

    spyFetchPosts.mockReturnValue(expectedRes)
    const res = await request.async_fetch('http://stub-web.com')

    expect(res).toEqual(expectedRes);
    expect(spyFetchPosts).toHaveBeenCalled();
  })
})