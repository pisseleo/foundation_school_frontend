import { InstructorDTO } from "./instructor.mode";

export interface LessonDTO {
  id?: string;
  classId?: string;
  title?: string;
  description?: string;
  videoUrl?: string;
  availabilityDate?: string;
  durationMinutes?: number;
  sequenceOrder?: number;
  registeredByInstrutor?: InstructorDTO;
  registeredByInstructorName?: string;
  registeredById?: string;
  lessonDate?: string;
  isActive?: boolean;
  registeredByInstructorId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateLessonRequest {
  title: string;
  description?: string;
  lessonDate: string;
  instructorId?: string;
  videoUrl?: string;
  availabilityDate?: string;
  durationMinutes?: number;
  sequenceOrder?: number;
}

export interface UpdateLessonRequest {
  title: string;
  description?: string;
  lessonDate: string;
  instructorId?: string;
  isActive?: boolean;
  videoUrl?: string;
  availabilityDate?: string;
  durationMinutes?: number;
  sequenceOrder?: number;
}
