/**
 * 1) Create an interface User with required properties name (string) and age (number).
 *    Required create an object with only the name property. (This should ERROR)
 */
interface User {
  name: string;
  age: number;
}

const user1: Partial<User> = { name: "Mohamed" };

/**
 * 2) Create an interface Profile with optional properties username (string) and email (string).
 *    Required create an object with both properties.
 */
interface Profile {
  username?: string;
  email?: string;
}

const profile1: Required<Profile> = {
  username: "3ab2wy",
  email: "3ab2wy1911@gmail.com",
};

/**
 * 3) Use Record to create an object where keys are "red", "green", and "blue",
 *    and values are their corresponding hex color codes (strings).
 *    Test by accessing the red key.
 */

type RGB = "red" | "green" | "blue";

const colorsHex: Record<RGB, string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

console.log(colorsHex.red);
// console.log(colorsHex.purple);

/**
 * 4) Create an interface Person with properties name (string), age (number), and email (string).
 *    Create a new type with only the name and email properties.
 *    Test by creating an object with these properties.
 */
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonNameEmail = Pick<Person, "name" | "email">;

const p1: PersonNameEmail = {
  name: "Mohamed Ahmed",
  email: "3ab2wy1911@gmail.com",
};

/**
 * 5) Use the same Person interface.
 *    Create a new type without the age property.
 *    Test by creating an object with only name and email.
 */
type PersonWithoutAge = Omit<Person, "age">;

const p2: PersonWithoutAge = {
  name: "Mohamed Ahmed",
  email: "3ab2wy1911@gmail.com",
};

/**
 * 6) Create a union type Colors = "red" | "green" | "blue" | "yellow".
 *    Create a new type without "yellow".
 *    Test by assigning a value of the new type.
 */
type Colors = "red" | "green" | "blue" | "yellow";

type Colors1 = Exclude<Colors, "yellow">;

let c1: Colors1 = "red";
// let c2: ColorsNoYellow = "yellow";

/**
 * 7) Use the same Colors union type.
 *    Create a new type with only "red" and "blue".
 *    Test by assigning a value of the new type.
*/
type Colors2 = Extract<Colors, "red" | "blue">;

let c3: Colors2 = "blue";
// let c4: Colors2 = "green";

/**
 * 8) Create a union type MaybeString = string | null | undefined.
 *    Create a new type without null or undefined.
 *    Test by assigning a value of the new type.
 */

type MaybeString = string | null | undefined;

type NonNullString = Exclude<MaybeString, null | undefined>;

let s1: NonNullString = "Hello";
// let s2: NonNullString = null;
// let s3: NonNullString = undefined;
