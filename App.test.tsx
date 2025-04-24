import {expect, test} from 'vitest'


test("Test Corretto", trueTest);

const EnvVariable = (import.meta.env.VITE_FAIL_TEST as string).trim().toLowerCase();

test.runIf(EnvVariable === 'true')("Test Errato", falseTest)


function trueTest() : void{
    expect(2+2).toBe(4);
}

function falseTest() : void{
    expect(2+2).toBe(5);
}