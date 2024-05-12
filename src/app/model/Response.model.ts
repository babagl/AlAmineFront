import { Boutique } from "./Boutique.model"
import { Utilisateurs } from "./utilisateur.model"

export interface Responses {
    success: boolean
    message: string
    token?: string
    data: Boutique | Utilisateurs
  }