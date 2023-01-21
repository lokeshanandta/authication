export const name= /[a-zA-Z\ ]{3,15}/;


export const email = /^[^\s@]+@[^\s@]+\.([^\s@]{2,})+$/;


export const password =
/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

