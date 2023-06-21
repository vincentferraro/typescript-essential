export interface UserInterface {
  id?: number;
  name: string;
}

//  Possibility to create your own generic type

export interface refInterface<T> {
  value: T;
}

export type refType<T> = {
  value: T;
};

// Union in interface
export interface refUnion {
  id?: number | string;
  name: string;
}

const refUnValue: refUnion = {
  id: "string",
  name: "hello",
};

// interface Extension

export interface YoungUser extends UserInterface {
  isUnder18: Boolean;
}

const youngUser: YoungUser = {
  id: 1,
  name: "YounMen",
  isUnder18: true,
};

// Intersect type

type UserType = {
  id?: string;
  name: string;
};

type isUnder18 = {
  isUnder18: Boolean;
};

type YoungMenType = UserType & isUnder18;

const youngMenUser: YoungMenType = {
  id: "2",
  name: "YoungMenUser",
  isUnder18: false,
};

// ReadOnly
export type UserTypeWithReadOnly = Readonly<UserType>;

const user: UserTypeWithReadOnly = {
  name: "Helololo",
};

// use.name = "EH"

// Partial

function PartialFunction(user: UserType, userPartial: Partial<UserType>) {
  return { ...user, ...userPartial };
}

const userStandard: UserType = {
  id: "2",
  name: "UserStandard",
};
const userComplete = PartialFunction(userStandard, { name: "Use" });

// OMMIT INTERFACE

export type updatedUserType = Omit<UserInterface, "id">;
export type updateUserOptional = Partial<updatedUserType>;

// ENUM

export enum AdminRoles {
  "poussin",
  "coq",
  "master",
}

type Tuples = [string, string, number];

const tableau1: Tuples = [2, 3, 4];

let h1: any;
h1 = "hello";
h1 = 2;

let h2: unknown;
h2 = "hello";
h2 = 2;
// h2.getHello = "Hello Any2";

function fail(msg: string): never {
  throw new Error(msg);
}

interface ComponentWithInit {
  onInit: Function;
  value: string;
}

// class Component implements ComponentWithInit {
//   onInit = () => console.log("init");
//   value = "initialized";
// }

// const ext = new Extended();
// ext.basic = "Surchargée";

// // PRIVATE & PROTECTED
// class Private {
//   protected imPrivateProperty = 1;
// }

// class PrivateExtended extends Private {
//   unprotected = this.imPrivateProperty;
// }

// DECORATOR

function decorator() {
  console.log("Decorated");
}

@decorator
export class Decorated {}
