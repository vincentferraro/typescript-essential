let nameHello: string = "hello";

console.log(nameHello);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   ${nameHello}
  </div>
`;
