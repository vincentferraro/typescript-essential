import user from "../mocks/user.json";
import {
  UserInterface,
  updateUserOptional,
  updatedUserType,
} from "../models/userInterface";

export function getUser(): Promise<UserInterface> {
  return new Promise<UserInterface>((resolve) => resolve(user));
}

export function toRef<T>(value: T) {
  return {
    value,
  };
}

export function defaultValue(value = 1) {
  return value;
}

export function updateUser(updatedUser: Partial<updatedUserType>) {
  return new Promise<UserInterface>((resolve) =>
    resolve({ ...user, ...updatedUser })
  );
}
