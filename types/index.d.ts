
export interface HrefLink {
    href: string;
    label: string;
    icon?: any
}
export interface IGlobal {
    id?: string;
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}

export interface ICategory extends IGlobal {
    designation: string,
    description: string,
    imgUrl?: string,
}

export interface IPOSTCategory {
    data: ICategory,
    msg: string
}
export interface IUPDATECategory {
    data: ICategory,
    msg: string
}
export interface IGETCategory {
    data: ICategory[],
    msg: string
}

export interface IDELETECategory {
    data: ICategory,
    msg: string
}


export interface IProducts extends IGlobal {
    designation: string,
    description: string,
    price: number,
    units: string,
    qteAlerte: number,
    entrepriseId?: string,
    categoryId?: string,
    category?: ICategory,
}
export interface IPOSTProducts {
    data: IProducts,
    msg: string
}
export interface IDELETEProducts {
    data: IProducts,
    msg: string
}
export interface IUDATEProducts {
    data: IProducts,
    msg: string
}
export interface IGETProducts {
    data: IProducts[],
    msg: string
}

export interface IUser extends IGlobal {
    fullname: string,
    username: string,
    password: string,
    is_actve?: boolean,
    entreprise?: null
    entrepriseId?: string,
}

export interface IPOSTUser {
    data: IUser,
    msg: string
}

export interface IUPDATEUser {
    data: IUser,
    msg: string
}
export interface IBLOCKUser {
    data: IUser,
    msg: string
}


export interface IGETUser {
    data: IUser[],
    msg: string
}

export interface IDELETEUser {
    data: IUser,
    msg: string
}
export interface IAuthUser {
    data: IUser,
    msg: string,
    token: string
}

export interface IEntreprise extends IGlobal {
    companyName: string,
    digitalAdress: string,
    phone: string,
    mailCompany: string,
    nationalite: string,
    province: string,
    ville: string,
    avenue: string,
    codePostale: string,
    imageUrl?: string,
    longitute: string,
    latitude: string,
}

export interface IGETEntreprise {
    data: IEntreprise[],
    msg: string
}

export interface IPOSTEntreprise {
    data: IEntreprise,
    msg: string
}

export interface IDELETEntreprise {
    data: IEntreprise,
    msg: string
}

export interface IUPDATEEntreprise {
    data: IEntreprise,
    msg: string
}