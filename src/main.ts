import { getUser } from "./services/user";
import { defaultValue, toRef } from "./services/user";
import {
  refInterface,
  refType,
  AdminRoles,
  Decorated,
} from "./models/userInterface";
const user = await getUser();
user.id?.toExponential();

class Ref<T> {
  constructor(public value: T) {}
}
class RefClassic<T> {
  constructor(public value: T) {}
}
const dValue = defaultValue();
const stringRef = new Ref(user.name);
stringRef.value;
const numberRef = new Ref<number | string | undefined>(user.id);
numberRef.value;

const toRefValue = toRef<string>("hello");

const refValueInter: refInterface<string> = { value: "hello" };
const refValueTyped: refType<number> = { value: 2 };

console.log(AdminRoles.coq);
const d = new Decorated();
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${user.name}<br/>
    ${dValue}<br/>
    ${toRefValue.value}
  </div>
`;
