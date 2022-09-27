// export interface Contact {
//     id: number;
//     first_name: string;
//     last_name: string;
//     email: string;
//     gender: string;
//     ip_address: string;
// }

// CONTACTOS DE PRUEBA INSTANCIADOS EN ASSETS MOCK DATA
export interface Contact {
  firstName: string,
  lastName: string,
  phoneNumber: string,
}

export const defaultContact:Contact = {
  firstName: "First name",
  lastName: "Last Name",
  phoneNumber: "+5412345678"
}
