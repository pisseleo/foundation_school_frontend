import { User } from "./user.model";

export interface CellGroupRequest {
  id?: string;
  name: string;
  churchId: string;
  description?: string;
  leaderId: string;
}

export interface CellGroupDTO {
  id?: string;
  name?: string;
  description?: string;
  churchId?: string;
  leaderId?: string;
  leader?: CellLeaderDTO;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CellLeaderDTO {
  id?: string;
  userId?: string;
  user?: User;
  memberOfGroupId?: string;
  group?: CellGroupDTO;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
