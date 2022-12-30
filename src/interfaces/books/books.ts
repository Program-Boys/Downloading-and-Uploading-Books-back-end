import { Books } from '@prisma/client';

export interface IBookRequest {
  name: string | undefined;
  gender: string | undefined;
}

export type TypeBookId = Pick<Books, 'id'>;
