import { IRole } from "../types";

export const checkAuth = async (...role: IRole[]) => {
  console.log(role);
};


checkAuth(IRole.owner, IRole.visitor)