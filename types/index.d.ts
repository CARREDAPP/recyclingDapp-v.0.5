
interface HrefLink {
    href: string;
    label: string;
    icon?: any
}
interface IGlobal {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}

interface ICategory extends IGlobal {
    designation: string,
    description: string,
    imgUrl?: string,
}

interface IPOSTCategory {
    data: ICategory,
    msg: string
}
interface IUPDATECategory {
    data: ICategory,
    msg: string
}
interface IGETCategory {
    data: ICategory[],
    msg: string
}