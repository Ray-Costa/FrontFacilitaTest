import {z} from 'zod';

 const registerformSchema = z.object({
    name: z.string().min(3, "Este campo é obrigatório. "),
    email: z.string().email("Forneca um e-mail válido.").min(1, "Este campo é obrigatório. "),
    phoneNumber: z.string().min(10, {message: 'Phone number must be at least 10 characters long'}),

});

 export {registerformSchema};
