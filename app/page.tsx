import Posts from '@/components/Posts/Posts';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Posts />
    </>
  );
}
