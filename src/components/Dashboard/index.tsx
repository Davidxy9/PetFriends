import { Category } from '../Category';
import { Product } from '../Product';
import { Summary } from '../Summary';


export function Dashboard() {
  return (
    <>
      <Summary />
      <Category />
      <Product />
    </>
  );
}
