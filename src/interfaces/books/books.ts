import { Books } from '@prisma/client';

export interface IBookRequest {
  name: string | undefined;
  gender: string | undefined;
}

export type TypeBookId = Pick<Books, 'id'>;
export type TypePatchBook = Pick<Books, 'id' | 'name' | 'gender'>;
