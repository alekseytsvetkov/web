export const isActiveRoute = (linkname: string, pathname: string): boolean =>
    linkname.toLowerCase() === pathname.split(']/')[1];
