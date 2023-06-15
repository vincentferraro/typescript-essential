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
