// export interface Contact {
//     id: number;
//     first_name: string;
//     last_name: string;
//     email: string;
//     gender: string;
//     ip_address: string;
// }


export interface Contact {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  descripcion: string
}

export const defaultContact:Contact = {
  firstName: "First name",
  lastName: "Last Name",
  phoneNumber: "+5412345678",
  email: "aiuhfueah@gmail.com",
  descripcion: "kahfuahfue"
}
