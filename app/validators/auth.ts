import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
        firstName: vine.string().minLength(4).maxLength(100),
        name: vine.string().minLength(2).maxLength(100),
        postName: vine.string().minLength(4).maxLength(100),
        téléphone: vine.string().maxLength(13),
        email: vine.string().email().normalizeEmail(),
        dateDeNaissance: vine.date(),
        avatar: vine.string().optional(),
        sexe: vine.enum(['male', 'female']),
        password: vine.string().minLength(6),
        nationalité: vine.string().optional(),
        adress_id: vine.string().optional(),
        role: vine.enum(['admin', 'parent']).optional(), 

        
    })    
)

export const loginValidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        password: vine.string(),
    })
)

