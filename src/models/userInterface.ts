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
