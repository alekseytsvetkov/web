export const isActiveRoute = (linkname: string, pathname: string): boolean => linkname === pathname.split(']/')[1];
