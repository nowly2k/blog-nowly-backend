import { body } from "express-validator";

export const loginValidator = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Минимальная длина пароля 5 символов').isLength({ min: 5 }),
]

export const registerValidator = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Минимальная длина пароля 5 символов').isLength({ min: 5 }),
    body('fullName', 'Укажите имя').isLength({ min: 2 }),
    body('avatarUrl', 'Некорректная ссылка на аватарку').optional().isURL(),
]

export const postCreateValidator = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
    body('tags', 'Неверный формат тегов').optional().isString(),
    body('imageUrl', 'Некорректная ссылка на изображение').optional().isString(),
]