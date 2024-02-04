
export interface HrefLink {
    href: string;
    label: string;
    icon?: any
}
export interface IGlobal {
    id?: string;
    createdAt?: string
    updatedAt?: string
    deletedAt?: string | null;
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

    designation: string;
    description: string;
    price: number;
    units: string;
    qteAlerte: number;
    entrepriseId: string;
    categoryId: string;
    category?: ICategory;
    stocks?: IStock[];

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
export interface IStock extends IGlobal {
    quantity?: number,
    productId?: string,
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
    data: IEntreprise,
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

export interface IDetailsEntre extends IGlobal {
    price: string,
    quantity: number,
    enteteEntreId?: string,
    productId?: string,
    products?: IProducts
}



export interface IPostDetailsEntre extends IGlobal {
    data: IDetailsEntre,
    msg: string
}




export interface IGetSupply {
    msg: string,
    data: SupplyDetail[]
}

interface Supply extends IGlobal {
    dateEntre: string;
    detailsEntres: SupplyDetail[];
}

interface SupplyDetail extends IGlobal {
    price: number;
    quantity: number;
    enteteEntreId: string;
    productId: string;
    product: IProducts;
}

