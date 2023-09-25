import { useNavigate } from '@/router';
import { Button } from '@nextui-org/react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex w-full h-screen justify-center items-center flex-col">
      <h1>Home Page</h1>
      <Button color="primary" onClick={() => navigate(-1)}>
        Back to Main
      </Button>
    </main>
  );
};

export default HomePage;
