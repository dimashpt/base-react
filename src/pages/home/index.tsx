import { useNavigate } from '@/router';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [t] = useTranslation('home_page');

  return (
    <main className="flex w-full h-screen justify-center items-center flex-col">
      <h1>{t('title')}</h1>
      <Button color="primary" onClick={() => navigate(-1)}>
        Back to Main
      </Button>
    </main>
  );
};

export default HomePage;
