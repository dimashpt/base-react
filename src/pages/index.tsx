import { useNavigate } from '@/router';
import { Button } from '@nextui-org/react';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex w-full h-screen justify-center items-center flex-col">
      <h1>Main Page</h1>
      <Button color="primary" onClick={() => navigate('/home')}>
        To Home
      </Button>
    </main>
  );
};

export default MainPage;
