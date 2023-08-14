import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

export function userCreds(url:string):credentials{
    const extraction = url.split("#")[1].split('&')
    const creds:credentials = {
            accessToken: extraction[0].split('=')[1],
            refreshToken: extraction[3].split('=')[1],
            expires: extraction[1].split('=')[1]
    }
    return creds
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
