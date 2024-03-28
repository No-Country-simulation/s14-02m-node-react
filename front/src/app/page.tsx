'use client'
import Button from '@/components/ui/button'
import { counterStore } from '@/stores/counter-store';

export default function Home() {
  const {counter} = counterStore()

  return (
    <>
      <p>Counter: {counter}</p>
      <p>Este es el botón:</p>
      <Button />
    </>
  );
}
