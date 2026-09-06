export interface ChurchDTO {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  myRoles?: string[];
}

export interface CreateChurchRequest {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
}
