import { Container } from '@/components/shared/container';
import { Title } from '@/components/ui';
import { Categories } from '@/components/shared/categories';

export default function Home() {
  return (
    <Container className='mt-10 flex flex-col items-start gap-4'>
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      <Categories/>
    </Container>
  );
}
