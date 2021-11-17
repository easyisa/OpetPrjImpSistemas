import { getConnection } from 'typeorm'

export const cleanDatabase = async (): Promise<void> => {
  const queries = ['DELETE FROM public.user', 'DELETE FROM public.animal_log', 'DELETE FROM public.animal']
  await getConnection().query(queries.join(';'))
}
