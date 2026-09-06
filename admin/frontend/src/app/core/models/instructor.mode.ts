import { User } from "./user.model";

export interface InstructorDTO {
  id?: string;
  userId?: string;
  specialty?: string;
  isActive?: boolean;
  user?: User;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateInstructorRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  specialty: string;
}

export interface UpdateInstructorRequest {
  specialty?: string;
  isActive?: boolean;
}
