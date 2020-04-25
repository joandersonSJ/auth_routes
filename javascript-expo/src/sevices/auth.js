export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "ajlkdasdlakdsjklajslkajdlkaksldjajdsladkja",
        user: {
          name: "Scraggy",
          role: "Mage/Necromancer",
          race: "High Elf",
        },
      });
    }, 2000);
  });
}
