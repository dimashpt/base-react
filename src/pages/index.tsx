import { useNavigate } from '@/router';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [t] = useTranslation('main_page');

  return (
    <main className="flex w-full h-screen justify-center items-center flex-col">
      <h1>{t('title')}</h1>
      <Button color="primary" onClick={() => navigate('/home')}>
        To Home
      </Button>
    </main>
  );
};

export default MainPage;
