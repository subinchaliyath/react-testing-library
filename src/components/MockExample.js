
const randomSpy = jest.spyOn(Math, 'random');
randomSpy.mockClear().mockReturnValue(0);
randomSpy.mockClear().mockImplementation(() => 0.999999);